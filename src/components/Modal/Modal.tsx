import React, { FunctionComponent } from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

// TODO
// 1) Сделать так, чтобы при закрытие попапа я переходил на /feed, а не /main

type TModal = {
  closeModalHandler: () => void | undefined;
  children: JSX.Element;
};

const Modal = ({ children, closeModalHandler }:TModal):JSX.Element => {
  const navigate = useNavigate();

  React.useEffect(()=> {
    function handleKeyPressEsc(e:KeyboardEvent) {
      if (e.key === "Escape") {
        navigate('/');
        closeModalHandler();
      }
    }
    document.addEventListener("keydown",  handleKeyPressEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyPressEsc);
    }
  }, []);

  return ReactDOM.createPortal(
    (
      <div>
        <ModalOverlay closeModalHandler={closeModalHandler} />
        <section className={styles.modal}>
          <CloseIcon type="primary"
             onClick={() => {closeModalHandler();
               navigate('/')}}
           />
          {children}
        </section>
      </div>
    ), document.getElementById("root-modal") as HTMLElement
  )
}

export default React.memo(Modal)