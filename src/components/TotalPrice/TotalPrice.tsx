import React from 'react'
import styles from './TotalPrice.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { apiStateSelector } from '../../services/selectors/api-state-selector';
import { burgerConstructorSelector } from '../../services/selectors/burger-constructor-selector';
import { makeOrderThunk } from '../../services/thunks/make-order-thunk';
import { TIngredient } from '../../utils/types';

type TTotalPrice = {
  readonly totalPrice: number;
};

const TotalPrice = ({ totalPrice }:TTotalPrice):JSX.Element=> {
  const {orderRequestPending} = useSelector(apiStateSelector) as {orderRequestPending:boolean};
  const { bun, ingredients } = useSelector(burgerConstructorSelector);
  const dispatch = useDispatch();

  const makeOrder = (e: React.SyntheticEvent): void | undefined => {
    e.preventDefault();
    const bunPlusAllIngredients = ingredients.concat([bun])
    const dataIds = bunPlusAllIngredients.map((item: TIngredient) => item._id);
    dispatch(makeOrderThunk(dataIds));
  };

  return (
    <footer className={`mt-4 mr-4 pb-3 ${styles.price_container}`}>
      <div className={`mr-10 ${styles.price_currency_container}`}>
        <p className="text text_type_digits-medium">{ totalPrice }</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" disabled={!bun}
      onClick={makeOrder}
              > {orderRequestPending ? 'Оформление заказа...' : 'Оформить заказ'}
      </Button>
    </footer>
  )
}

// TotalPrice.propTypes = {
//   totalPrice: PropTypes.number.isRequired
// }; 
export default React.memo(TotalPrice);
