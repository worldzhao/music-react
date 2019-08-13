import React, { PureComponent } from 'react';
import styles from './index.module.scss';

class Player extends PureComponent {
  render() {
    return <div className={styles['player']}>player</div>;
  }
}

export default Player;
