import styles from './WaxSeal.module.css';

/** Sello de lacre con una inicial. */
export default function WaxSeal({ letter = 'A', size = 56, className = '', style }) {
  return (
    <span
      className={`${styles.seal} ${className}`}
      style={{ '--size': `${size}px`, ...style }}
      aria-hidden="true"
    >
      <span className={styles.letter}>{letter}</span>
    </span>
  );
}
