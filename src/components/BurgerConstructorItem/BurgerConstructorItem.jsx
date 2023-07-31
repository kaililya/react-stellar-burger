import React from 'react'
import styles from './BurgerConstructorItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { deleteIngredient, moveIngredient } from '../../services/actions/burger-constructor-action-creators';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';



function BurgerConstructorItem( {item, index} ) {

  const dispatch = useDispatch();

  const [dropItem, setDropItem] = React.useState(null);


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
      dispatch(moveIngredient({ ing: droppeditem, pos:index }))
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

BurgerConstructorItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BurgerConstructorItem

