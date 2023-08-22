import { useEffect } from "react";
import { TOrderFeed, useAppDispatch, useAppSelector } from "../../utils/types"
import { setClosedWsConnection, setRequestedWsConnection } from "../../services/actions/ws-actions-creators";
import OrdersFeedItem from "../OrdersFeedItem/OrdersFeedItem";
import styles from '../OrdersFeed/OrdersFeed.module.css' 

const ProfileOrders = ():JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRequestedWsConnection(`wss://norma.nomoreparties.space/orders?token=${localStorage.getItem('accessToken')?.replace('Bearer','').substring(1)}`));

    return () => {
      dispatch(setClosedWsConnection('вавыавыавыаывавы'));
    };
  }, [dispatch]);

  const { orders } = useAppSelector(store => store.wsOrders);

  console.log(orders)

  return (
    <ul className={`custom-scroll ${styles.order_container}`}>
        {orders.map((order:TOrderFeed) => (<OrdersFeedItem order={order} key={order._id} showStatus={true} />))}
    </ul>
  )
}

export default ProfileOrders