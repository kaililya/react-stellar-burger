import styles from './main.module.css'
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';

const MainPage = ():JSX.Element => {
  return (
   <DndProvider backend={TouchBackend}
   options={{ enableMouseEvents: true }}>
      <main className={`${styles.main}`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider> 
  )
}

export default MainPage