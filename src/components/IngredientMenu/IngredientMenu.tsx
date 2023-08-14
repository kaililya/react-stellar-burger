import React from 'react'
import styles from './IngredientMenu.module.css';
import { useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/selectors/data-selectors';
import IngredientItem from '../IngredientItem/IngredientItem';
import { TIngredient } from '../../utils/types';

type TPropsType = {
  readonly title: string;
  readonly typeOfIng: string;
};

const IngredientMenu = React.forwardRef<HTMLHeadingElement,TPropsType>( ({ title,  typeOfIng }, ref) => {

  const indredientData = useSelector(ingredientsSelector) as ReadonlyArray<TIngredient>;
  return (
    <>
      <h2 className={`text text_type_main-medium mb-6`} ref={ref} >{title}</h2>
      <div className={`pl-4 ${styles.ingredients}`} >

      {indredientData.filter((ing:TIngredient) => ing.type === typeOfIng).map((ing:TIngredient) => (
        <IngredientItem igredient={ing} key={ing._id} />
      ))}
    </div>
    </>
  )
})


export default IngredientMenu;