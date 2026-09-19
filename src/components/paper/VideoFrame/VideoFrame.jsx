import { useEffect, useRef, useState } from 'react';
import { optimizedVideoUrl, videoPosterUrl } from '@/utils/cloudinary.js';
import styles from './VideoFrame.module.css';

/**
 * Vista previa de un proyecto: video en loop si hay `src`, si no una `photo`
 * fija, y si ninguna carga, un marcador con el nombre del archivo (igual que
 * Polaroid hace con las fotos).
 *
 * Para no cargar y decodificar todos los videos de la cinta a la vez (lento
 * y pesado, más que nada por la decodificación en sí, no solo el peso del
 * archivo): el archivo se asigna un poco antes de que la tarjeta sea
 * visible, pero solo se REPRODUCE cuando queda bien centrada/visible
 * (60%+); el resto se pausa aunque se asomen un poco. Mientras tanto se ve
 * el poster (miniatura jpg autogenerada por Cloudinary).
 */
export default function VideoFrame({ src, photo, label, className = '', style }) {
  const [failed, setFailed] = useState(!src);
  const [shouldLoad, setShouldLoad] = useState(false);
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src) return undefined;
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
        if (entry.intersectionRatio >= 0.6) {
          videoRef.current?.play?.().catch(() => {});
        } else {
          videoRef.current?.pause?.();
        }
      },
      { rootMargin: '0px 80px', threshold: [0, 0.6] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [src]);

  const fileName = src ? src.split('/').pop() : 'preview.mp4';

  if (failed && photo) {
    return (
      <div className={`${styles.frame} ${className}`} style={style} ref={wrapperRef}>
        <img className={styles.photo} src={photo} alt={label ?? ''} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${className}`} style={style} ref={wrapperRef}>
      {failed ? (
        <div
          className={styles.placeholder}
          role="img"
          aria-label={label ? `${label} preview placeholder` : 'Video preview placeholder'}
        >
          <svg viewBox="0 0 64 64" aria-hidden="true" className={styles.reelIcon}>
            <circle cx="32" cy="32" r="25" />
            <circle cx="32" cy="14" r="4" />
            <circle cx="48" cy="24" r="4" />
            <circle cx="48" cy="42" r="4" />
            <circle cx="32" cy="52" r="4" />
            <circle cx="16" cy="42" r="4" />
            <circle cx="16" cy="24" r="4" />
          </svg>
          <span className={styles.fileName}>{fileName}</span>
        </div>
      ) : (
        <video
          ref={videoRef}
          className={styles.video}
          src={shouldLoad ? optimizedVideoUrl(src) : undefined}
          poster={videoPosterUrl(src)}
          loop
          muted
          playsInline
          preload={shouldLoad ? 'auto' : 'none'}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
