import axios from "axios";
import React, { forwardRef, useRef } from 'react';
import MenuCard from "../../components/menuCard";
//import { menuItemsData } from "../data/data";
import styles from "../../styles/menu.module.css";

const Menu = ({menuItemsData},ref) => {
  const menuRef = useRef();
  return (
      <>
        <h1 className={styles.heading}> Our Menu </h1>
        <div ref={menuRef} className={styles.menu}>
          {menuItemsData.map((item) => (
            <MenuCard item={item} key={item._id} />
          ))}
        </div>
      </>
  )
}

export const getServerSideProps = async() => {
  const res = await axios.get("http://localhost:3000/api/products");
  console.log(res.data);
  return{
    props:{
      menuItemsData:res.data
    }
  }
}

export default forwardRef(Menu); 