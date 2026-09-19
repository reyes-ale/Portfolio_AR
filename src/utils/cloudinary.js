// Ayudantes para pedirle a Cloudinary versiones livianas de los videos:
// resolución acotada, calidad/códec automáticos, y una miniatura jpg como
// poster para que la tarjeta muestre algo de inmediato sin esperar el video.

const CLOUDINARY_MARKER = 'res.cloudinary.com';

function isCloudinaryUrl(url) {
  return typeof url === 'string' && url.includes(CLOUDINARY_MARKER) && url.includes('/upload/');
}

/**
 * Inserta transformaciones justo después de /upload/: calidad/códec
 * automáticos, ancho máximo, toma los primeros `sourceSeconds` (son
 * grabaciones de pantalla completas de hasta 2 minutos) y los reproduce al
 * doble de velocidad, para que la tarjeta muestre el doble de contenido en
 * la mitad del tiempo real (~sourceSeconds/2) sin pesar más.
 */
export function optimizedVideoUrl(url, width = 780, sourceSeconds = 40) {
  if (!isCloudinaryUrl(url)) return url;
  return url.replace(
    '/upload/',
    `/upload/q_auto:eco,f_auto,w_${width},du_${sourceSeconds},e_accelerate:100/`,
  );
}

/** Miniatura jpg autogenerada de un video de Cloudinary, para usar como poster. */
export function videoPosterUrl(url, width = 780) {
  if (!isCloudinaryUrl(url)) return undefined;
  return optimizedVideoUrl(url, width).replace(/\.[a-z0-9]+$/i, '.jpg');
}
