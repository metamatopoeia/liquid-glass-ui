import { useState, useEffect, useCallback } from 'react';

type Mode = 'light' | 'dark';
type ModeInput = Mode | 'system';

function getSystemMode(): Mode {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useColorScheme(initialMode: ModeInput = 'system') {
  const [preference, setPreference] = useState<ModeInput>(initialMode);
  const [systemMode, setSystemMode] = useState<Mode>(getSystemMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setSystemMode(e.matches ? 'dark' : 'light');
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const resolvedMode: Mode = preference === 'system' ? systemMode : preference;

  const setMode = useCallback((next: ModeInput) => {
    setPreference(next);
  }, []);

  return { mode: resolvedMode, setMode, systemMode };
}
