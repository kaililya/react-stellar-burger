import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import { TIngredient } from '../../utils/types';

type TIngredientDetailPage<T> = {
  readonly ingredients: ReadonlyArray<T>;
};
const IngredientDetailPage = ({ ingredients }:TIngredientDetailPage<TIngredient>):JSX.Element => {
  
  const location = useParams();
  const ingredient = ingredients.find((ing) => ing._id === location.id);

  if (ingredients.length == 0) return null as any;
  return (
      <IngredientDetails selectedIngredient={ingredient}/>
  )
}

export default IngredientDetailPage;