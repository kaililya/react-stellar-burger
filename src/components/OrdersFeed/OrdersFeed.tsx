import styles from './OrdersFeed.module.css'
import OrdersFeedItem from "../OrdersFeedItem/OrdersFeedItem"
import { useAppDispatch, useAppSelector } from '../../utils/types'
import { setClosedWsConnection, setRequestedWsConnection } from '../../services/actions/ws-actions-creators';
import { endPointAllOrders, mainWSUrl } from '../../utils/api/api';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrdersFeed = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  
  useEffect(() => {
    dispatch(setRequestedWsConnection(mainWSUrl + endPointAllOrders));

    return () => {
      dispatch(setClosedWsConnection('закрытие'));
    };
  }, [dispatch]);

  const { orders } = useAppSelector(store => store.wsOrders);

  return (
    <section className={`${styles.orders}`}>
      <h2 className="text text_type_main-large mb-5 ml-4">Лента заказов</h2>
      <ul className={`custom-scroll ${styles.order_container}`}>
        {orders.map((order) => (
        <Link 
            to={`/feed/${order.number}`}
            state={{ background: location }}
            key={order.number}
            className={styles.link}
            >
          <OrdersFeedItem order={order} showStatus={false} />
        </Link>
        ))}
      </ul>
    </section>
  )
}

export default OrdersFeed