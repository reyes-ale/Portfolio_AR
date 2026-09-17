import { useMemo } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';
import ProjectCard from './ProjectCard.jsx';
import styles from './ProjectReel.module.css';

/**
 * Cinta de proyectos que se desliza sola y en loop; se pausa al pasar
 * el mouse o el teclado por encima. Con pocas tarjetas, o si el usuario
 * prefiere menos movimiento, se muestra como una fila fija centrada.
 */
export default function ProjectReel({ projects }) {
  const reducedMotion = useReducedMotion();
  const canLoop = projects.length > 2 && !reducedMotion;
  const track = useMemo(() => (canLoop ? [...projects, ...projects] : projects), [projects, canLoop]);

  return (
    <div className={`${styles.reel} ${canLoop ? styles.looping : styles.still}`}>
      <div className={styles.track} style={{ '--count': projects.length }}>
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
