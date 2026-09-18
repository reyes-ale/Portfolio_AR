# Videos de proyectos

Los videos y los `.zip` descargables son muy pesados para vivir en el repo de
GitHub, así que se alojan en Cloudinary y `src/data/projects.js` apunta
directo a esas URLs (campo `video` y `link`/`download`).

**Cuenta de Cloudinary:** cloud name `dyav94mbo`, carpeta `portafolio`,
upload preset sin firma `portafolio` (Settings → Upload → Upload presets).

## Agregar o reemplazar un video

1. Sube el archivo a la carpeta `portafolio` en el
   [dashboard de Cloudinary](https://cloudinary.com/console/media_library)
   (o usa el preset `portafolio` con la API de upload).
2. Copia la `secure_url` que te da Cloudinary
   (algo como `https://res.cloudinary.com/dyav94mbo/video/upload/v.../nombre.mp4`).
3. Pégala en el campo `video` del proyecto correspondiente en
   `src/data/projects.js`.

**Límite del plan actual:** los videos aceptan hasta 100MB. Si un archivo
pesa más, primero compŕimelo (por ejemplo con `ffmpeg -crf 20`) antes de
subirlo.

## Archivos `.zip` descargables

El plan actual de Cloudinary solo permite hasta 10MB para archivos `raw`
(no-video) sin firma, así que los `.zip` de Mini Access y Swimming Olympics
Simulator (~59MB cada uno) se alojan en un
[GitHub Release](https://github.com/reyes-ale/Portfolio_AR/releases/tag/assets-v1)
del mismo repo en vez de en Cloudinary. El campo `link` de esos proyectos en
`projects.js` apunta directo a esas URLs de descarga.

Para reemplazar uno de esos `.zip`: sube el archivo nuevo a ese mismo
release (o crea uno nuevo) desde GitHub y actualiza el `link` en
`projects.js`.

## Si no hay video

Mientras un proyecto no tenga `video` (o la URL falle), la tarjeta muestra
la `photo` del proyecto si existe, o si no, un marcador con el nombre del
archivo esperado.
