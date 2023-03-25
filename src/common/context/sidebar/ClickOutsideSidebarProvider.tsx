import { ReactNode, RefObject, useCallback, useMemo, useState } from 'react';
import ClickOutsideSidebarContext from './ClickOutsideSidebarContext';

interface OutsideSidebarProviderProps {
  children: ReactNode;
}

function ClickOutsideSidebarProvider({
  children,
}: OutsideSidebarProviderProps) {
  const [ignoredRefs, setIgnoredRefs] = useState<Array<RefObject<HTMLElement>>>(
    []
  );

  const register = useCallback((ref: RefObject<HTMLElement>) => {
    setIgnoredRefs(prevRefs => [...prevRefs, ref]);
  }, []);

  const unregister = useCallback((ref: RefObject<HTMLElement>) => {
    setIgnoredRefs(prevRefs => prevRefs.filter(r => r !== ref));
  }, []);

  const value = useMemo(
    () => ({ register, unregister, elements: ignoredRefs }),
    [register, unregister, ignoredRefs]
  );

  return (
    <ClickOutsideSidebarContext.Provider value={value}>
      {children}
    </ClickOutsideSidebarContext.Provider>
  );
}

export default ClickOutsideSidebarProvider;
