import React from 'react'
import styles from "./ModalOverlay.module.css";
import { useNavigate } from 'react-router';

type TModalOverlay = {
  closeModalHandler: () => void | undefined;
};

const ModalOverlay = ({ closeModalHandler }:TModalOverlay):JSX.Element => {
  const navigate = useNavigate();

  const handleOverlayClick = (evt: React.MouseEvent) => {
    if (evt.currentTarget === evt.target) {
      closeModalHandler();
      navigate('/')
    }
  } 

  return (
    <div className={styles.overlay}
     onClick={handleOverlayClick}
      />
    )
}

export default React.memo(ModalOverlay)