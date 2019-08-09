import { RouteProps } from 'react-router';
import Demo1 from '@/views/demo1';
import Demo2 from '@/views/demo2';

export const routerConfig: RouteProps[] = [
  {
    exact: true,
    path: '/demo1',
    component: Demo1
  },
  {
    exact: true,
    path: '/demo2',
    component: Demo2
  }
];
