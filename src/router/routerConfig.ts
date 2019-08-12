import { RouteProps } from 'react-router';
import Recommend from '@/views/recommend';
import Ranking from '@/views/ranking';
import Singer from '@/views/singer';
import Search from '@/views/search';

type enterType = 'from-right' | 'from-bottom';
type exitType = 'to-right' | 'to-bottom';
type routerConfig = (RouteProps & { animConfig?: { enter: enterType; exit: exitType } })[];

const routerConfig: routerConfig = [
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/ranking',
    component: Ranking
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/search',
    component: Search
  }
];

export default routerConfig;

export const linkConfig = [
  {
    to: '/recommend',
    text: '推荐'
  },
  {
    to: '/ranking',
    text: '排行榜'
  },
  {
    to: '/singer',
    text: '歌手'
  },
  {
    to: '/search',
    text: '搜索'
  }
];
