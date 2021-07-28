import { lazy } from 'react';
import { PAGE_PATHS } from 'constants/index';
import { IRoutes } from './types';
const HomePage = lazy(() => import('pages/Home'));
const ListTokensPage = lazy(() => import('pages/ListTokens'));

export const routes: IRoutes[] = [
  {
    key: 'home',
    icon: null,
    path: PAGE_PATHS.HOME,
    exact: true,
    component: HomePage,
  },
  {
    key: 'list-tokens',
    icon: null,
    path: PAGE_PATHS.LIST_TOKENS,
    exact: true,
    component: ListTokensPage,
  },
];
