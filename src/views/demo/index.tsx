import React from 'react';
import styles from './index.module.scss';

interface DemoProps {
  title: string;
}

function Demo(props: DemoProps) {
  return (
    <div className={styles.demo}>
      <h2 className={styles.subtitle}>welcome to {props.title}</h2>
    </div>
  );
}

export default Demo;
