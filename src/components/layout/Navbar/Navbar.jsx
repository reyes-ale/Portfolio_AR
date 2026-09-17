import { useState } from 'react';
import { navLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import useScrollSpy from '@/hooks/useScrollSpy';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <a href="#cover" className={styles.brand}>
        <span className={styles.monogram} aria-hidden="true">
          {profile.initials}
        </span>
        <span>{profile.shortName}</span>
      </a>

      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <nav id="site-menu" aria-label="Main" className={`${styles.nav} ${open ? styles.open : ''}`}>
        <ul role="list" className={styles.list}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={styles.link}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
