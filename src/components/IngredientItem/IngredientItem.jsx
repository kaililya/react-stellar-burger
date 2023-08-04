import styles from './IngredientItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { burgerConstructorSelector } from '../../services/selectors/burger-constructor-selector';
import { setSelectedIngredient } from '../../services/actions/current-action-creators';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';


// const addIng = item.type === "bun" ? setBun : addIngredient;

function IngredientItem({ igredient } ) {
  const dispatch = useDispatch();
  const location = useLocation();

  const[{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: igredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const {bun, ingredients} = useSelector(burgerConstructorSelector);

  const count = React.useMemo(() => {
    
    if (igredient.type === 'bun') {
      return (bun && bun._id === igredient._id) ? 1 : 0;
    } else {
      return ingredients.filter( (ing) => ing._id === igredient._id).length;
    }
  },[igredient, bun, ingredients]);

  // const isSomeIngredientInStore = useSelector(store => store.curent.doesExistSelectedIngredient);

  const handleSetIngredient = () => {
    dispatch(setSelectedIngredient(igredient));
  };
 
  return (
    <div className={`mb-8 ${styles.ingredient}`} key={igredient["_id"]} ref={dragRef}>
      {!!count && <Counter count={count} size="default" extraClass="m-1" />}
      <Link 
        to={`/ingredient-detail/${igredient._id}`}
        state={{ background: location }}
        >
        <img className={`mb-1 ${styles.ingredient__image}`} src={igredient.image} alt={igredient.name}
        onClick={handleSetIngredient}/>
      </Link>
      <div className={`${styles.price_container}`}>
        <p className={`text text_type_digits-default mr-1`}>{igredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <button className={styles.button_wrapper} 
      >
        <h3 className={`mt-2 text text_type_main-default ${styles.ingredient_name}`}>{igredient.name}</h3>
      </button>
  </div>
  )
}

IngredientItem.propTypes = {
  igredient: PropTypes.object.isRequired
}

export default IngredientItem