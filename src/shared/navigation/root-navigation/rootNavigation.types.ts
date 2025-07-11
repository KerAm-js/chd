export enum RootNavigation {
  TABS = 'TABS',
  FILTER = 'FILTER',
}

export type RootNavigationList = {
  [RootNavigation.TABS]: undefined;
  [RootNavigation.FILTER]: undefined;
};
