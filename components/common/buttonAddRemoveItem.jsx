import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../../styles/buttonAddRemoveItem.module.css";

const ButtonAddRemoveItem = ({className,label, quantity, handleAddItem, handleRemoveItem }) => {
  console.log(quantity);
  return (
    <div className={className}>
      {quantity !== 0 ? (
        <div className={styles.positive}>
            
          <FaMinus onClick={handleRemoveItem}/>
          <span> {quantity}</span>
          <FaPlus onClick={handleAddItem}/>
        </div>
      ) : (
        <div onClick={handleAddItem} className={styles.negative}>
          <span>{label}</span>
          <FaPlus/>
        </div>
      )}
    </div>
  )
}

export default ButtonAddRemoveItem