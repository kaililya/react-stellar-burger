import { useEffect } from "react";
import { TOrderFeed, useAppDispatch, useAppSelector } from "../../utils/types"
import { setClosedWsConnection, setRequestedWsConnection } from "../../services/actions/ws-actions-creators";
import OrdersFeedItem from "../OrdersFeedItem/OrdersFeedItem";
import styles from '../OrdersFeed/OrdersFeed.module.css';
import stylesProfile from '../../pages/profile/profile.module.css' 
import { Link, useLocation } from "react-router-dom";
import { logoutUserThunk } from "../../services/thunks/user-api-thunk";
import { NavLink,RouteMatch } from "react-router-dom";

const ProfileOrders = ():JSX.Element => {

  const handleLogoutUser = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logoutUserThunk(refreshToken));
  };
  const dispatch = useAppDispatch();
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    dispatch(setRequestedWsConnection(`wss://norma.nomoreparties.space/orders?token=${localStorage.getItem('accessToken')?.replace('Bearer','').substring(1)}`));

    return () => {
      dispatch(setClosedWsConnection('вавыавыавыаывавы'));
    };
  }, [dispatch]);

  const { orders } = useAppSelector(store => store.wsOrders);

  return (
    <section className={`${stylesProfile.profile_container}`}>
      <nav className={`${stylesProfile.navigation_section}`}>
        <ul className={`${stylesProfile.link_container}`}>
          <li className={``}>
            <NavLink
              className={({ isActive }) => isActive ? `${stylesProfile.link_active} text text_type_main-medium` : `${stylesProfile.link} text text_type_main-medium`}
              to='/profile'
            >
              Профиль              
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? `${stylesProfile.link_active} text text_type_main-medium` : `${stylesProfile.link} text text_type_main-medium`}
              to='/profile/orders'
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? `${stylesProfile.link_active} text text_type_main-medium` : `${stylesProfile.link} text text_type_main-medium`}
              to="/login"
              onClick={handleLogoutUser}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={`${stylesProfile.navigation_description} text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <ul className={`custom-scroll ${styles.order_container}`}>
        {orders.map((order:TOrderFeed) => (
        <Link
          to={`${location.pathname}/${order._id}`}
          state={{ background: location }}
        >
           <OrdersFeedItem order={order} key={order._id} showStatus={true} />
        </Link>
        ))}
    </ul>
    </section>

  )
}

export default ProfileOrders