import React from 'react'
import styles from "./ModalOverlay.module.css";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
function ModalOverlay({ closeModalHandler }) {
  const navigate = useNavigate();

  const handleOverlayClick = (evt) => {
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

ModalOverlay.propTypes = {
  closeModalHandler: PropTypes.func.isRequired
}

export default React.memo(ModalOverlay)