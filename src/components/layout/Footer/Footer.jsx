import { profile } from '@/data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {profile.fullName}, {new Date().getFullYear()}
      </p>
      <p>Designed and built in {profile.location}</p>
      <a href="#cover" className={styles.top}>
        Back to the cover
      </a>
    </footer>
  );
}
