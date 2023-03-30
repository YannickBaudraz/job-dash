import { RefObject, useContext, useEffect } from 'react';
import ClickOutsideSidebarContext from './ClickOutsideSidebarContext';

const useIgnoredByClickOutsideSidebar = (ref: RefObject<HTMLElement>): void => {
  const context = useContext(ClickOutsideSidebarContext);

  if (!context) {
    throw new Error(
      'useIgnoredByClickOutsideSidebar must be used within an OutsideSidebarContext'
    );
  }

  const { register, unregister } = context;

  useEffect(() => {
    register(ref);
    return () => {
      unregister(ref);
    };
  }, [ref, register, unregister]);
};

export default useIgnoredByClickOutsideSidebar;
