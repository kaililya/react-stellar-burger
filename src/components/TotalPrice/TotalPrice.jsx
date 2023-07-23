import React from 'react'
import styles from './TotalPrice.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function TotalPrice(props) {
  return (
    <div className={`mt-4 mr-4 ${styles.price_container}`}>
      <div className={`mr-10 ${styles.price_currency_container}`}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" className={`mr-10 ${styles.currency_icon}`}/>
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={() => props.setPopupClosed(true)}>
      Оформить заказ
      </Button>
    </div>
  )
}

export default TotalPrice