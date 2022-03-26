import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import styles from "../styles/hero.module.css";

export const heroData = [
  
  {
    image: "/images/home-img-1.png",
    heading: "Spicy Noodles",
    description: "Grab onto these spicy noodles . People crave it"
  },
  {
    image: "/images/home-img-2.png",
    heading: "Fried Chicken",
    description: "Mouth Watering chicken in the town. Totally Fresh and juicy"
  },
  {
    image: "/images/home-img-3.png",
    heading: "Hot Pizza",
    description: "We make best pizzas in the town. People love it grab a slice now"
  },
];

// let count = 0;
// let slideInterval;

const Hero = () => {
  //const [currentIndex, setCurrentIndex] = useState(0);
  // const slideRef = useRef(); // for dom manipulation with react

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  // useEffect(() => {
  //   slideRef.current.addEventListener("animationend", removeAnimation);
  //   slideRef.current.addEventListener("mouseenter", pauseSlider);
  //   slideRef.current.addEventListener("mouseleave", startSlider);
    
  //   startSlider();
  //   return () => {
  //     pauseSlider();
  //   }
  // }, [])
  
  // const startSlider = () => {
  //   slideInterval = setInterval(() => {
  //     handleOnNextClick();
  //   }, 3000);
  // };

  // const pauseSlider = () => {
  //   clearInterval(slideInterval);
  // };

  // const handleOnNextClick = () => {
  //   count = (count + 1) % heroData.length;
  //   setCurrentIndex(count);
  //   slideRef.current.classList.add("fade-anim");
  // }
  // style={{transform:`translateX(${-100*currentIndex}vw)`}}

  const items = heroData.map((slide,index) => (
    <div className={styles.slide } key={index}>
      <div className={styles.content}>
        <span>Our special dish</span>
        <h3>{slide.heading}</h3>
        <p>{slide.description}</p>
        <a href="#" className={styles.btn}>order now <HiArrowNarrowRight/> </a>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={slide.image} alt="" width="600px" height="600px"  />
      </div>

    </div>
  )) 

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
  };
  return (
    <section className={styles.hero} >
      
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={3000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay

      />  
    </section>
  )
}

export default Hero