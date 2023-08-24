// TODO ЛЕНТА ЗАКАЗОВ
// 1) Сделать так, чтобы в верстке каждый 6 заказ переносился на след. столбец и при этом был скроо бар
// 2) Использовать useMemo для списков заказов с разным статусом
import { useMemo } from 'react';
import { TOrderFeed, useAppSelector } from '../../utils/types';
import styles from './OrdersInfo.module.css'

const OrdersInfo = ():JSX.Element => {
  const { orders, totalOrders, totalOrdersToday } = useAppSelector(store => store.wsOrders);

  const ordersReady: TOrderFeed[] = orders
    .filter((order: TOrderFeed) => order.status === 'done')
    .slice(0, 20);
  const ordersInProgress: TOrderFeed[] = orders
    .filter((order: TOrderFeed) => order.status === 'pending')
    .slice(0, 20);

  return (
    <section className={styles.main_container}>
      <div className={styles.orders_state_container}>
        <div className={styles.orders_state_column}>
          <h4 className='text text_type_main-medium'>Готовы:</h4>
          <ul className={`custom-scroll ${styles.orders_state_numbers_column}`}>
            {ordersReady.map((order) => (
              <li key={order.number} className={`text text_type_digits-default ${styles.orders_state_number} ${styles.orders_state_number__success}`}>{order.number}</li>
            ))}
          </ul>
        </div>
        <div className={styles.orders_state_column}>
          <h4 className='text text_type_main-medium'>В работе:</h4>
          <ul className={`custom-scroll ${styles.orders_state_numbers_column}`}>
            {ordersInProgress.map((order) => (
            <li key={order.number} className={`text text_type_digits-default ${styles.orders_state_number}`}>{order.number}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className='text text_type_main-medium'>Выполнено за все время:</span>
      <p className={`text text_type_digits-large mb-10 ${styles.number_order}`}>{totalOrders}</p>
      <span className='text text_type_main-medium'>Выполнено за сегодня</span>
      <p className={`text text_type_digits-large ${styles.number_order}`}>{totalOrdersToday}</p>
    </section>
  )
}

export default OrdersInfo