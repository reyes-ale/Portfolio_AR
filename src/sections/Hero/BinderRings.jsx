import styles from './BinderRings.module.css';

/** Columna de argollas metálicas en el lomo de la agenda. */
export default function BinderRings({ count = 6, className = '' }) {
  return (
    <div className={`${styles.spine} ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={styles.ring} />
      ))}
    </div>
  );
}
