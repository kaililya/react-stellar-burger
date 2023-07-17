import React from 'react'
import styles from "./IngredientPopup.module.css";
import {data} from '../../utils/data.js';



function IngredientPopup(props) {
  return (
    <>
    <div className='pt-15'>
      <h3 className="ml-10 text text_type_main-large">Детали ингредиента</h3>
      <div className={styles.popup_main}>
        <img className={`mb-4 ${styles.popup}`} src={data[2].image_large} alt='' />
        <h4 className={`mb-8 text text_type_main-medium`}>{data[2].name}</h4>
        <ul className={`mb-15 ${styles.popup_details_container}`}>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Калории,ккал</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>244,4</p>
          </li>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Белки,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>12,2</p>
          </li>
          <li className={`mr-5 ${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Жиры,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>17,2</p>
          </li>
          <li className={`${styles.popup_list_item}`}>
            <h5 className={`text text_type_main-default ${styles.text_grey}`}>Углеводы,г</h5>
            <p className={`text text_type_digits-default ${styles.text_grey}`}>10,2</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default IngredientPopup