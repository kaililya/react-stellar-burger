import styles from './profile.module.css'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProfileOrders from '../../components/ProfileOrders/ProfileOrders';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../../services/thunks/user-api-thunk';
import OrdersDetailPage from '../OrdersDetailPage/OrdersDetailPage';
import Modal from '../../components/Modal/Modal';

// TODO 
// 1) пофиксить выбор класса для NavLink
// 2) сделать еще 1 Route для показа попа заказа (/profile/orders/:id)

const ProfilePage = ():JSX.Element => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logoutUserThunk(refreshToken));
  };

  return (
    <section className={`${styles.profile_container}`}>
      <nav className={`${styles.navigation_section}`}>
        <ul className={`${styles.link_container}`}>
          <li className={``}>
            <NavLink
              className={({ isActive }) => isActive ? `${styles.link_active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}
              to='/profile'
            >
              Профиль              
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? `${styles.link_active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}
              to='/profile/orders'
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? `${styles.link_active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}
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