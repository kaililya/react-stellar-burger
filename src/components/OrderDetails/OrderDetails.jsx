import styles from "./OrderDetails.module.css";
import illustration from '../../image/done.svg';
import PropTypes from 'prop-types';




function OrderDetails({ acceptedOrder }) {

  const { number, name } = acceptedOrder;

  return (
    <div className={`pt-30 pb-30 ${styles.popup_container}`}>
      <p className={`text text_type_digits-large mb-8 ${styles.number_order}`}>{ number }</p>
      <p className='text text_type_main-medium mb-15'>{ name }</p>
      <img src={illustration} alt='Иконка подтверждени заказа' />
      <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default mt-2 ${styles.text_waiting}`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

OrderDetails.propTypes = {
  acceptedOrder: PropTypes.object.isRequired
}

export default OrderDetails