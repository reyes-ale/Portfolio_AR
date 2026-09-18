import { PaperClip, Tape, VideoFrame } from '@/components/paper';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './ProjectCard.module.css';

/** Tarjeta compacta con vista previa en video, para la cinta deslizante. */
export default function ProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const { title, subtitle, date, summary, tags, link, linkLabel, featured, video, photo, download } =
    project;

  return (
    <article className={styles.card}>
      {featured ? (
        <>
          <PaperClip className={styles.clip} rotate={8} />
          <p className={styles.note} aria-hidden="true">
            {t.projects.latest}
          </p>
        </>
      ) : (
        <Tape className={styles.tape} />
      )}

      <VideoFrame className={styles.media} src={video} photo={photo} label={pick(title, lang)} />

      <div className={styles.body}>
        <header className={styles.head}>
          <div>
            <h3 className={styles.title}>{pick(title, lang)}</h3>
            <p className={styles.subtitle}>{pick(subtitle, lang)}</p>
          </div>
          <p className={styles.date}>
            <time>{date}</time>
          </p>
        </header>

        <p className={styles.summary}>{pick(summary, lang)}</p>

        <footer className={styles.foot}>
          <p className={styles.tags}>
            <span className="visually-hidden">{t.projects.skillsUsed}</span>
            {tags.join(', ')}
          </p>
          {link && download && (
            <a className={styles.link} href={link} download>
              {pick(linkLabel, lang)}
              <span className="visually-hidden">{t.projects.downloadsFile}</span>
            </a>
          )}
          {link && !download && (
            <a className={styles.link} href={link} target="_blank" rel="noreferrer">
              {pick(linkLabel, lang)}
              <span className="visually-hidden">{t.projects.opensNewTab}</span>
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}
