import { profile } from '@/data/profile';
import { WaxSeal } from '@/components/paper';
import Button from '@/components/ui/Button/Button.jsx';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './Contact.module.css';

export default function Contact() {
  const { contact } = profile;
  const { lang, t } = useLanguage();
  const location = pick(profile.location, lang);

  const rows = [
    { id: 'email', label: t.contact.email, value: contact.email, href: `mailto:${contact.email}` },
    {
      id: 'linkedin',
      label: t.contact.linkedin,
      value: contact.linkedin,
      href: contact.linkedinHref,
      external: true,
    },
    { id: 'phone', label: t.contact.phone, value: contact.phone, href: contact.phoneHref },
    { id: 'location', label: t.contact.basedIn, value: location },
  ];

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`${styles.letter} grain`}>
        <span className={styles.flap} aria-hidden="true" />
        <WaxSeal letter={profile.firstName[0]} size={78} className={styles.seal} />

        <div className={styles.body}>
          <h2 id="contact-title" className={styles.title}>
            {t.contact.title}
          </h2>
          <p className={styles.lede}>{t.contact.lede}</p>

          <dl className={styles.rows}>
            {rows.map((row) => (
              <div key={row.id} className={styles.row}>
                <dt>{row.label}</dt>
                <dd>
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <Button href={`mailto:${contact.email}`} className={styles.cta}>
            {t.contact.sendEmail}
          </Button>
        </div>
      </div>
    </section>
  );
}
