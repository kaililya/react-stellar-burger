import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { TIconTypes } from '../../utils/types';

const AppHeader = ():JSX.Element => {
  const switchClassName= ({isActive}:{isActive:boolean}): string => (isActive ? `${styles.link_active}` : `${styles.link}`);
  const { pathname } = useLocation();

  const setIconType:Array<TIconTypes> = useMemo(() => {
    switch (pathname) {
      case '/':
        return ["primary","secondary","secondary"];
      case '/feed':
        return ["secondary","primary","secondary"];
        case '/profile':
          return ["secondary","secondary","primary"];
      default:
        return ["secondary","secondary","secondary"]
    }
  },[pathname]);

  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__list}>
          <div className={`${styles.navigation__item}`}>
            <NavLink className={switchClassName} to='/'><BurgerIcon type={setIconType[0]} /><span className={`text text_type_main-default `}>Конструктор</span></NavLink>
            <NavLink className={switchClassName} to='/feed'><ListIcon type={setIconType[1]} /><span className={`text text_type_main-default `}>Лента заказов</span></NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink to='/'><Logo /></NavLink>
          </div>
          <div className={styles.navigation__item}>
           <NavLink className={switchClassName} to='/profile'><ProfileIcon type={setIconType[2]} /><span className={`text text_type_main-default `}>Личный кабинет</span></NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader