import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { strings } from './strings.js';

const STORAGE_KEY = 'portfolio-language';
const LanguageContext = createContext(null);

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : null;
  } catch {
    return null;
  }
}

function readQueryLanguage() {
  const value = new URLSearchParams(window.location.search).get('lang');
  return value === 'es' || value === 'en' ? value : null;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => readQueryLanguage() ?? readStoredLanguage() ?? 'en');

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage puede fallar (modo privado, etc.); no es crítico.
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: strings[lang],
      setLanguage: setLang,
      toggleLanguage: () => setLang((current) => (current === 'en' ? 'es' : 'en')),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
