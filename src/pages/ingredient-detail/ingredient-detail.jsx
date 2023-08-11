import React from 'react';
import styles from './ingredient-detail.module.css';
import { useNavigate, useParams } from 'react-router';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import Modal from '../../components/Modal/Modal';

function IngredientDetailPage({ ingredients }) {
  const { id } = useParams();
  const ingredient = ingredients.find((ing) => ing._id === id);

  if (ingredients.length == 0) return (<p>нету ингредиентов для страницы</p>)
  return (
      <IngredientDetails selectedIngredient={ingredient}/>
  )
}

export default IngredientDetailPage