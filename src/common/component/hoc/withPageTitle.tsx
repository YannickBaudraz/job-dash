import { ComponentType } from 'react';
import { Helmet } from 'react-helmet-async';
import { Document } from '../../../store/document/documentSlice';
import { useAppDispatch } from '../../../store/hooks';
import Constants from '../../constants';

export default function withPageTitle<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  const pageTitle = getPageTitle(WrappedComponent);
  return function WithPageTitle(props: T) {
    const dispatch = useAppDispatch();

    return (
      <>
        <Helmet
          onChangeClientState={newState => {
            dispatch(Document.Actions.setTitle(newState.title));
          }}
        >
          <title>
            {Constants.App.Name} - {pageTitle}
          </title>
        </Helmet>

        <WrappedComponent {...props} />
      </>
    );
  };

  function getPageTitle(Component: ComponentType<T>) {
    const defaultName = 'WithPageTitle WrappedComponent';
    const componentName =
      Component.displayName || Component.name || defaultName;

    const upperCaseRegex = /([A-Z])/g;
    const withSpace = ' $1';

    return componentName.replace(upperCaseRegex, withSpace);
  }
}
