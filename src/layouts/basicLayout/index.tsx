import React, { FC } from 'react';
import { Header, Player as Footer } from '@/components';
import styles from './index.module.scss';

const BasicLayout: FC = props => {
  const { children } = props;
  return (
    <div className={styles['basic-layout']}>
      <Header />
      <div className={styles['basic-layout-content']}>{children}</div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
