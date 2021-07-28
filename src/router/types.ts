import { FC } from 'react';

export interface IRoutes {
  key: string;
  icon: any;
  path: string;
  exact: boolean;
  component: FC;
}
