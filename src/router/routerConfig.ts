import React from 'react';
import { RouteProps } from 'react-router';

type enterType = 'from-right' | 'from-bottom';
type exitType = 'to-right' | 'to-bottom';
type routerConfig = (RouteProps & { animConfig?: { enter: enterType; exit: exitType } })[];

const routerConfig: routerConfig = [
  {
    path: '/recommend',
    component: React.lazy(() => import(/* webpackChunkName: "recommend" */ '@/views/recommend'))
  },
  {
    path: '/ranking',
    component: React.lazy(() => import(/* webpackChunkName: "ranking" */ '@/views/ranking'))
  },
  {
    path: '/singer',
    component: React.lazy(() => import(/* webpackChunkName: "singer" */ '@/views/singer'))
  },
  {
    path: '/search',
    component: React.lazy(() => import(/* webpackChunkName: "search" */ '@/views/search'))
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
