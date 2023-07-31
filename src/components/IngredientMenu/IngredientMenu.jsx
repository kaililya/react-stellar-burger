import React from 'react'
import styles from './IngredientMenu.module.css';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/selectors/data-selectors';
import { burgerConstructorSelector } from '../../services/selectors/burger-constructor-selector';
import IngredientItem from '../IngredientItem/IngredientItem';
import PropTypes from 'prop-types';




const IngredientMenu = React.forwardRef( ({ title,  typeOfIng }, ref) => {

  const burger = useSelector(burgerConstructorSelector);
  const indredientData = useSelector(ingredientsSelector);
  return (
    <>
      <h2 className={`text text_type_main-medium mb-6`} ref={ref} >{title}</h2>
      <div className={`pl-4 ${styles.ingredients}`} >

      {indredientData.filter(ing => ing.type === typeOfIng).map((ing) => (
        <IngredientItem igredient={ing} key={ing._id} />
      ))}
    </div>
    </>
  )
})

IngredientMenu.propTypes = {
  title: PropTypes.string.isRequired,
  typeOfIng: PropTypes.string.isRequired,
}

export default IngredientMenu