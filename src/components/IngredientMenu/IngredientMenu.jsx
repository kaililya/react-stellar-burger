import React from 'react'
import styles from './IngredientMenu.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';


function IngredientMenu(props) {
  return (
    <>
      <h2 className={`text text_type_main-medium mb-6`}>{props.title}</h2>
      <div className={`pl-4 ${styles.ingredients}`}>

      {props.ingredients.map((ing) => (
        <div className={`mb-8 ${styles.ingredient}`} key={ing["_id"]}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className={`mb-1 ${styles.ingredient__image}`} src={ing.image} 
          onClick={() => {props.setPopupIngredientClosed(true);
                          props.setCurrentIngredient(ing) }}/>
          <div className={`${styles.price_container}`}>
            <p className={`text text_type_digits-default mr-1`}>{ing.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className={`mt-2 text text_type_main-default ${styles.ingredient_name}`}>{ing.name}</h3>
        </div>
      ))}
    </div>


    </>
  )
}

export default IngredientMenu