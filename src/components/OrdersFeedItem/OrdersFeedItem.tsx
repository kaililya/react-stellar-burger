import styles from './OrdersFeedItem.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient, TOrderFeed, useAppSelector } from '../../utils/types';
import { ingredientsSelector } from '../../services/selectors/data-selectors';
import { useMemo } from 'react';
import { tranlateStatus } from '../../utils/utils';

// TODO
// 1) Завершить вестку более 6 ингредиентов 
// 2) Добавить цвет в зависимости от статуса заказа

type TOrdersFeedItem<T> = {
  readonly order: T;
  readonly showStatus: boolean
};

const OrdersFeedItem = ({order, showStatus}:TOrdersFeedItem<TOrderFeed>):JSX.Element => {

  const allIngredients = useAppSelector(ingredientsSelector);

  const { name, number, createdAt, ingredients, status } = order;

  const orderIngredients = useMemo(() => {
    if (!allIngredients) {
      return [];
    }
    return ingredients.map(
      (item) => allIngredients.filter((ingredient:TIngredient) => ingredient._id === item)[0]
    );
  }, [ingredients, allIngredients]);

  const totalPrice = useMemo(
    () =>
      orderIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price * (ingredient.type === "bun" ? 2 : 1),
        0
      ),
    [orderIngredients]
  );

  let previewIngredients = [];
  let restIngredients: number | null = null;
  if (orderIngredients.length > 5) {
    previewIngredients = orderIngredients.slice(0, 6);
    restIngredients = orderIngredients.length - 5;
  } else {
    previewIngredients = orderIngredients.slice();
  }

  return (
      <li className={`${styles.order_item}`}>
        <div className={`${styles.order_stat_container}`}>
          <p className={`text text_type_digits-default`}>#{number}</p>
          <p className={`text text_type_main-default text_color_inactive`}>
            <FormattedDate date={new Date(createdAt)} />
          </p>
        </div>
        <h3 className={`text text_type_main-medium`}>{name}</h3>
        {status && showStatus && (<p className='text text_type_main-default'>{tranlateStatus(status)}</p>)}
        
        <div className={`${styles.order_lower_container}`}>
          <div className={`${styles.order_image_container}`}>
            {previewIngredients.map((ing, index) => (
              <div className={styles.order_image_wrapper} key={index + number + ing._id}>
                <img src={ing.image} className={styles.order_ingredient_image}/>
                {index === 5 && (
                <div className={`${styles.ssss} text text_type_main-default`}>
                  {`+${restIngredients}`}
                  </div>
                  )}
              </div>
            ))}
          </div>
          <div className={`${styles.order_price_container}`}>
           <p className={`text text_type_digits-default`}>{totalPrice}</p>
           <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
  )
}

export default OrdersFeedItem