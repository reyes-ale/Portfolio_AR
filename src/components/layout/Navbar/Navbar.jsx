import { useState } from 'react';
import { navLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import useScrollSpy from '@/hooks/useScrollSpy';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <header className={styles.bar}>
      <a href="#cover" className={styles.brand}>
        <span className={styles.monogram} aria-hidden="true">
          {profile.initials}
        </span>
        <span>{profile.shortName}</span>
      </a>

      <div className={styles.right}>
        <button
          type="button"
          className={styles.langToggle}
          onClick={toggleLanguage}
          aria-label={t.languageToggle.label}
        >
          {t.languageToggle.short}
        </button>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>

        <nav
          id="site-menu"
          aria-label={t.nav.main}
          className={`${styles.nav} ${open ? styles.open : ''}`}
        >
          <ul role="list" className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.link}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {pick(link.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
