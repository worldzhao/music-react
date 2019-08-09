import React, { SFC } from 'react';
import BasicLayout from './basicLayout';

const Layout: SFC = props => {
  const { children } = props;
  // 可以根据 pathname 自定义选择layout组件
  // console.log(window.location.pathname);

  return <BasicLayout>{children}</BasicLayout>;
};

export default Layout;
