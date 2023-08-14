import styles from './main.module.css'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';

const MainPage = ():JSX.Element => {
  return (
   <DndProvider backend={HTML5Backend}>
      <main className={`${styles.main}`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider> 
  )
}

export default MainPage