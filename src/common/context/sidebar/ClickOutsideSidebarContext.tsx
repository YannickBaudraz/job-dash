import { createContext, RefObject } from 'react';

interface ClickOutsideSidebarContextValue {
  register: (ref: RefObject<HTMLElement>) => void;
  unregister: (ref: RefObject<HTMLElement>) => void;
  elements: RefObject<HTMLElement>[];
}

const ClickOutsideSidebarContext =
  createContext<ClickOutsideSidebarContextValue | null>(null);

export default ClickOutsideSidebarContext;
