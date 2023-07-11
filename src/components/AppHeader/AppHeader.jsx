import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

// Пример {`pt-8 pb-8 mr-7 ${styles.navigation__item}`}

function AppHeader() {

  

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className=''>
            <a className='text text_type_main-default pl-5 pr-5 pb-4 pt-4 mr-2'><BurgerIcon type="secondary" />Конструктор</a>
          </li>
          <li className=''>
           <a className='text text_type_main-default pl-5 pr-5 pb-4 pt-4 mr-2'><ListIcon type="secondary" />Лента заказов</a>
          </li>
          <li className=''>
           <a className='text text_type_main-default pl-5 pr-5 pb-4 pt-4 mr-2'><Logo /></a>
          </li>
          <li className=''>
           <a className='text text_type_main-default pl-5 pr-5 pb-4 pt-4 mr-2'><ProfileIcon type="secondary" />Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader