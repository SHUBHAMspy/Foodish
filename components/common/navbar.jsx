import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { FaRegIdCard, FaShoppingCart } from "react-icons/fa";
import { HiOutlineHome, HiOutlineInboxIn, HiOutlineInformationCircle } from "react-icons/hi";
import { IoFastFoodOutline } from "react-icons/io5";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  const [classname, setClassName] = useState()
  useEffect(() => {
    setClassName(styles.active)
  }, [])
  
  // useEffect(() => {
  //   const menuLi = document.querySelectorAll("#menu li");
  //   console.log(menuLi);

  //   function setMenuActive() {
  //     menuLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    
  // }, [])
  
  const router = useRouter();
  return (
    <>
    {  
      <header className={styles.navbar}>
        <Link href="/"  >
          <a className={styles.logo}>
            foodish
          </a>
        </Link>
  
        <nav className={styles.navbarlink}>
          <Link href="/" >
            <a>Home</a>
          </Link>
          
          <a href="/#about">About</a>
          <Link href="/menu" passHref>
            <a>Menu</a>
          </Link>
          <a href="/#review">Review</a>
          <a href="/#order">Order</a>
        </nav>
  
        <div className={styles.btnCartCount}>
          <FaShoppingCart className={ styles.cart } />
        </div>
      </header>
      }
      {
        <div className={styles.downnavbar}>
          <ul id="menu" className={styles.list}>
            <li className={router.pathname == "/" ? classname : ""} >
              <Link href='/' passHref >
                <a >
                  <HiOutlineHome className={styles.icon}/>
                  <div className={styles.text}>Home</div>
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/#about" ? styles.active : ""} >
              <Link href="/#about" passHref>
                <a  >
                  <HiOutlineInformationCircle className={styles.icon}/>
                  <div className={styles.text}>About</div>
                </a>
              </Link>
            </li>
            
            <li className={router.pathname == "/menu" ? styles.active : ""} >
              <Link href='/menu' passHref>
                <a >
                  <IoFastFoodOutline className={styles.icon}/>
                  <div className={styles.text}>Menu</div>
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/#review" ? styles.active : ""}>
              <Link href="/#review" >
                <a >
                  <FaRegIdCard className={styles.icon}/>
                  <div className={styles.text}>Reviews</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/orders'passHref>
                <a>
                  <HiOutlineInboxIn className={styles.icon}/>
                  <div className={styles.text}>Orders</div>
                </a>
              </Link>
            </li>
            <div className={styles.indicator}></div>
          </ul>
        </div>
      }
    </>
  )
}

export default Navbar