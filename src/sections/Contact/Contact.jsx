import { profile } from '@/data/profile';
import { WaxSeal } from '@/components/paper';
import Button from '@/components/ui/Button/Button.jsx';
import styles from './Contact.module.css';

export default function Contact() {
  const { contact } = profile;

  const rows = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedinHref, external: true },
    { label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { label: 'Based in', value: profile.location },
  ];

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`${styles.letter} grain`}>
        <span className={styles.flap} aria-hidden="true" />
        <WaxSeal letter={profile.firstName[0]} size={78} className={styles.seal} />

        <div className={styles.body}>
          <h2 id="contact-title" className={styles.title}>
            Let’s build something
          </h2>
          <p className={styles.lede}>
            If you’re working on a website, a product interface or anything that needs careful
            frontend work, I’d like to hear about it.
          </p>

          <dl className={styles.rows}>
            {rows.map((row) => (
              <div key={row.label} className={styles.row}>
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
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
}
