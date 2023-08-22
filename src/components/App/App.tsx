import styles from "./App.module.css";
import AppHeader from '../AppHeader/AppHeader'
import React from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch, batch } from 'react-redux';
import { getIngredientsThunk } from '../../services/thunks/get-ingredients-thunk'
import { apiStateSelector } from "../../services/selectors/api-state-selector";
import { acceptedOrderSelector } from "../../services/selectors/current-selector";
import { clearAcceptedOrder, clearSelectedIngredient } from "../../services/actions/current-action-creators";
import { resetBurger } from "../../services/actions/burger-constructor-action-creators";
import LoginPage from "../../pages/login/login";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import RegisterPage from "../../pages/register/register";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from "../../pages/main/main";
import NotFoundPage from "../../pages/not-found/not-found";
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRoute/ProtectedRoute";
import { ingredientsSelector } from "../../services/selectors/data-selectors";
import IngredientDetailPage from "../../pages/ingredient-detail/ingredient-detail";
import { checkUserAuth } from "../../utils/api/api";
import FeedPage from "../../pages/feed/feed";
import OrdersDetailPage from "../../pages/OrdersDetailPage/OrdersDetailPage";
import { useAppDispatch, useAppSelector } from "../../utils/types";
// TODO
// 1) Изменить везде
// 1.1) Вызов useSelector на типизированный
// 1.2) Удалить типизацию у 1.1.
// 1.3) Вызов useDispatch на типизированный
// 2) Добавить "i-GMT+3" для заказов
// 
// добавить страницам main тег
// 
const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { indgredientsRequestPending, indgredientsRequestRejected, error } = useAppSelector(apiStateSelector);
  const acceptedOrder = useAppSelector(acceptedOrderSelector);
  const allIngredients = useAppSelector(ingredientsSelector);

  const closeOrderDetailsPopup = React.useCallback(() => {
    batch(() => {
      dispatch(clearAcceptedOrder());
      dispatch(resetBurger());
    })
  },[dispatch]);

  const closeIngredientDetailsPopup = React.useCallback(() => {
    dispatch(clearSelectedIngredient());
  },[dispatch]);

  const closeOrderFullDetailsPopup = React.useCallback(() => {

  },[]);

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
        <Route path="/login" element= {<OnlyUnAuth component={<LoginPage />}/>} />
        <Route path="/forgot-password" element= {<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
        <Route path="/feed" element=  {<FeedPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/ingredient-detail/:id" element={
          <IngredientDetailPage ingredients={allIngredients}/>}> 
        </Route>
        <Route path="/feed/:id" element={
          <OrdersDetailPage/>}> 
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        {background && (
        <Routes> 
          <Route path="/ingredient-detail/:id" element={
           <Modal closeModalHandler={closeIngredientDetailsPopup}>
              <IngredientDetailPage ingredients={allIngredients}/> 
           </Modal>}/>
           <Route path="/feed/:id" element={
           <Modal closeModalHandler={closeOrderFullDetailsPopup}>
              <OrdersDetailPage /> 
           </Modal>}/>
         </Routes>
         )}
      {!!acceptedOrder && (
        <Modal closeModalHandler={closeOrderDetailsPopup}>
          <OrderDetails acceptedOrder={acceptedOrder} /> 
        </Modal>
      )}
    </div>
  );
}


export default App;
