import React from 'react'
import styles from "./IngredientPopup.module.css";



function IngredientPopup(props) {
  console.log(props.currentIngredient);
  
  
  return (
    <>
    <div className='pt-15'>
      <h3 className="ml-10 text text_type_main-large">Детали ингредиента</h3>
      <div className={styles.popup_main}>
        <img className={`mb-4 ${styles.popup}`} src={props.currentIngredient.image_large} alt={props.currentIngredient.name} />
        <h4 className={`mb-8 text text_type_main-medium`}>{props.currentIngredient.name}</h4>
        <ul className={`mb-15 ${styles.popup_details_container}`}>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Калории,ккал</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>{props.currentIngredient.calories}</p>
          </li>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Белки,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>{props.currentIngredient.proteins}</p>
          </li>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Жиры,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>{props.currentIngredient.fat}</p>
          </li>
          <li className={`${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Углеводы,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>{props.currentIngredient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default IngredientPopup