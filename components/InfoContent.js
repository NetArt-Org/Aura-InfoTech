import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function InfoContent({ className, heading, subHeading, paraHeading1, paraContent1,paraHeading2, paraContent2,paraContent3,paraContent4 }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section id="about" className={`${className} ${styles.about} ${styles.section}`}>
                <div className={`${styles.sectionTitle} container`} data-aos="fade-up">
                    <h2>{heading}</h2>
                    <p>{subHeading}</p>
                </div>
                <div className={`container`}>
                    <div className={`row gy-4`}>
                        <div className={`col-lg-6 ${styles.content}`} >
                            <h3>{paraHeading1}</h3>
                            <p>{paraContent1}</p>
                            <p>{paraContent2}</p>
                        </div>
                        <div className={`col-lg-6`} >
                            <h3>{paraHeading2}</h3>
                            <p>{paraContent3}</p>
                            <p>{paraContent4}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoContent