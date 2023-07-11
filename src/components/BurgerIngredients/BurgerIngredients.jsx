import React from 'react'
import styles from './BurgerIngredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import SwitcherProducts from '../SwitcherProducts/SwitcherProducts';


function BurgerIngredients(props) {

  return (
    <section className={`mt-10 mr-10 ${styles.ingredients_main_container}`}>
      <div className={`mb-10`}>
        <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>
        <SwitcherProducts />
      </div>

      <div>
        <h2 className={`text text_type_main-medium mb-6`}>Булки</h2>
        <div>
          <div>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={props.ingredients.data[0].image}/>
            <div className={``}>
              <p className={`text text_type_digits-default`}>{props.ingredients.data[0].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <h3 className={`text text_type_main-medium`}>{props.ingredients.data[0].name}</h3>
          </div>
        </div>
      </div>


    </section>
  )
}

export default BurgerIngredients