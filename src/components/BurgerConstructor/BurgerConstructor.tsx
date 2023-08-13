import { FunctionComponent, useMemo } from 'react'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../TotalPrice/TotalPrice';
import { useDispatch, useSelector } from 'react-redux';
import { burgerConstructorSelector } from '../../services/selectors/burger-constructor-selector';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import { useDrop } from 'react-dnd';
import { addIngredient, setBun } from '../../services/actions/burger-constructor-action-creators';
import { TIngredient,TIngredientAddUniqueId } from '../../utils/types';


const BurgerConstructor = ():JSX.Element => {
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector(burgerConstructorSelector) as {bun:TIngredient; ingredients:Array<TIngredientAddUniqueId>};

  const handleDropItem = (item: TIngredient) => {
    switch (item.type) {
      case "bun": {
        dispatch(setBun(item));
        break;
      }
      default: {
        dispatch(addIngredient(item));
        break;
      }
    }
  }

  const [{ isHover, droppeditem}, refDrop] = useDrop({
    accept: 'ingredient',
    drop: handleDropItem,
    collect: monitor => ({
      isHover: monitor.isOver(),
      droppeditem: monitor.getItem(),
    })
  })

  const isEmpty = useMemo<boolean>(() => !bun && ingredients.length === 0, [bun, ingredients]);
  // const isNoIngredients = useMemo(() => ingredients.length === 0, [ingredients]);
  const containerHoverClass = isHover ?  `${styles.ingredient_main_container} ${styles.ingredient_main_container__hovered}` : `${styles.ingredient_main_container}`
  const totalPrice = useMemo<number>(() => {
    let acc = 0;
    if (bun) {
      acc = bun.price * 2;
    }
    return ingredients.reduce( (sum, ing) => sum + ing.price, acc);


  }, [ingredients, bun]);

  return (
      <section className={`${styles.main_section} mt-25 pb-10`}> 
        <div ref={refDrop} className={containerHoverClass}>
          <div className={`${styles.ingredient} ${styles.bun_top}`}>
          {bun && (<ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />)}
          </div>
         {isEmpty ? (<p>Добавьте любой ингредиент...</p>) : 
         (<ul className={`custom-scroll ${styles.scroll_zone}`}>
            {ingredients.map( (item, index) => (<BurgerConstructorItem item={item} index={index} key={item.unique_id}/>))}
          </ul>)}
          <div className={`${styles.ingredient} ${styles.bun_bottom}`}>
          {bun && (<ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />)}
          </div>
        </div>
          <TotalPrice totalPrice={totalPrice} />
      </section>
  )
}

export default BurgerConstructor