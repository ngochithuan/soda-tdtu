import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// 'system' follows the OS setting, 'light' and 'dark' override it
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    // Storage unavailable, fall back to the system theme
  }
  return 'system';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    try {
      if (theme === 'system') {
        delete root.dataset.theme;
        localStorage.removeItem(STORAGE_KEY);
      } else {
        root.dataset.theme = theme;
        localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch (e) {
      // Storage can be unavailable (private mode, blocked site data), the theme still applies for this visit
    }
  }, [theme]);

  return [theme, setTheme];
}
