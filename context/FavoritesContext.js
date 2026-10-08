import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

const FAVORITES_KEY = '@spotifysito_favorites';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState({
    artists: [],
    albums: [],
  });

  const [loaded, setLoaded] = useState(false);

  // Cargar favoritos guardados al iniciar
  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const savedFavorites = await AsyncStorage.getItem(
        FAVORITES_KEY
      );

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error(
        'Error cargando favoritos:',
        error
      );
    } finally {
      setLoaded(true);
    }
  }

  // Guardar favoritos cada vez que cambien
  useEffect(() => {
    if (!loaded) {
      return;
    }

    saveFavorites();
  }, [favorites, loaded]);

  async function saveFavorites() {
    try {
      await AsyncStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
      );
    } catch (error) {
      console.error(
        'Error guardando favoritos:',
        error
      );
    }
  }

  function toggleArtist(artist) {
    setFavorites((current) => {
      const exists = current.artists.some(
        (item) => item.idArtist === artist.idArtist
      );

      return {
        ...current,
        artists: exists
          ? current.artists.filter(
              (item) => item.idArtist !== artist.idArtist
            )
          : [...current.artists, artist],
      };
    });
  }

  function toggleAlbum(album) {
    setFavorites((current) => {
      const exists = current.albums.some(
        (item) => item.idAlbum === album.idAlbum
      );

      return {
        ...current,
        albums: exists
          ? current.albums.filter(
              (item) => item.idAlbum !== album.idAlbum
            )
          : [...current.albums, album],
      };
    });
  }

  function isArtistFavorite(idArtist) {
    return favorites.artists.some(
      (item) => item.idArtist === idArtist
    );
  }

  function isAlbumFavorite(idAlbum) {
    return favorites.albums.some(
      (item) => item.idAlbum === idAlbum
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleArtist,
        toggleAlbum,
        isArtistFavorite,
        isAlbumFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}