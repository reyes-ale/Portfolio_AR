import styles from './PaperClip.module.css';

/** Clip metálico en SVG. Posiciónalo con `className` o `style`. */
export default function PaperClip({ className = '', style, rotate = 0 }) {
  return (
    <svg
      className={`${styles.clip} ${className}`}
      style={{ '--rotate': `${rotate}deg`, ...style }}
      viewBox="0 0 40 110"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M27 30 V86 a9 9 0 0 1 -18 0 V18 a13 13 0 0 1 26 0 V80 a4.5 4.5 0 0 1 -9 0 V30"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
