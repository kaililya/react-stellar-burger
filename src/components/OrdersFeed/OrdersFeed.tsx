// TODO сводка по заказам
import styles from './OrdersFeed.module.css'
import OrdersFeedItem from "../OrdersFeedItem/OrdersFeedItem"
import { useAppDispatch, useAppSelector } from '../../utils/types'
import { setClosedWsConnection, setRequestedWsConnection } from '../../services/actions/ws-actions-creators';
import { endPointAllOrders, mainWSUrl } from '../../utils/api/api';
import { useEffect } from 'react';
import { TOrderFeed } from '../../utils/types';
import { Link, useLocation } from 'react-router-dom';

const OrdersFeed = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  
  useEffect(() => {
    dispatch(setRequestedWsConnection(mainWSUrl + endPointAllOrders));

    return () => {
      // dispatch(setClosedWsConnection('закрытие'));
    };
  }, [dispatch]);

  const { orders } = useAppSelector(store => store.wsOrders);

  return (
    <section className={`${styles.orders}`}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <ul className={`custom-scroll ${styles.order_container}`}>
        {orders.map((order:TOrderFeed, index) => (
        <Link 
            to={`/feed/${order._id}`}
            state={{ background: location }}>
          <OrdersFeedItem order={order} key={order._id + String(index)} showStatus={false} />
        </Link>
        ))}
      </ul>
    </section>
  )
}

export default OrdersFeed