import { useState } from 'react';
import styles from './VideoFrame.module.css';

/**
 * Vista previa de un proyecto: video en loop si hay `src`, si no una `photo`
 * fija, y si ninguna carga, un marcador con el nombre del archivo (igual que
 * Polaroid hace con las fotos).
 */
export default function VideoFrame({ src, photo, label, className = '', style }) {
  const [failed, setFailed] = useState(!src);
  const fileName = src ? src.split('/').pop() : 'preview.mp4';

  if (failed && photo) {
    return (
      <div className={`${styles.frame} ${className}`} style={style}>
        <img className={styles.photo} src={photo} alt={label ?? ''} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${className}`} style={style}>
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
          className={styles.video}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
