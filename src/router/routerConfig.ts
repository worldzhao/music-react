import { RouteProps } from 'react-router';
import Demo1 from '@/views/demo1';
import Demo2 from '@/views/demo2';
import Home from '@/views/home';

type enterType = 'from-right' | 'from-bottom';
type exitType = 'to-right' | 'to-bottom';
type routerConfig = (RouteProps & { animConfig: { enter: enterType; exit: exitType } })[];

const routerConfig: routerConfig = [
  {
    exact: true,
    path: '/',
    component: Home,
    animConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/demo1',
    component: Demo1,
    animConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/demo2',
    component: Demo2,
    animConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
];

export default routerConfig;
