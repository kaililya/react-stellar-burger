import React from 'react'
import styles from "./OrderDetails.module.css";
import { CheckMarkIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import illustration from '../../image/done.svg'



function OrderDetails() {
  return (
    <div className={`pt-30 pb-30 ${styles.popup_container}`}>
      <p className={`text text_type_digits-large mb-8 ${styles.number_order}`}>034536</p>
      <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
      <img src={illustration} alt="Иконка подтверждени заказа" />
      <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default mt-2 ${styles.text_waiting}`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails