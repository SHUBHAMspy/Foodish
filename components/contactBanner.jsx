import React from 'react';
import styles from "../styles/contactBanner.module.css";


const ContactBanner = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>
            Join with us and <br />
            Get Discount upto 40%
          </h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button className={styles.btn}>Sign In</button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default ContactBanner