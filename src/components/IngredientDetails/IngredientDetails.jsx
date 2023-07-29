import styles from "./IngredientDetails.module.css";
import PropTypes from 'prop-types';



function IngredientDetails({ selectedIngredient }) {
  
  // const ingredientDetails = useSelector(ingredientDetailsSelector);
  // console.dir(ingredientDetails.ingredient)
  // const item = ingredientDetails.ingredient;

  // if (item == undefined) return null;
  
  return (
  <div className='pt-15'>
    <h3 className="ml-10 text text_type_main-large">Детали ингредиента</h3>
    <div className={styles.popup_main}>
      <img className={`mb-4 ${styles.popup}`} src={selectedIngredient.image_large} alt={selectedIngredient.name} />
      <h4 className={`mb-8 text text_type_main-medium`}>{selectedIngredient.name}</h4>
      <ul className={`mb-15 ${styles.popup_details_container}`}>
        <li className={`mr-5 ${styles.popup_list_selectedIngredient}`}>
          <h5 className={`text text_type_main-default ${styles.text_grey}`}>Калории,ккал</h5>
          <p className={`text text_type_digits-default ${styles.text_grey}`}>{selectedIngredient.calories}</p>
        </li>
        <li className={`mr-5 ${styles.popup_list_selectedIngredient}`}>
          <h5 className={`text text_type_main-default ${styles.text_grey}`}>Белки,г</h5>
          <p className={`text text_type_digits-default ${styles.text_grey}`}>{selectedIngredient.proteins}</p>
        </li>
        <li className={`mr-5 ${styles.popup_list_selectedIngredient}`}>
          <h5 className={`text text_type_main-default ${styles.text_grey}`}>Жиры,г</h5>
          <p className={`text text_type_digits-default ${styles.text_grey}`}>{selectedIngredient.fat}</p>
        </li>
        <li className={`${styles.popup_list_selectedIngredient}`}>
          <h5 className={`text text_type_main-default ${styles.text_grey}`}>Углеводы,г</h5>
          <p className={`text text_type_digits-default ${styles.text_grey}`}>{selectedIngredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  </div>
  )
}

IngredientDetails.propTypes ={
  selectedIngredient: PropTypes.object.isRequired
}

export default IngredientDetails