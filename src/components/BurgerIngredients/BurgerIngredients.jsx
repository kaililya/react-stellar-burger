import React from 'react'
import styles from './BurgerIngredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import SwitcherProducts from '../SwitcherProducts/SwitcherProducts';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import IngredientMenu from '../IngredientMenu/IngredientMenu';

function BurgerIngredients(props) {
 
  // проверить props на пустоту

  return (
    <section className={`mt-10 mr-10 ${styles.ingredients_main_container}`}>
      <div className={`mb-10`}>
        <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>
        <SwitcherProducts />
      </div>
      <div className={`custom-scroll ${styles.ingredients_type}`}>
        <IngredientMenu setCurrentIngredient={props.setCurrentIngredient} setPopupIngredientClosed={props.setPopupIngredientClosed} ingredients={props.ingredients.data.filter((ing) => ing.type ==="bun")} title={'Булки'} />
        <IngredientMenu setCurrentIngredient={props.setCurrentIngredient} setPopupIngredientClosed={props.setPopupIngredientClosed} ingredients={props.ingredients.data.filter((ing) => ing.type ==="sauce")} title={'Соусы'} />
        <IngredientMenu setCurrentIngredient={props.setCurrentIngredient} setPopupIngredientClosed={props.setPopupIngredientClosed} ingredients={props.ingredients.data.filter((ing) => ing.type ==="main")} title={'Основное'} />
      </div>
     

    </section>
  )
}

export default BurgerIngredients