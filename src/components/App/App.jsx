import styles from "./App.module.css";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { getIngredientsThunk } from '../../services/thunks/get-ingredients-thunk'
import { apiStateSelector } from "../../services/selectors/api-state-selector";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { acceptedOrderSelector, selectedIngredientSelector } from "../../services/selectors/current-selector";
import { clearAcceptedOrder, clearSelectedIngredient } from "../../services/actions/current-action-creators";

function App() {
  const dispatch = useDispatch();

  const { indgredientsRequestPending, indgredientsRequestRejected, error } = useSelector(apiStateSelector);
  const selectedIngredient = useSelector(selectedIngredientSelector);  
  const acceptedOrder = useSelector(acceptedOrderSelector);

  const closeOrderDetailsPopup = React.useCallback(() => {
    dispatch(clearAcceptedOrder()) 
  });

  const closeIngredientDetailsPopup = React.useCallback(() => {
    dispatch(clearSelectedIngredient()); 
  });


  React.useEffect(() => {
    dispatch(getIngredientsThunk())
  }, [dispatch])

  if (indgredientsRequestPending) {
    return (
      <p>Ингредиенты загружаются...</p>
    )
  }

  if (indgredientsRequestRejected) {
    return (
      <p>Произошла ошибка: {error}</p>
    )
  }
  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={`${styles.main}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
      {!!acceptedOrder && (
        <Modal closeModalHandler={closeOrderDetailsPopup}>
          <OrderDetails acceptedOrder={acceptedOrder} closeModalHandler={closeOrderDetailsPopup}/> 
        </Modal>
      )}
      {!!selectedIngredient && (
      <Modal closeModalHandler={closeIngredientDetailsPopup}>
        <IngredientDetails selectedIngredient={selectedIngredient} closeModalHandler={closeIngredientDetailsPopup}/> 
      </Modal>
      )}
    </div>
  );
}



export default App;
