import { linkConfig } from '@/router/routerConfig';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>Soul Beats</h1>
      <div className={styles['tab']}>
        {linkConfig.map(l => {
          const { text, ...restProps } = l;
          return (
            <NavLink
              className={styles['nav']}
              activeClassName={styles['nav__active']}
              key={l.to}
              {...restProps}
            >
              {l.text}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}

export default memo(Header);
