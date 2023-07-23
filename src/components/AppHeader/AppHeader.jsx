import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';


function AppHeader() {

  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__list}>
          <div className={styles.navigation__item}>
            <a className={`text text_type_main-default ${styles.navigation__link}`}><BurgerIcon type="secondary" />Конструктор</a>
            <a className={`text text_type_main-default ${styles.navigation__link}`}><ListIcon type="secondary" />Лента заказов</a>
          </div>
          <div className={styles.navigation__item}>
           <a className={`text text_type_main-default ${styles.navigation__link}`}><Logo /></a>
          </div>
          <div className={styles.navigation__item}>
           <a className={`text text_type_main-default ${styles.navigation__link}`}><ProfileIcon type="secondary" />Личный кабинет</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader