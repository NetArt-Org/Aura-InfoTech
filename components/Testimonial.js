import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Testimonial({ className, children }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
             <section id="testimonials" className={`${className} ${styles.testimonials} ${styles.section}`}>
            <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
              <h2>Testimonials</h2>
              <p>What they are saying about us</p>
            </div>
           {children}
          </section>
        </>
    )
}

export default Testimonial