import { profile } from '@/data/profile';
import { Polaroid, Tape } from '@/components/paper';
import Button from '@/components/ui/Button/Button.jsx';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.about} grain grain-light`} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.portrait}>
          <Tape className={styles.tapeTop} rotate={-6} width="6.5rem" />
          <Polaroid
            src={profile.photos.about}
            alt={`Portrait of ${profile.fullName}`}
            variant="print"
            rotate={-2}
            className={styles.print}
          >
            <span className={styles.overTop} aria-hidden="true">
              {profile.role}
            </span>
            <span className={styles.overBottom} aria-hidden="true">
              {profile.roleSuffix}
            </span>
          </Polaroid>
        </div>

        <div className={styles.text}>
          <p className={styles.hello}>hi, I’m</p>
          <h2 id="about-title" className={styles.name}>
            <span className={styles.circled}>
              {profile.firstName}
              <svg className={styles.loop} viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">
                <path d="M40 18 C 110 -4, 262 2, 288 36 C 306 66, 214 86, 132 84 C 50 82, 4 64, 10 42 C 16 22, 70 10, 128 8" />
              </svg>
            </span>{' '}
            {profile.fullName.replace(`${profile.firstName} `, '')}
          </h2>

          <div className={styles.intro}>
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <p className={styles.meta}>
            {profile.studentLine} at {profile.school}, based in {profile.location}.
          </p>

          <div className={styles.actions}>
            <Button href="#projects" variant="solidLight">
              See my projects
            </Button>
            <Button href={`mailto:${profile.contact.email}`} variant="outlineLight">
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
