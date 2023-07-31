import React from 'react'
import styles from "./ModalOverlay.module.css";
import PropTypes from 'prop-types';

function ModalOverlay({ closeModalHandler }) {

  const handleOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModalHandler();
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