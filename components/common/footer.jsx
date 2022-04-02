import React from 'react';
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
				<div className={styles.newsletter }>
					<h3>newsletter</h3>
					<form action="">
						<input type="email" name="" placeholder="enter your email" id=""/>
						<input type="submit" value="subscribe"/>
					</form>
				</div>

				<div className={styles.boxContainer}>
					<div className={styles.box}>
						<h3>our menu</h3>
						<a href="#"><i ></i> pizza</a>
						<a href="#"><i ></i> burger</a>
						<a href="#"><i ></i> chicken</a>
						<a href="#"><i ></i> pasta</a>
						<a href="#"><i ></i> and more...</a>
					</div>

					<div className={styles.box}>
            <h3>quick links</h3>
            <a href="#home"> <i ></i> home</a>
            <a href="#about"> <i ></i> about</a>
            <a href="#popular"> <i ></i> popular</a>
            <a href="#menu"> <i ></i> menu</a>
            <a href="#order"> <i ></i> order</a>
            <a href="#blogs"> <i ></i> blogs</a>
        	</div>

					<div className={styles.box}>
							<h3>extra links</h3>
							<a href="#"> <i ></i> my order</a>
							<a href="#"> <i ></i> my account</a>
							<a href="#"> <i ></i> my favorite</a>
							<a href="#"> <i ></i> terms of use</a>
							<a href="#"> <i ></i> privary policy</a>
					</div>

					<div className={styles.box}>
            <h3>opening hours</h3>
            <p>monday : 7:00am to 10:00pm</p>
            <p>tuesday : 7:00am to 10:00pm</p>
            <p>wednesday : 7:00am to 10:00pm</p>
            <p>friday : 7:00am to 10:00pm</p>
            <p>saturday and sunday closed</p>
        	</div>
				</div>

				<div className={styles.bottom}>

					<div className={styles.share}>
							<a href="#" className="fab fa-facebook-f"></a>
							<a href="#" className="fab fa-twitter"></a>
							<a href="#" className="fab fa-instagram"></a>
							<a href="#" className="fab fa-linkedin"></a>
							<a href="#" className="fab fa-pinterest"></a>
					</div>
    		</div>
			</section>
  )
}

export default Footer