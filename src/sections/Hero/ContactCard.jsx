import { useLanguage } from '@/i18n/LanguageContext.jsx';
import styles from './ContactCard.module.css';

/** Tarjetita de contacto pegada en la página izquierda. */
export default function ContactCard({ contact, children }) {
  const { t } = useLanguage();

  return (
    <div className={`${styles.card} grain`}>
      {children}
      <p className={styles.heading}>{t.contactCard.heading}</p>
      <ul role="list" className={styles.list}>
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <a href={contact.linkedinHref} target="_blank" rel="noreferrer">
            {contact.linkedin}
          </a>
        </li>
        <li>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </li>
      </ul>
    </div>
  );
}
