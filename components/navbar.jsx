import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/navbar.module.css";


const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link href="/"  >
        <a className={styles.logo}>
          foodish
        </a>
			</Link>

      <nav className={styles.navbarlink}>
        <a href="#home">Home</a>
        
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#order">Order</a>
    </nav>

    <div className={styles.btnCartCount}>
      <FaShoppingCart className={ styles.cart } />
    </div>

    
    </header>
  )
}

export default Navbar