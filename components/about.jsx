import Image from 'next/image';
import React from 'react';
import styles from "../styles/about.module.css";

const aboutData = [
  {
    image:"/images/serv-1.png",
    heading:'fast delivery'
  },
  {
    image:"/images/serv-2.png",
    heading:'fresh food'
  },
  {
    image:"/images/serv-3.png",
    heading:'best quality'
  },
  {
    image:"/images/serv-4.png",
    heading:'24/7 support'
  }
]

const About = () => {
  return (
    <section className={styles.about} id="about">
			<div className={styles.image} data-aos="fade-right">
        <Image src="/images/food-two.png" alt="" width='600px' height='600px'/>
      </div>

      <div className={styles.content}>
        
        <span>why choose us?</span>
        <h3 className={styles.title}>what's make our food delicious!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?</p>
        <a href="#" className="btn">read more</a>

        <div className={styles.iconsContainer}>

          {aboutData.map((data,index) => (
            <div className={ styles.icons } key={index} data-aos="zoom-in">
              <Image src={data.image} width='40px' height='40px' />
              <h3>{data.heading}</h3>
            </div>
          
          ))}

            {/* <div className="icons">
                <img src="images/serv-1.png" alt=""/>
                <h3>fast delivery</h3>
            </div>  
            <div className="icons">
                <img src="images/serv-2.png" alt=""/>
                <h3>fresh food</h3>
            </div>   
            <div className="icons">
                <img src="images/serv-3.png" alt=""/>
                <h3>best quality</h3>
            </div>  
            <div className="icons">
                <img src="images/serv-4.png" alt=""/>
                <h3>24/7 support</h3>
            </div>            */}
        </div>
      </div>
		</section>
  )
}

export default About