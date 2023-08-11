import React, { useCallback } from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';




function AppHeader() {
  const switchClassName = ({isActive}) => (isActive ? `${styles.link_active}` : `${styles.link}`);
  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__list}>
          <div className={`${styles.navigation__item}`}>
            <NavLink className={switchClassName} to='/'><BurgerIcon type="secondary" /><span className={`text text_type_main-default `}>Конструктор</span></NavLink>
            <NavLink className={switchClassName} to='/feed'><ListIcon type="secondary" /><span className={`text text_type_main-default `}>Лента заказов</span></NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink  to='/'><Logo /></NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink className={switchClassName} to='/profile'><ProfileIcon type="secondary" /><span className={`text text_type_main-default `}>Личный кабинет</span></NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader