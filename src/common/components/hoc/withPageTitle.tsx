import { ComponentType } from 'react';
import { Helmet } from 'react-helmet-async';
import Constants from '../../constants';

export default function withPageTitle<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  const pageTitle = getTitlePage(WrappedComponent);

  return function WithPageTitle(props: T) {
    return (
      <>
        <Helmet>
          <title>
            {Constants.App.Name} - {pageTitle}
          </title>
        </Helmet>

        <WrappedComponent {...props} />
      </>
    );
  };

  function getTitlePage(Component: ComponentType<T>) {
    const defaultName = 'WithPageTitle WrappedComponent';
    const componentName =
      Component.displayName || Component.name || defaultName;

    const upperCaseRegex = /([A-Z])/g;
    const withSpace = ' $1';

    return componentName.replace(upperCaseRegex, withSpace);
  }
}
