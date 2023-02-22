import Constants from './constants';

export function getPageTitle(title: string) {
  return `${Constants.App.Name} - ${title}`;
}
