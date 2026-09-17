import styles from './NameTag.module.css';

/** Etiqueta ovalada colgada de un cordel, como la de la agenda. */
export default function NameTag({ children, className = '', as: Tag = 'p' }) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <svg className={styles.string} viewBox="0 0 70 60" aria-hidden="true" focusable="false">
        <circle cx="16" cy="18" r="10" />
        <path d="M22 25 C 34 34, 44 30, 68 34" />
        <path d="M20 26 C 26 40, 18 50, 8 58" />
      </svg>
      <Tag className={styles.tag}>
        <span className={styles.hole} aria-hidden="true" />
        {children}
      </Tag>
    </div>
  );
}
