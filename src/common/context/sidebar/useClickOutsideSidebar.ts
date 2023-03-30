import { RefObject, useContext, useEffect } from 'react';
import ClickOutsideSidebarContext from './ClickOutsideSidebarContext';

function useClickOutsideSidebar(
  ref: RefObject<HTMLElement>,
  handler: () => void
): void {
  const context = useContext(ClickOutsideSidebarContext);

  if (!context) {
    throw new Error(
      'useClickOutsideSidebar must be used within an OutsideSidebarContext'
    );
  }

  const { register, unregister, elements } = context;

  const isClickInside = (target: EventTarget | null): boolean => {
    const isTarget = ref.current?.contains(target as Node);
    const isIgnored = elements.some(ignoredRef =>
      ignoredRef.current?.contains(target as Node)
    );

    return isTarget || isIgnored;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!isClickInside(event.target)) handler();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, register, unregister, handler]);
}

export default useClickOutsideSidebar;
