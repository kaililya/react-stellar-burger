import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';




function AppHeader() {
  const style1= clsx('text', 'text_type_main-default',styles.navigation__link); 
  const style2= `${styles.link_active}`;
  return (
    <header className={`text text_type_main-default pb-4 pt-4 ${styles.header}`}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__list}>
          <div className={`text text_type_main-default ${styles.navigation__item}`}>
            <NavLink className={({ isActive, isPending  }) => (isPending ? style1 : isActive ? style1 : '')} to='/'><BurgerIcon type="secondary" />Конструктор</NavLink>
            <NavLink to='*'><ListIcon type="secondary" />Лента заказов</NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink to='/'><Logo /></NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink to='/profile'><ProfileIcon type="secondary" />Личный кабинет</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader