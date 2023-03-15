import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import useIgnoredByClickOutsideSidebar from '../../common/context/sidebar/useIgnoredByClickOutsideSidebar';
import { useAppDispatch } from '../../store/hooks';
import { Sidebar } from '../../store/sidebar/sidebarSlice';

export default function ToggleSidebarButton() {
  const ref = useRef<HTMLDivElement>(null);
  useIgnoredByClickOutsideSidebar(ref);

  const dispatch = useAppDispatch();
  const toggle = () => dispatch(Sidebar.Actions.toggle());

  return (
    <div ref={ref}>
      <Bars3CenterLeftIcon
        id="sidebar-toggle"
        className="h-10 w-10 cursor-pointer text-deep-purple-500 hover:text-deep-purple-800"
        onClick={toggle}
      />
    </div>
  );
}
