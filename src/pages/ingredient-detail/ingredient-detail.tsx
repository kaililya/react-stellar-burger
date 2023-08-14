import { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import { TIngredient } from '../../utils/types';

type TIngredientDetailPage<T> = {
  readonly ingredients: ReadonlyArray<T>;
};
const IngredientDetailPage = ({ ingredients }:TIngredientDetailPage<TIngredient>):JSX.Element => {
  const { id } = useParams();
  const ingredient = ingredients.find((ing) => ing._id === id);

  if (ingredients.length == 0) return (<p>нету ингредиентов для страницы</p>)
  return (
      <IngredientDetails selectedIngredient={ingredient}/>
  )
}

export default IngredientDetailPage;