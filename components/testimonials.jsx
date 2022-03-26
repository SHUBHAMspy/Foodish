import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "../styles/testimonials.module.css";


const testimonialData = [
  {
    image:"/images/profile-one.jpg",
    paragraph:'Our restaurant provide you the best food dishes you will ever experience.Let us take the opportunity to impress you by some thing delivering great for you.We maintain our food qualities at its best',
    name:'Abhyudya',
    location:'New Delhi,India'
  },
  {
    image:"/images/profile-two.jpg",
    paragraph:'Our restaurant provide you the best food dishes you will ever experience.Let us take the opportunity to impress you by some thing delivering great for you.We maintain our food qualities at its best',
    name:'Shivalika',
    location:'Mumbai,India'
  },
  {
    image:"/images/profile-three.jpg",
    paragraph:'Our restaurant provide you the best food dishes you will ever experience.Let us take the opportunity to impress you by some thing delivering great for you.We maintain our food qualities at its best',
    name:'Kim Anderson',
    location:'New york,USA'
  },
  {
    image:"/images/serv-4.png",
    paragraph:'Our restaurant provide you the best food dishes you will ever experience.Let us take the opportunity to impress you by some thing delivering great for you.We maintain our food qualities at its best',
    name:'Leticia Smith',
    location:'California,USA'
  }
]

const Testimonials = () => {
  // const items = testimonialData.map((testimonial,index) => (
  //   <div className={styles.slider}>
  //     <div className={styles.swiper}>
  //       <p> {testimonial.paragraph} </p>
  //       <div className={styles.author}>
  //         <div >
  //           <Image className={styles.image} src={testimonial.image} width= '30px' height='30px' />
  //         </div>
  //         <div className={styles.info }>
  //           <h4>{testimonial.name}</h4>
  //           <span>{testimonial.location}</span>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
      // <div className={ styles.content } key={index}>
      //   <p> {testimonial.paragraph} </p>
      //   <div className={styles.author}>
      //     <div >
      //       <Image className={styles.authorImage} src={testimonial.image} width= '30px' height='30px' />
      //     </div>
      //     <div>
      //       <h4>{testimonial.name}</h4>
      //       <span>{testimonial.location}</span>
      //     </div>
      //   </div>
      // </div>
    
    
    //))

    const responsive = {
      0: {
        items: 1,
      },
      512: {
        items: 1,
      },
    };
  return (
    <section className={styles.testimonial} id="review">
      <div className={styles.row}>
        
        <div className={styles.col}>
          <h2>What people say about Foodish</h2>
          <div className={styles.slider }>
            <div className={styles.swiper }>

              <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={3000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                
                autoPlay
              >
                <div>

                  <p>
                      “Our restaurant provide you the best food dishes you will
                      ever experience.Let us take the opportunity to impress you
                      by some thing delivering great for you.We maintain our food
                      qualities at its best”
                  </p>
                  <div className={styles.author}>
                      <div className={styles.image}>
                        <img src="images/profile-one.jpg" alt="" />
                      </div>
                      <div className={styles.info}>
                        <h4>Kim Anderson</h4>
                        <span>New york,USA</span>
                      </div>
                  </div>
                </div>
                
                <div>

                  <p>
                      “Our restaurant provide you the best food dishes you will
                      ever experience.Let us take the opportunity to impress you
                      by some thing delivering great for you.We maintain our food
                      qualities at its best”
                  </p>
                  <div className={styles.author}>
                      <div className={styles.image}>
                        <img src="images/profile-two.jpg" alt="" />
                      </div>
                      <div className={styles.info}>
                        <h4>Kim Anderson</h4>
                        <span>New york,USA</span>
                      </div>
                  </div>
                </div>
                
                <div>
                  <p>
                      “Our restaurant provide you the best food dishes you will
                      ever experience.Let us take the opportunity to impress you
                      by some thing delivering great for you.We maintain our food
                      qualities at its best”
                  </p>
                  <div className={styles.author}>
                    <div className={styles.image}>
                      <img src="images/profile-three.jpg" alt="" />
                    </div>
                    <div className={styles.info}>
                      <h4>Kim Anderson</h4>
                      <span>New york,USA</span>
                    </div>
                  </div>
                </div>
              </AliceCarousel>
            </div>
          </div>
          
        </div>
        <div className={styles.col} data-aos="slide-up">
          <Image src="/images/food-three.png" alt="" width="600px" height="600px"  />
        </div>
      </div>

      {/* <h3 className={styles.heading}> What people say about Foodish</h3>
      <div className={styles.slide}>
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

        <div className={styles.imageContainer} data-aos="slide-up">
          <Image className={styles.image} src="/images/food-three.png" alt="" width="600px" height="600px"  />
        </div>
      </div> */}
    </section>
  )
  
}

export default Testimonials