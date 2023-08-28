import React from 'react'
import styles from './TotalPrice.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { apiStateSelector } from '../../services/selectors/api-state-selector';
import { burgerConstructorSelector } from '../../services/selectors/burger-constructor-selector';
import { makeOrderThunk } from '../../services/thunks/make-order-thunk';
import { TIngredient, TIngredientAddUniqueId, useAppDispatch, useAppSelector } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

type TTotalPrice = {
  readonly totalPrice: number;
};

const TotalPrice = ({ totalPrice }:TTotalPrice):JSX.Element=> {
  const isUserAuth = useAppSelector(store => store.userData.isUserAuth);
  const { orderRequestPending } = useAppSelector(apiStateSelector);
  const { bun, ingredients } = useAppSelector(burgerConstructorSelector)                        as {bun: TIngredientAddUniqueId;ingredients:Array<TIngredientAddUniqueId>};
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const makeOrder = (e: React.SyntheticEvent): void | undefined => {
    e.preventDefault();
    if (!isUserAuth) {
      navigate('/login');
    } else {
      const bunPlusAllIngredients = ingredients.concat([bun]) 
      const dataIds = bunPlusAllIngredients.map((item: TIngredient) => item._id);
      dispatch(makeOrderThunk(dataIds));
    }
  };

  return (
    <footer className={`mt-4 mr-4 pb-3 ${styles.price_container}`}>
      <div className={`mr-10 ${styles.price_currency_container}`}>
        <p className="text text_type_digits-medium">{ totalPrice }</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" disabled={!bun}
      onClick={makeOrder}
      >
      {orderRequestPending ? 'Оформление заказа...' : 'Оформить заказ'}
      </Button>
    </footer>
  );
}

export default TotalPrice;
