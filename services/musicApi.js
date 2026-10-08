const API_URL = 'https://www.theaudiodb.com/api/v1/json/123';

export async function searchArtist(name) {
  try {
    const response = await fetch(
      `${API_URL}/search.php?s=${encodeURIComponent(name)}`
    );

    if (!response.ok) {
      throw new Error('Error al consultar el artista');
    }

    const data = await response.json();

    return data.artists?.[0] || null;
  } catch (error) {
    console.error('Error buscando artista:', error);
    return null;
  }
}

export async function getArtistAlbums(name) {
  try {
    // Primero buscamos el artista para obtener su ID
    const artist = await searchArtist(name);

    if (!artist?.idArtist) {
      return [];
    }

    // Con el ID obtenemos los álbumes completos
    const response = await fetch(
      `${API_URL}/album.php?i=${artist.idArtist}`
    );

    if (!response.ok) {
      throw new Error('Error al consultar los álbumes');
    }

    const data = await response.json();

    return data.album || [];
  } catch (error) {
    console.error('Error buscando álbumes:', error);
    return [];
  }
}

export async function getAlbumSongs(albumId) {
  try {
    const response = await fetch(
      `${API_URL}/track.php?m=${albumId}`
    );

    if (!response.ok) {
      throw new Error('Error al consultar las canciones');
    }

    const data = await response.json();

    return data.track || [];
  } catch (error) {
    console.error('Error buscando canciones:', error);
    return [];
  }
}