import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@coreui/coreui/dist/css/coreui.min.css'
function ContactForm({ className }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section id="contact" className={`${className} ${styles.contact} ${styles.section}`}>
                <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Ready to Transform Your Business with SAP?</p>
                </div>
                <div className={`container`} data-aos="fade" data-aos-delay="100">
                    <div className={`row gy-4`}>
                        <div className={`col-lg-4`}>
                            <div className={styles["info-item"]}>Ready for Digital Transformation of Your Business with an ERP
                                solution.
                            </div>
                            {/* <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="200">
<i className={`bi bi-geo-alt flex-shrink-0`}></i>
<div>
<h3>Address</h3>
<p>A108 Adam Street, New York, NY 535022</p>
</div>
</div> */}
                            <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="300">
                                <i className={`bi bi-telephone flex-shrink-0`}></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 9952244816</p>
                                </div>
                            </div>

                            <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="400">
                                <i className={`bi bi-envelope flex-shrink-0`}></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>sales@aurainfotech.sg</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-8`}>
                            <form action="forms/contact.php" method="post" className={styles["php-email-form"]} data-aos="fade-up" data-aos-delay="200">
                                <div className={`row gy-4`}>
                                    <div className={`col-md-6`}>
                                        <input type="text" name="name" className={`form-control`} placeholder="Your Name" required="" />
                                    </div>

                                    <div className={`col-md-6 `}>
                                        <input type="email" className={`form-control`} name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div className={`col-md-12`}>
                                        <input type="text" className={`form-control`} name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div className={`col-md-12`}>
                                        <textarea className={`form-control`} name="message" rows="6" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div className={`col-md-12 text-center`}>
                                        <div className={styles.loading}>Loading</div>
                                        <div className={styles["error-message"]}></div>
                                        <div className={styles["sent-message"]}>Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default ContactForm