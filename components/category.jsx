import React from 'react';
import styles from "../styles/category.module.css";

const categoryData = [
  {
    image: "/images/cat-1.png",
    heading: "Combo",
  },
  {
    image: "/images/cat-2.png",
    heading: "Pizza",
  },
  {
    image: "/images/cat-3.png",
    heading: "Burger",
  },
  {
    image: "/images/cat-4.png",
    heading: "Chicken",
  },
  {
    image: "/images/cat-5.png",
    heading: "Dinner",
  },
  {
    image: "/images/cat-6.png",
    heading: "Coffee",
  },
]
const Category = () => {
  return (
    <section className={styles.category}>
      {
      
        categoryData.map((category,index) => (
          <a href="#" className={styles.box} key={index}>
            <img src={category.image} alt=""/>
            <h3>{category.heading}</h3>
          </a>

        ))
      }
			{/* <a href="#" className={ styles.box}>
        <img src="images/cat-1.png" alt=""/>
        <h3>Combo</h3>
    	</a>

			<a href="#" className={ styles.box}>
        <img src="images/cat-2.png" alt=""/>
        <h3>Pizza</h3>
    	</a>

			<a href="#" className="box">
        <img src="images/cat-3.png" alt=""/>
        <h3>Burger</h3>
    	</a>

			<a href="#" className="box">
        <img src="images/cat-4.png" alt=""/>
        <h3>Chicken</h3>
    	</a>

			<a href="#" className="box">
        <img src="images/cat-5.png" alt=""/>
        <h3>Dinner</h3>
    </a>

			<a href="#" className="box">
				<img src="images/cat-6.png" alt=""/>
				<h3>coffee</h3>
			</a> */}

		</section>
  )
}

export default Category