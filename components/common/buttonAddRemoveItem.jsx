import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../../styles/buttonAddRemoveItem.module.css";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className={styles.btnAddRemove}>
      {quantity !== 0 ? (
        <div className={styles.positive}>
            
          <FaMinus onClick={handleRemoveItem}/>
          <span> {quantity}</span>
          <FaPlus onClick={handleAddItem}/>
        </div>
      ) : (
        <div onClick={handleAddItem} className={styles.negative}>
          <span>ADD</span>
          <FaPlus/>
        </div>
      )}
    </div>
  )
}

export default ButtonAddRemoveItem