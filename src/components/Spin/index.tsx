import React, { FC } from 'react';
import { Spin } from 'dora-ui';
import Spinner from './spinner';
import './index.module.scss';

const BetterSpin: FC<any> = props => {
  const { children, ...restProps } = props;
  return (
    <Spin spinner={<Spinner />} {...restProps}>
      {children}
    </Spin>
  );
};

export default BetterSpin;
