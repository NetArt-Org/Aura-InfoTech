import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'
import '@coreui/coreui/dist/css/coreui.min.css'
function CTA({ className }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <section id="call-to-action" className={`${className} ${styles["call-to-action"]} ${styles["section"]} ${styles["dark-background"]}`}>
                <div className={`container`}>
                    <div className={`row`} data-aos="zoom-in" data-aos-delay="100">
                        <div className={`col-xl-9 text-center text-xl-start`}>
                            <h3>Call To Action</h3>
                            <p>Ready to transform your business? Get in touch with us today to explore how our expertise can drive growth and innovation for your organization. Let’s shape the future of your business together!
                            </p>
                        </div>
                        <div className={`col-xl-3 ${styles["cta-btn-container"]} text-center`}>
                            <Link className={`${styles["cta-btn"]} align-middle`} href="/contact-us">Call To Action</Link>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default CTA