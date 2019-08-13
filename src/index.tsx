import '@/common/scripts/rem';
import '@/common/styles/index.scss';
import Routes from '@/router';
import { env } from '@/utils';
import React from 'react';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

if (!env.isProd) {
  // 动态import vconsole，避免打包到同一个vendor，影响打包体积
  // 虽然打包了 但prod环境永远不会加载这部分js
  (async () => {
    const { default: VConsole } = await import(/* webpackChunkName: "vconsole" */ 'vconsole');
    new VConsole();
  })();
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
