import axios from 'axios';
import Image from "next/image";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddRemoveItem from '../../components/common/buttonAddRemoveItem';
import { addProduct, removeProduct, selectProducts, selectProductsCount } from '../../redux/cartSlice';
import styles from "../../styles/menuItem.module.css";

const MenuItem = ({menuItem}) => {
  const [price, setPrice] = useState(menuItem.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch(); // it will be done only within a functional component since it is a react hook.
  const handleQuantity = () => {
    let quantity = 0;
    const products = useSelector(selectProducts) ;
    let cartCount = useSelector(selectProductsCount);

    if (cartCount !== 0) {
      console.log(products);
      const foundItemInCart = products.find((item) => item._id === menuItem._id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  const changePrice = (number) => {
    setPrice(price + number);
  }

  const handleSize = (sizeIndex) => {
    const difference = menuItem.prices[sizeIndex] - menuItem.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }
  
  const handleChange = (e,option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price)
      setExtras(prev => [...prev,option])
    } else {
      changePrice(-option.price)
      setExtras(extras.filter(extra => extra._id === option._id));
    }
  }

  return (
    <div className={styles.menuItem}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={menuItem.img} width="400px" height="400px" alt=""/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{menuItem.title}</h1>
        <p className={styles.desc}>{menuItem.desc}</p>
        <span className={styles.price}>${price}</span>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src={menuItem.img} objectFit="contain" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src={menuItem.img} objectFit="contain" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src={menuItem.img} objectFit="contain" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.chooseSecond}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {menuItem.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <ButtonAddRemoveItem 
          className={styles.button}
          label= {'Add to Cart'}
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(removeProduct(menuItem))}
          handleAddItem={()=> dispatch(addProduct({...menuItem,price,extras}))}
        />
        {/* <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} >
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
  )
}

export const getServerSideProps = async({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  
  return {
    props:{
      menuItem: res.data
    }
  }
}

export default MenuItem