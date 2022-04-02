import Image from 'next/image';
import React from 'react';
import styles from "../styles/menuItem.module.css";
import ButtonAddRemoveItem from './common/buttonAddRemoveItem';

const MenuItem = ({item},cartCount = 0) => {
  const { id, img, name, price, info } = item;
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      // const foundItemInCart = cartList.find((item) => item.id === id);
      // if (foundItemInCart) {
      //   quantity = foundItemInCart.quantity;
      // }
    }
    return quantity;
  };
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={img} alt='food' width="130px" height='130px'/>
      </div>
      <div className={styles.itemHeading }>
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>
          <small>{info}</small>
        </p>
      </div>
      <div className={styles.itemDescription}>
        <span className={styles.price}> ${price} </span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => console.log("Removed")}
          handleAddItem={() => console.log("Added")}
        />
      </div>
    </div>
  )
}

export default MenuItem