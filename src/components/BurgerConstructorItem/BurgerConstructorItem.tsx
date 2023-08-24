import React, { FunctionComponent } from 'react'
import styles from './BurgerConstructorItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteIngredient, moveIngredient } from '../../services/actions/burger-constructor-action-creators';
import { useDrag, useDrop } from 'react-dnd';
import {  TIngredientAddUniqueId, useAppDispatch } from '../../utils/types';


type BurgerConstructorItem<T> = {
  item: T;
  index: number;
};

const BurgerConstructorItem = ({ item, index }:BurgerConstructorItem<TIngredientAddUniqueId>):JSX.Element => {
  const dispatch = useAppDispatch();
  
  const handleDeleteItem = React.useCallback(() => {
    dispatch(deleteIngredient(item));
  },[dispatch, item]);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'constructor',
    item: item,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [{ isHover, droppeditem }, movedRef] = useDrop({
    accept: 'constructor',
    collect: monitor => ({
      isHover: monitor.isOver(),
      droppeditem: monitor.getItem(),
    }),
    drop: () => {
      dispatch(moveIngredient({ ing: droppeditem, pos: index }))
    }
  });

  return (
    <li className={`pr-4 ${styles.ingredient}`} ref={movedRef} >
      <div className={styles.ingredient_drop} ref={dragRef}  >
       <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={handleDeleteItem}
        />
      </div>
    </li>
  )
}

export default BurgerConstructorItem

