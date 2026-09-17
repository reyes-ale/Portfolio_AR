import { useState } from 'react';
import styles from './Polaroid.module.css';

/**
 * Foto impresa. Si `src` no carga, muestra un marcador con el nombre del archivo.
 *
 * variant: 'polaroid' (borde inferior ancho) | 'print' (borde parejo) | 'torn' (borde rasgado)
 * rotate:  inclinación en grados
 * children: se dibuja encima de la foto (clips, cintas, textos)
 */
export default function Polaroid({
  src,
  alt = '',
  caption,
  variant = 'polaroid',
  rotate = 0,
  className = '',
  style,
  children,
}) {
  const [failed, setFailed] = useState(!src);
  const fileName = src ? src.split('/').pop() : 'photo.jpg';

  return (
    <figure
      className={`${styles.frame} ${styles[variant]} ${className}`}
      style={{ '--rotate': `${rotate}deg`, ...style }}
    >
      <div className={styles.window}>
        {failed ? (
          <div className={styles.placeholder} role="img" aria-label={alt || 'Photo placeholder'}>
            <svg viewBox="0 0 80 100" aria-hidden="true" className={styles.silhouette}>
              <circle cx="40" cy="38" r="17" />
              <path d="M8 100c2-24 15-36 32-36s30 12 32 36z" />
            </svg>
            <span className={styles.fileName}>{fileName}</span>
          </div>
        ) : (
          <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      {children}
    </figure>
  );
}
