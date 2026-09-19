import { useEffect, useMemo, useRef } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import ProjectCard from './ProjectCard.jsx';
import styles from './ProjectReel.module.css';

const SPEED_PX_PER_SEC = 36;
// Respaldo por si el navegador no soporta el evento nativo "scrollend":
// después de este tiempo sin detectar scroll manual, se retoma solo.
const FALLBACK_IDLE_MS = 500;

/**
 * Cinta de proyectos que se desliza sola y en loop, pero también se puede
 * mover a mano: con el mouse (clic y arrastra), el trackpad, el dedo en
 * touch, o las flechas de los lados. Se pausa al pasar el mouse, arrastrar,
 * enfocar un elemento adentro, o mientras el usuario hace scroll manual
 * (incluida la inercia del trackpad/touch, usando "scrollend" para saber
 * cuándo terminó de verdad). Con pocas tarjetas, o si el usuario prefiere
 * menos movimiento, se muestra como una fila fija centrada.
 */
export default function ProjectReel({ projects }) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const canLoop = projects.length > 2 && !reducedMotion;
  const track = useMemo(() => (canLoop ? [...projects, ...projects] : projects), [projects, canLoop]);

  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(null);
  const userScrollingRef = useRef(false);
  const lastScrollEventRef = useRef(0);
  const expectedScrollRef = useRef(0);

  useEffect(() => {
    if (!canLoop) return undefined;
    const el = trackRef.current;
    if (!el) return undefined;

    const handleScroll = () => {
      if (Math.abs(el.scrollLeft - expectedScrollRef.current) > 1) {
        userScrollingRef.current = true;
        lastScrollEventRef.current = performance.now();
      }
    };
    const handleScrollEnd = () => {
      userScrollingRef.current = false;
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    el.addEventListener('scrollend', handleScrollEnd, { passive: true });

    let frame;
    let last = performance.now();

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      const fallbackIdle = now - lastScrollEventRef.current > FALLBACK_IDLE_MS;
      const idle = !userScrollingRef.current || fallbackIdle;
      if (!pausedRef.current && !draggingRef.current && idle) {
        userScrollingRef.current = false;
        const half = el.scrollWidth / 2;
        el.scrollLeft += SPEED_PX_PER_SEC * dt;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      expectedScrollRef.current = el.scrollLeft;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [canLoop, track.length]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== 'mouse') return;
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = { startX: event.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = event.clientX - draggingRef.current.startX;
    el.scrollLeft = draggingRef.current.startScroll - dx;
  };

  const endDrag = () => {
    draggingRef.current = null;
  };

  const scrollByStep = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div
      className={`${styles.reel} ${canLoop ? styles.looping : styles.still}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {canLoop && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={() => scrollByStep(-1)}
            aria-label={t.projects.prev}
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => scrollByStep(1)}
            aria-label={t.projects.next}
          >
            ›
          </button>
        </>
      )}

      <div
        className={styles.track}
        ref={trackRef}
        style={{ '--count': projects.length }}
        onPointerDown={canLoop ? handlePointerDown : undefined}
        onPointerMove={canLoop ? handlePointerMove : undefined}
        onPointerUp={canLoop ? endDrag : undefined}
        onPointerLeave={canLoop ? endDrag : undefined}
      >
        {track.map((project, index) => (
          <div
            className={styles.slide}
            style={{ '--tilt': index % 2 === 0 ? '-0.6deg' : '0.5deg' }}
            key={`${project.id}-${index}`}
            aria-hidden={canLoop && index >= projects.length ? 'true' : undefined}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
