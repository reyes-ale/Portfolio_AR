import styles from './Button.module.css';

/**
 * Botón/enlace.
 * variant: 'solid' | 'outline' | 'solidLight' | 'outlineLight'
 * Si recibe `href` se renderiza como <a>.
 */
export default function Button({ href, variant = 'solid', className = '', children, ...rest }) {
  const cls = `${styles.button} ${styles[variant] ?? ''} ${className}`;
  const isExternal = href?.startsWith('http');

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
