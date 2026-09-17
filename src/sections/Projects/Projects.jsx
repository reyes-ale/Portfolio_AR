import { useMemo, useState } from 'react';
import { projectFilters, projects } from '@/data/projects';
import FolderTabs from './FolderTabs.jsx';
import ProjectReel from './ProjectReel.jsx';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const counts = useMemo(() => {
    const result = { all: projects.length };
    projects.forEach((p) => {
      result[p.category] = (result[p.category] ?? 0) + 1;
    });
    return result;
  }, []);

  const visible = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.folder}>
        <FolderTabs
          filters={projectFilters}
          counts={counts}
          activeId={activeFilter}
          onChange={setActiveFilter}
          panelId="projects-panel"
        />

        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeFilter}`}
          className={`${styles.panel} grain`}
        >
          <header className={styles.header}>
            <h2 id="projects-title" className={styles.title}>
              Projects and experience
            </h2>
            <p className={styles.lede}>
              Websites I’ve built and shipped, a hackathon build, and the workshops where I teach
              kids to code.
            </p>
          </header>

          <ProjectReel projects={visible} />
        </div>
      </div>
    </section>
  );
}
