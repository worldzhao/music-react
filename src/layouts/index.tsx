import React, { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
import BasicLayout from './basicLayout';

type Props = RouteComponentProps & { children: ReactNode };

const Layout = (props: Props) => {
  const { children } = props;
  // 可以根据 pathname 自定义选择layout组件
  // console.log(props.location.pathname);

  return <BasicLayout>{children}</BasicLayout>;
};

export default Layout;
