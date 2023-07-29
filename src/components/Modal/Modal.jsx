import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';


// TODO
// 1) Доверстать модалку чтобы добавлять title

function Modal( { children, closeModalHandler } ) {
  React.useEffect(()=> {
    function handleKeyPressEsc(e) {
      if (e.key === "Escape") {
        closeModalHandler();
      }
    }
    document.addEventListener("keydown",  handleKeyPressEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyPressEsc);
    }
  }, [])

  return ReactDOM.createPortal(
    (
      <div>
        <ModalOverlay closeModalHandler={closeModalHandler} />
        <section className={styles.modal}>
          <CloseIcon type="primary"
             onClick={closeModalHandler}
           />
          {children}
        </section>
      </div>
    ), document.getElementById("root-modal")
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModalHandler: PropTypes.func.isRequired
}

export default React.memo(Modal)