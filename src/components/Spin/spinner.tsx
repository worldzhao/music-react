import React, { memo } from 'react';
import styles from './spinner.module.scss';

function Spinner() {
  return (
    <div className={styles['spinner']}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default memo(Spinner);
