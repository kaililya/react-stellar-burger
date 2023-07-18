import styles from "./App.module.css";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';

const urlIngredient = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [ingredients, setIngredients] = React.useState([]);
//  popuprderdetail
  const [popupClosed, setPopupClosed] = React.useState(false);
  const [popupIngredientClose, setPopupIngredientClosed] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState(undefined); 

  function getIngredients() {
    const url = urlIngredient;
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

  if(ingredients.length < 1) return null;

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main}`}>
        <BurgerIngredients setPopupIngredientClosed={setPopupIngredientClosed} ingredients={ingredients} setCurrentIngredient={setCurrentIngredient} />
        <BurgerConstructor setPopupClosed={setPopupClosed} />
      </main>
      <Modal popupClosed={popupClosed} setPopupClosed={setPopupClosed}>
        <OrderDetails /> 
      </Modal>

      <Modal popupClosed={popupIngredientClose} setPopupClosed={setPopupIngredientClosed}>
        <IngredientDetails currentIngredient={currentIngredient} /> 
      </Modal>
      
    </div>
  );
}

App.propTypes  = {
  popupClosed: PropTypes.bool,
  popupIngredientClose: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  currentIngredient: PropTypes.object
}

export default App;
