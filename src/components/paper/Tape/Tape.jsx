import styles from './Tape.module.css';

/** Tira de cinta adhesiva semitransparente. */
export default function Tape({ className = '', style, rotate = -4, width = '5.5rem' }) {
  return (
    <span
      className={`${styles.tape} ${className}`}
      style={{ '--rotate': `${rotate}deg`, '--w': width, ...style }}
      aria-hidden="true"
    />
  );
}
