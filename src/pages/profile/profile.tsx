import styles from './profile.module.css'
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { logoutUserThunk } from '../../services/thunks/user-api-thunk';
import { useAppDispatch } from '../../utils/types';
import { NavLink } from 'react-router-dom';

// 1) пофиксить выбор класса для NavLink
// p.s. тут только откатывать после обучения на 5 версию, ибо end не работает из-за бага
// но если кто-то провереят мою работу и знает как это решить, то я был бы очень благодарен

const ProfilePage = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const handleLogoutUser = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logoutUserThunk(refreshToken));
  };

  const switchClassName = ({isActive}:{isActive:boolean}): string => (isActive ? `${styles.link_active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`);

  return (
    <section className={`${styles.profile_container}`}>
      <nav className={`${styles.navigation_section}`}>
        <ul className={`${styles.link_container}`}>
          <li className={``}>
            <NavLink
              to="/profile"
              className={switchClassName}
              
            >
              Профиль              
            </NavLink>
          </li>
          <li>
            <NavLink
              className={switchClassName}
              to="/profile/orders"
              
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              className={switchClassName}
              to="/login"
              onClick={handleLogoutUser}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={`${styles.navigation_description} text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <ProfileForm/>
    </section>
  )
}

export default ProfilePage