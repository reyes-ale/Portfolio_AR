// Ayudantes para pedirle a Cloudinary versiones livianas de los videos:
// resolución acotada, calidad/códec automáticos, y una miniatura jpg como
// poster para que la tarjeta muestre algo de inmediato sin esperar el video.

const CLOUDINARY_MARKER = 'res.cloudinary.com';

function isCloudinaryUrl(url) {
  return typeof url === 'string' && url.includes(CLOUDINARY_MARKER) && url.includes('/upload/');
}

/**
 * Inserta transformaciones justo después de /upload/: calidad/códec
 * automáticos, ancho máximo, y recorta a los primeros `maxSeconds` (son
 * grabaciones de pantalla completas de hasta 2 minutos, pero en la tarjeta
 * solo se usan como vista previa en loop corto).
 */
export function optimizedVideoUrl(url, width = 780, maxSeconds = 20) {
  if (!isCloudinaryUrl(url)) return url;
  return url.replace('/upload/', `/upload/q_auto,f_auto,w_${width},du_${maxSeconds}/`);
}

/** Miniatura jpg autogenerada de un video de Cloudinary, para usar como poster. */
export function videoPosterUrl(url, width = 780) {
  if (!isCloudinaryUrl(url)) return undefined;
  return optimizedVideoUrl(url, width).replace(/\.[a-z0-9]+$/i, '.jpg');
}
