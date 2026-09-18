import { education, languages, skillGroups } from '@/data/background';
import { profile } from '@/data/profile';
import { Tape } from '@/components/paper';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './Background.module.css';

export default function Background() {
  const { lang, t } = useLanguage();
  const focus = pick(profile.focusLine, lang)[0].toLowerCase();

  return (
    <section id="background" className={styles.background} aria-labelledby="background-title">
      <div className={`${styles.sheet} grain`}>
        <Tape className={styles.tapeLeft} rotate={-38} width="7rem" />
        <Tape className={styles.tapeRight} rotate={36} width="7rem" />

        <h2 id="background-title" className={styles.tab}>
          {t.background.tab}
        </h2>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.heading}>{t.background.education}</h3>
            <ul role="list" className={styles.entries}>
              {education.map((item) => (
                <li key={item.school}>
                  <p className={styles.strong}>{pick(item.degree, lang)}</p>
                  <p>{item.school}</p>
                  <p className={styles.soft}>{item.place}</p>
                  <p className={styles.period}>{pick(item.period, lang)}</p>
                </li>
              ))}
            </ul>

            <h3 className={`${styles.heading} ${styles.spaced}`}>{t.background.languages}</h3>
            <ul role="list" className={styles.entries}>
              {languages.map((item) => (
                <li key={item.id} className={styles.lang}>
                  <span className={styles.strong}>{pick(item.name, lang)}</span>
                  <span className={styles.period}>{pick(item.level, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.column} ${styles.skills}`}>
            <h3 className={styles.heading}>{t.background.toolkit}</h3>
            <div className={styles.skillGrid}>
              {skillGroups.map((group) => (
                <div key={group.id}>
                  <h4 className={styles.subheading}>{pick(group.title, lang)}</h4>
                  <ul role="list" className={styles.skillList}>
                    {pick(group.items, lang).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={styles.handnote} aria-hidden="true">
              {t.background.handnote(focus)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
