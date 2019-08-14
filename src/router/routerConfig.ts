import React from 'react';
import { RouteProps } from 'react-router';

type enterType = 'from-right' | 'from-bottom';
type exitType = 'to-right' | 'to-bottom';
type routerConfig = (RouteProps & { animConfig?: { enter: enterType; exit: exitType } })[];

const routerConfig: routerConfig = [
  {
    path: '/recommend',
    component: React.lazy(() =>
      import(
        '@/views/recommend'
        /* webpackChunkName: "recommend" */
        /* webpackPrefetch: true */
      )
    )
  },
  {
    path: '/ranking',
    component: React.lazy(() =>
      import(
        '@/views/ranking'
        /* webpackChunkName: "ranking" */
        /* webpackPrefetch: true */
      )
    )
  },
  {
    path: '/singer',
    component: React.lazy(() =>
      import(
        '@/views/singer'
        /* webpackChunkName: "singer" */
        /* webpackPrefetch: true */
      )
    )
  },
  {
    path: '/search',
    component: React.lazy(() =>
      import(
        /* webpackPrefetch: true */
        /* webpackChunkName: "search" */
        '@/views/search'
      )
    )
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
