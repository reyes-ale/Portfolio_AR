import { education, languages, skillGroups } from '@/data/background';
import { profile } from '@/data/profile';
import { Tape } from '@/components/paper';
import styles from './Background.module.css';

export default function Background() {
  return (
    <section id="background" className={styles.background} aria-labelledby="background-title">
      <div className={`${styles.sheet} grain`}>
        <Tape className={styles.tapeLeft} rotate={-38} width="7rem" />
        <Tape className={styles.tapeRight} rotate={36} width="7rem" />

        <h2 id="background-title" className={styles.tab}>
          Background
        </h2>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Education</h3>
            <ul role="list" className={styles.entries}>
              {education.map((item) => (
                <li key={item.degree}>
                  <p className={styles.strong}>{item.degree}</p>
                  <p>{item.school}</p>
                  <p className={styles.soft}>{item.place}</p>
                  <p className={styles.period}>{item.period}</p>
                </li>
              ))}
            </ul>

            <h3 className={`${styles.heading} ${styles.spaced}`}>Languages</h3>
            <ul role="list" className={styles.entries}>
              {languages.map((lang) => (
                <li key={lang.name} className={styles.lang}>
                  <span className={styles.strong}>{lang.name}</span>
                  <span className={styles.period}>{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.column} ${styles.skills}`}>
            <h3 className={styles.heading}>Toolkit</h3>
            <div className={styles.skillGrid}>
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className={styles.subheading}>{group.title}</h4>
                  <ul role="list" className={styles.skillList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={styles.handnote} aria-hidden="true">
              most at home in {profile.focusLine[0].toLowerCase()} and UI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
