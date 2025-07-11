export enum RootNavigation {
  TABS = 'TABS',
  FILTER = 'FILTER',
  LOGIN = 'LOGIN',
  REGISTR = 'REGISTR',
}

export type RootNavigationList = {
  [RootNavigation.TABS]: undefined;
  [RootNavigation.FILTER]: undefined;
  [RootNavigation.LOGIN]: undefined;
  [RootNavigation.REGISTR]: undefined;
};
