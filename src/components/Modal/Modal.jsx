import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';




function Modal(props) {

  function handleKeyPressEsc(e) {
    if (e.key === 'Escape') {
      props.setPopupClosed(false);
    }
  }

  React.useEffect(()=> {
    document.addEventListener("keydown",  handleKeyPressEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyPressEsc);
    }
  }, [])

  return ReactDOM.createPortal(
    (
      <div className={!props.popupClosed ? styles.modal_state_closed : ''}>
        <ModalOverlay setPopupClosed={props.setPopupClosed} />
        <section className={styles.modal}>
          <CloseIcon type="primary" onClick={() => props.setPopupClosed(false)}/>
          {props.children}
        </section>
      </div>
    ), document.getElementById("root-modal")
  )

  
}

export default Modal