import { PaperClip, Tape, VideoFrame } from '@/components/paper';
import styles from './ProjectCard.module.css';

/** Tarjeta compacta con vista previa en video, para la cinta deslizante. */
export default function ProjectCard({ project }) {
  const { title, subtitle, date, summary, tags, link, linkLabel, featured, video, download } = project;

  return (
    <article className={styles.card}>
      {featured ? (
        <>
          <PaperClip className={styles.clip} rotate={8} />
          <p className={styles.note} aria-hidden="true">
            latest!
          </p>
        </>
      ) : (
        <Tape className={styles.tape} />
      )}

      <VideoFrame className={styles.media} src={video} label={title} />

      <div className={styles.body}>
        <header className={styles.head}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <p className={styles.date}>
            <time>{date}</time>
          </p>
        </header>

        <p className={styles.summary}>{summary}</p>

        <footer className={styles.foot}>
          <p className={styles.tags}>
            <span className="visually-hidden">Skills used: </span>
            {tags.join(', ')}
          </p>
          {link && download && (
            <a className={styles.link} href={link} download>
              {linkLabel}
              <span className="visually-hidden"> (downloads a file)</span>
            </a>
          )}
          {link && !download && (
            <a className={styles.link} href={link} target="_blank" rel="noreferrer">
              {linkLabel}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}
