import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

function CardContent({ className, heading, subHeading, cardContent }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section id="services" className={`${className} ${styles.services} ${styles.section}`}>
                <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
                    <h2>{heading}</h2>
                    <p>{subHeading}</p>
                </div>
                <div className={`container`}>
                    <div className={`row gy-4`}>
                        {cardContent ? Object.entries(cardContent).map(([key, x], i) => {
                            return (
                                <Link href={x.link ? x.link :"#"} key={key} className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="100">
                                    <div className={`${styles["service-item"]}  position-relative`}>
                                        <div className={styles.icon}>
                                            {x.img ? <img src={x.img} /> :
                                                <i className={`bi ${x.icon}`} style={{ color: x.iconColor }}></i>}
                                        </div>
                                        <a href={x.link ? x.link :"#"} className={`stretched-link`}>
                                            <h3>{x.heading}</h3>
                                        </a>
                                        <p>{x.content}</p>
                                    </div>
                                </Link>
                            )
                        }) : null}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardContent