import React, { useEffect, useMemo, FC } from 'react'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './OrdersDetailPage.module.css'
import { tranlateStatus } from '../../utils/utils';
import { TIngredient, TOrderFeed, useAppDispatch, useAppSelector } from '../../utils/types';
import { useParams } from 'react-router';
import { ingredientsSelector } from '../../services/selectors/data-selectors';
import { getCurrenOrderApi } from '../../utils/api/api';
import { setClearCurrentOrder } from '../../services/actions/current_order_action-creators';

// TODO
// 1) Покрасить текст статуса заказа
// 2) Сделать попап красивым

const OrdersDetailPage:FC = () => {
  const dispatch = useAppDispatch()
  const { number } = useParams();
  const allIngredients = useAppSelector(ingredientsSelector);

  useEffect(() => {
    
    dispatch(getCurrenOrderApi(String(number)));

    return () => {
      dispatch(setClearCurrentOrder());
    }
  }, [number, dispatch]);

  const currentOrder = useAppSelector(store => store.currentOrder.orderData);

  const currentOrderStatus = currentOrder?.status;

  const orderIngredients:any = useMemo(() => {
    if (!allIngredients) {
      return [];
    }
    return currentOrder?.ingredients.map(
      (item:any) => allIngredients.find((ingredient:any) => ingredient._id === item)
    );
  }, [allIngredients, currentOrder]);

  const totalPrice = React.useMemo(
    () => {
      if (!orderIngredients) {
        return 0;
      };
      return orderIngredients.reduce(
        (sum:any, ingredient:any) => sum + ingredient.price * (ingredient.type === "bun" ? 2 : 1),
        0
      )},
    [orderIngredients]
  );

  if (!orderIngredients || orderIngredients.length === 0 || !allIngredients) {
    return null
  };

  return (

    <section>
      <div className={styles.order_container}>
        <h3 className={`text text_type_digits-default mb-10 ${styles.order_number}`}>#{currentOrder?.number}</h3>
        <h2 className="text text_type_main-medium mb-3">{currentOrder?.name}</h2>
        <p className="text text_type_main-default mb-15">{tranlateStatus(currentOrderStatus)}</p>
        <p className="text text_type_main-medium mb-6">Состав</p>
        <ul className={`custom-scroll pr-6 ${styles.ingredient_container}`}>
          {orderIngredients?.map((item:any, i:number) => (
          <li className={styles.ingredient} key={i}>
            <div className={styles.image_wrap}>
              <img className={styles.image} src={item.image} alt={item.name} />
            </div>
            <p className={`${styles.ingredient_name} text text_type_main-default ml-4`}>{item.name}</p>
            <div className={styles.price_container}>
              <p className="text text_type_digits-default mr-2">
                {item.type === "bun" ? `2 x ${item.price}` : item.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
        </ul>
        <div className={styles.total_price_container}>
          <p className="text text_type_main-default text_color_inactive">
            {/* <FormattedDate date={new Date(currentOrder.createdAt)} /> */}
          </p>
          <div className={styles.price_and_currency_container}>
            <p className="text text_type_digits-default">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrdersDetailPage