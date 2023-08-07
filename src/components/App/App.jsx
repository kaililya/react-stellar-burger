import styles from "./App.module.css";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch, batch } from 'react-redux';
import { getIngredientsThunk } from '../../services/thunks/get-ingredients-thunk'
import { apiStateSelector } from "../../services/selectors/api-state-selector";
import { acceptedOrderSelector, selectedIngredientSelector } from "../../services/selectors/current-selector";
import { clearAcceptedOrder, clearSelectedIngredient } from "../../services/actions/current-action-creators";
import { resetBurger } from "../../services/actions/burger-constructor-action-creators";
import LoginPage from "../../pages/login/login";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import RegisterPage from "../../pages/register/register";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import MainPage from "../../pages/main/main";
import NotFoundPage from "../../pages/not-found/not-found";
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRoute/ProtectedRoute";
import { ingredientsSelector } from "../../services/selectors/data-selectors";
import IngredientDetailPage from "../../pages/ingredient-detail/ingredient-detail";
import { checkUserAuth } from "../../services/thunks/user-api-thunk";

// TODO
// 1) Проверить работоспособность танка по обновление токена


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { indgredientsRequestPending, indgredientsRequestRejected, error } = useSelector(apiStateSelector);
  // const selectedIngredient = useSelector(selectedIngredientSelector);  
  const acceptedOrder = useSelector(acceptedOrderSelector);
  const allIngredients = useSelector(ingredientsSelector);

  const closeOrderDetailsPopup = React.useCallback(() => {
    batch(() => {
      dispatch(clearAcceptedOrder());
      dispatch(resetBurger());
    })
  });

  const closeIngredientDetailsPopup = React.useCallback(() => {
    dispatch(clearSelectedIngredient());
  });

  React.useEffect(() => {
    dispatch(getIngredientsThunk());
    if (localStorage.getItem("accessToken")) {
      dispatch(checkUserAuth())
    };
  }, [dispatch]);

  if (indgredientsRequestPending) {
    return (
      <p>Ингредиенты загружаются...</p>
    )
  };

  if (indgredientsRequestRejected) {
    return (
      <p>Произошла ошибка: {error}</p>
    )
  };

  return (
    <div className={styles.app}>
      {/* ForgotPasswordPage */}
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/register" element= {<OnlyUnAuth component={<RegisterPage />}/>}/>
        <Route path="/reset-password" element= {<OnlyUnAuth component={<ResetPasswordPage />}/>} />
        <Route path="/profile/*" element= {<OnlyAuth component={<ProfilePage />}/>} />
        {/* <Route path="/profile/*" element= {<ProfilePage />} /> */}
        <Route path="/login" element= {<OnlyUnAuth component={<LoginPage />}/>} />
        <Route path="/forgot-password" element= {<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/ingredient-detail/:id" element={
          <IngredientDetailPage ingredients={allIngredients}/>}> 
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        {background && (
        <Routes> 
        <Route path="/ingredient-detail/:id" element={
         <Modal closeModalHandler={closeIngredientDetailsPopup}>
            <IngredientDetailPage ingredients={allIngredients}/> 
         </Modal>}/>
         </Routes>
         )}
      {!!acceptedOrder && (
        <Modal closeModalHandler={closeOrderDetailsPopup}>
          <OrderDetails acceptedOrder={acceptedOrder} closeModalHandler={closeOrderDetailsPopup}/> 
        </Modal>
      )}
    </div>
  );
}


export default App;
