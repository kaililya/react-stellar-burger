import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { TIconTypes } from '../../utils/types';

const AppHeader = ():JSX.Element => {
  const switchClassName= ({isActive}:{isActive:boolean}): string => (isActive ? `text text_type_main-medium ${styles.link_active}` : `text text_type_main-medium ${styles.link}`);
  const { pathname } = useLocation();

  const setIconType:Array<TIconTypes> = useMemo(() => {

    switch (pathname) {
      case '/':
        return ["primary","secondary","secondary"];
      case '/feed':
        return ["secondary","primary","secondary"];
      case '/profile':
        return ["secondary","secondary","primary"];
      case '/profile/orders':
        return ["secondary","secondary","primary"];
      default:
        return ["secondary","secondary","secondary"]
    }
  },[pathname]);
  const [isBurger, setIsBurger] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setIsBurger(prev => !prev);
   };
   const handleRoute = () => {
    if (isBurger) {
      setIsBurger(false)
     } else {
 
    }
   };
  return (
    <header
      className={isBurger ? `${styles.header_burger}`:`${styles.header}`}>
      <div className={styles.header_wrapper}>
        <button 
          className={isBurger ? `${styles.burger_icon} ${styles.burger_icon_active}` : `${styles.burger_icon}` }
          onClick={handleOpenMenu}
        >
          <span className={styles.burger_span}></span>
        </button>
        <div className={styles.fff}>
         <NavLink to='/'><Logo /></NavLink>
        </div>
        <nav 
          className={isBurger ? `${styles.nav_container} ${styles.nav_container_burger}` : `${styles.nav_container}`}
        >
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <NavLink
                className={switchClassName}
                onClick={handleRoute}
                to={'/'}>
                  <BurgerIcon type={setIconType[0]} /><span className={`text text_type_main-default `}>Конструктор</span>
                </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink 
                className={switchClassName}
                onClick={handleRoute} 
                to={'/feed'}>
                  <ListIcon type={setIconType[1]} /><span className={`text text_type_main-default`}>Лента заказов</span>
                </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                 className={switchClassName}
                 onClick={handleRoute} 
                 to={'/profile'}
              >
                <ProfileIcon type={setIconType[2]} /><span className={`text text_type_main-default `}>Личный кабинет</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>  
    </header>

    // <header className={`pb-4 pt-4 ${styles.header}`}>
    //   <nav className={styles.navigation}>
    //     <div className={styles.navigation__list}>
    //       <div className={`${styles.navigation__item}`}>
    //         <NavLink className={switchClassName} to='/'><BurgerIcon type={setIconType[0]} /><span className={`text text_type_main-default `}>Конструктор</span></NavLink>
    //         <NavLink className={switchClassName} to='/feed'><ListIcon type={setIconType[1]} /><span className={`text text_type_main-default `}>Лента заказов</span></NavLink>
    //       </div>
    //       <div className={styles.navigation__item}>
    //        <NavLink to='/'><Logo /></NavLink>
    //       </div>
    //       <div className={styles.navigation__item}>
    //        <NavLink className={switchClassName} to='/profile'><ProfileIcon type={setIconType[2]} /><span className={`text text_type_main-default `}>Личный кабинет</span></NavLink>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  )
}

export default AppHeader