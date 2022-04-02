import React, { forwardRef, useRef } from 'react';
import MenuItem from '../components/menuItem';
import { menuItemsData } from "../data/data";
import styles from "../styles/menu.module.css";

const Menu = () => {
  const menuRef = useRef();
  return (
      <>
        <h1 className={styles.heading}> Our Menu </h1>
        <div ref={menuRef} className={styles.menu}>
          {menuItemsData.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
          
        </div>
      </>
  )
}

export default forwardRef(Menu); 