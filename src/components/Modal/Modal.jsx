import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';




function Modal(props) {

  return ReactDOM.createPortal(
    (
      <div className={!props.popupClosed ? styles.modal_state_closed : ''}>
        <div className={styles.overlay} onClick={() => props.setPopupClosed(false)} />
        <section className={styles.modal}>
          <CloseIcon type="primary" onClick={() => props.setPopupClosed(false)}/>
          {props.children}
        </section>
      </div>
    ), document.getElementById("root-modal")
  )

  
}

export default Modal