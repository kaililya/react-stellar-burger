import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

function App() {

  const [ingredients, setIngredients] = React.useState([]);


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
      <BurgerIngredients ingredients={ingredients} />
    </div>
  );
}

export default App;
