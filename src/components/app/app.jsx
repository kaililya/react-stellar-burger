import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderPopup from "../OrderPopup/OrderPopup";
import IngredientPopup from "../IngredientPopup/IngredientPopup";
import Modal from "../Modal/Modal";

// прошу прощения у того, кто это будет проверять
// не писал код 1.5 месяца, часть вещей забыл, часть вещей реализовал плохо, но уже почти 3 недели сижу над проектом
// спасибо за терпение

function App() {

  const [ingredients, setIngredients] = React.useState([]);
//  popuprderdetail
  const [popupClosed, setPopupClosed] = React.useState(false);
  const [popupIngredientClose, setPopupIngredientClosed] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState(undefined);
// 

  function getIngredients() {
    const url = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setIngredients(data);
    })
    .catch(err => {console.log(err)})
  }

  React.useEffect(() => {
    getIngredients();
  },[]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main}`}>
        <BurgerIngredients setPopupIngredientClosed={setPopupIngredientClosed} ingredients={ingredients} setCurrentIngredient={setCurrentIngredient} />
        <BurgerConstructor setPopupClosed={setPopupClosed} />
      </main>
      <Modal popupClosed={popupClosed} setPopupClosed={setPopupClosed}>
        <OrderPopup /> 
      </Modal>

      <Modal popupClosed={popupIngredientClose} setPopupClosed={setPopupIngredientClosed}>
        <IngredientPopup currentIngredient={currentIngredient} /> 
      </Modal>
      
    </div>
  );
}

export default App;
