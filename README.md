# Spotifysito

Spotifysito es una aplicación móvil desarrollada con React Native y Expo como proyecto para practicar diferentes tipos de navegación y el consumo de una API externa.

La aplicación permite explorar artistas, consultar sus álbumes y ver las canciones disponibles. También cuenta con un sistema de favoritos para guardar artistas y álbumes.

## ¿Qué se hizo?

Durante el desarrollo trabajamos principalmente en:

- Navegación con Stack, Tabs y Drawer.
- Consulta de información musical desde una API externa.
- Listado de artistas y álbumes.
- Vista de detalle de artistas y álbumes.
- Consulta de canciones de cada álbum.
- Sistema de favoritos.
- Guardado de favoritos para que no se pierdan al cerrar la aplicación.
- Diseño de una interfaz oscura con detalles en color morado.

## API utilizada

Para obtener la información de artistas, álbumes y canciones utilizamos **TheAudioDB**.

La API nos permite buscar un artista y obtener información como:

- Nombre del artista.
- Género.
- Imagen.
- Álbumes.
- Canciones.
- Duración de las canciones.

También utilizamos los endpoints de la API para consultar los álbumes de un artista y las canciones de un álbum.

## Tecnologías utilizadas

- React Native
- Expo
- React Navigation
- JavaScript
- TheAudioDB API
- AsyncStorage
- Expo Vector Icons

## Navegación

La aplicación utiliza los tres tipos de navegación solicitados en el proyecto:

**Drawer**
- Inicio
- Explorar
- Perfil
- Acerca de

**Tabs**
- Artistas
- Álbumes
- Favoritos

**Stack**
- Lista de artistas → Detalle del artista
- Lista de álbumes → Detalle del álbum → Canciones

## Favoritos

Los artistas y álbumes se pueden guardar como favoritos. Para conservar estos datos utilizamos `AsyncStorage`, por lo que los favoritos permanecen guardados aunque se cierre la aplicación.

## Ejecutar el proyecto

Primero instalar las dependencias:

```bash
npm install
