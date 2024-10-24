import React from 'react';
import styles from './CustomButton.module.css'; // Importing module-scoped CSS

const CustomButton = ({ text, onClick }) => {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
