import { profile } from '@/data/profile';
import { NameTag, PaperClip, Polaroid, WaxSeal } from '@/components/paper';
import BinderRings from './BinderRings.jsx';
import ContactCard from './ContactCard.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  const { photos } = profile;

  return (
    <section id="cover" className={styles.hero} aria-labelledby="cover-title">
      <h1 id="cover-title" className="visually-hidden">
        {profile.fullName}, {profile.role} {profile.roleSuffix} portfolio
      </h1>

      <div className={styles.binder}>
        <span className={`${styles.strap} ${styles.strapTop}`} aria-hidden="true" />
        <span className={`${styles.strap} ${styles.strapBottom}`} aria-hidden="true" />

        {/* ---------- Página izquierda ---------- */}
        <div className={`${styles.page} ${styles.pageLeft} grain`}>
          <ol className={styles.margin} aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>

          <div className={`${styles.slot} ${styles.tagSlot}`} style={{ '--delay': '120ms' }}>
            <NameTag>{profile.shortName}</NameTag>
          </div>

          <div className={`${styles.slot} ${styles.photoLeftSlot}`} style={{ '--delay': '260ms' }}>
            <Polaroid
              src={photos.heroLeft}
              alt={`Portrait of ${profile.firstName}`}
              variant="torn"
              rotate={-2.5}
            />
          </div>

          <div className={`${styles.slot} ${styles.contactSlot}`} style={{ '--delay': '520ms' }}>
            <ContactCard contact={profile.contact}>
              <WaxSeal letter={profile.firstName[0]} size={46} className={styles.cardSeal} />
            </ContactCard>
          </div>
        </div>

        <BinderRings className={styles.rings} />

        {/* ---------- Página derecha ---------- */}
        <div className={`${styles.page} ${styles.pageRight} grain`}>
          <div className={`${styles.slot} ${styles.stampSlot}`} style={{ '--delay': '200ms' }}>
            <p className={styles.stamp}>
              <span className={styles.stampMain}>Systems Engineering</span>
              <span className={styles.stampSub}>student at {profile.school}</span>
            </p>
          </div>

          <div className={`${styles.slot} ${styles.photoRightSlot}`} style={{ '--delay': '380ms' }}>
            <div className={styles.stack}>
              <Polaroid
                src={photos.heroRight}
                alt={`${profile.firstName} at work`}
                variant="print"
                rotate={3}
              />
              <PaperClip className={styles.clip} rotate={-12} />
            </div>
          </div>

          <div className={`${styles.slot} ${styles.labelSlot}`} style={{ '--delay': '600ms' }}>
            <p className={styles.role}>
              <span className={styles.roleBox}>{profile.role}</span> {profile.roleSuffix}
            </p>
            <ul role="list" className={styles.disciplines}>
              {profile.disciplines.map((item, index) => (
                <li key={item}>
                  {index > 0 && <span aria-hidden="true">/ </span>}
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.place}>{profile.locationShort}</p>
          </div>
        </div>

        {/* ---------- Título que cruza ambas páginas ---------- */}
        <p className={styles.title} aria-hidden="true">
          <span className={styles.port}>Port</span>
          <span className={styles.folio}>
            folio<sup className={styles.year}>’{profile.year}</sup>
          </span>
        </p>
      </div>

      <p className={styles.focus}>{profile.focusLine.join('  |  ')}</p>
    </section>
  );
}
