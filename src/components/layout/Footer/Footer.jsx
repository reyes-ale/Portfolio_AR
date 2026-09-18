import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang, t } = useLanguage();
  const location = pick(profile.location, lang);

  return (
    <footer className={styles.footer}>
      <p>
        {profile.fullName}, {new Date().getFullYear()}
      </p>
      <p>{t.footer.designedIn(location)}</p>
      <a href="#cover" className={styles.top}>
        {t.footer.backToCover}
      </a>
    </footer>
  );
}
