import { useEffect, useState } from 'react';

export enum MediaRule {
  Min = 'min-width',
  Max = 'max-width',
}

export enum MediaSize {
  Sm = 540,
  Md = 720,
  Lg = 960,
  Xl = 1140,
  Xl2 = 1320,
}

export default function useMediaQuery(
  rule: MediaRule,
  size: MediaSize
): boolean {
  const query = `(${rule}: ${size}px)`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}
