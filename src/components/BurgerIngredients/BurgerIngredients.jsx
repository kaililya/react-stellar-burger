import React from 'react'
import styles from './BurgerIngredients.module.css';
import IngredientMenu from '../IngredientMenu/IngredientMenu';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { deleteIngredient } from '../../services/actions/burger-constructor-action-creators';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerIngredients() {

  const dispatch = useDispatch();
   
  const [{ droppedItem, isHover }, dropRef] = useDrop({
    accept: 'constructor',
    collect: monitor => ({
      droppedItem: monitor.getItem(),
      isHover: monitor.isOver(),
    }),
    drop: () => { dispatch(deleteIngredient(droppedItem)) },
  });

  const baseRef = React.useRef(null);
  const bunsRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainsRef = React.useRef(null);


  const [watchBunsRef, isBunsVisible, testEntry] = useInView({
    root: baseRef.current,
    threshold: 0.15,

  });

  const { ref: watchSaucesRef, inView: isSaucesVisible } = useInView({
    root: baseRef.current,
    threshold: 0.2,

  });
// после запятой я игнорю параметр, который я должен был достать по документации
  const [watchMainsRef, isMainsVisible, ] = useInView({
    root: baseRef.current,
    threshold: 0.5,
  });

  const handleBunsClick = React.useCallback(() => {
    bunsRef.current.scrollIntoView({behavior: 'smooth'});
  }, []);

  const handleSaucesClick = React.useCallback(() => {

    saucesRef.current.scrollIntoView({behavior: 'smooth'});
  }, []);

  const handleMainsClick = React.useCallback(() => {
    console.dir(mainsRef);
    mainsRef.current.scrollIntoView({behavior: 'smooth'});
  }, []);

  const containerHoverClass = isHover ?  `${styles.ingredients_type} ${styles.ingredients_type__hovered}` : `${styles.ingredients_type}`

  return (
    <section className={`mt-10 mr-10 ${styles.ingredients_main_container}`} ref={dropRef} >
      <div className={`mb-10`}>
        <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          <Tab value="Булки" active={isBunsVisible} onClick={handleBunsClick}>
            Булки
          </Tab>
          <Tab value="Соусы" active={isSaucesVisible && !isBunsVisible} onClick={handleSaucesClick}>
           Соусы
          </Tab>
          <Tab value="Начинки" active={isMainsVisible} onClick={handleMainsClick}>
           Основное
          </Tab>
       </div>
      </div>
      <div className={`custom-scroll ${containerHoverClass}`} ref={baseRef} >
        <div ref={watchBunsRef}>
          <IngredientMenu ref={bunsRef} typeOfIng={'bun'} title={'Булки'} />
        </div>  
        <div ref={watchSaucesRef}>
          <IngredientMenu ref={saucesRef} typeOfIng={'sauce'} title={'Соусы'} />
        </div>      
        <div ref={watchMainsRef}>
          <IngredientMenu ref={mainsRef} typeOfIng={'main'} title={'Основное'} />
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients