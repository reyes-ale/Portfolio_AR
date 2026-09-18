import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext.jsx';
import { pick } from '@/i18n/pick.js';
import styles from './FolderTabs.module.css';

/**
 * Pestañas de carpeta accesibles (flechas izquierda/derecha, Home y End).
 */
export default function FolderTabs({ filters, counts, activeId, onChange, panelId }) {
  const refs = useRef([]);
  const { lang, t } = useLanguage();

  const handleKeyDown = (event, index) => {
    const last = filters.length - 1;
    const keys = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    onChange(filters[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div role="tablist" aria-label={t.projects.filterLabel} className={styles.tabs}>
      {filters.map((filter, index) => {
        const selected = filter.id === activeId;
        return (
          <button
            key={filter.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            id={`tab-${filter.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={styles.tab}
            onClick={() => onChange(filter.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {pick(filter.label, lang)}
            <span className={styles.count}>{counts[filter.id] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}
