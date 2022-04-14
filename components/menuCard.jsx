import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { selectProducts } from '../redux/cartSelectors';
import { addProduct, removeProduct, selectProducts, selectProductsCount } from '../redux/cartSlice';
import styles from "../styles/menuCard.module.css";
import ButtonAddRemoveItem from './common/buttonAddRemoveItem';

const MenuCard = ({item},cartCount) => {
  const {_id,img, title, prices, desc } = item;
  const dispatch = useDispatch();
  const handleQuantity = () => {
    let quantity = 0;
    const products = useSelector(selectProducts) ;
    let cartCount = useSelector(selectProductsCount);
    console.log(cartCount);
    if (cartCount !== 0) {
      console.log(products);
      const foundItemInCart = products.find((item) => item._id === _id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className={styles.item}>
      <Link href={`/menu/${item._id}`} passHref>
        <div>
          <div className={styles.image}>
            <Image src={img} alt='food' width="130px" height='130px'/>
          </div>
          <div className={styles.itemHeading }>
            <p className={styles.name}>{title}</p>
            <p className={styles.info}>
              <small>{desc}</small>
            </p>
          </div>
        </div>
      </Link>
      <div className={styles.itemDescription}>
        <span className={styles.price}> ${prices[0]} </span>
        <ButtonAddRemoveItem
          className={styles.btnAddRemove}
          label='ADD'
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(removeProduct(item))}
          handleAddItem={()=> dispatch(addProduct(item))}
        />
      </div>
    </div>
  )
}

export default MenuCard