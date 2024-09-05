import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'

function Banner({ className,heading,subHeading,btnText,btnLink }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section className={className}>
                <div className={` ${styles.banner2}`}>
                    <h2>{heading}</h2>
                    <p >{subHeading}</p>
                    <Link href={btnLink ? btnLink :"#"} className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>{btnText}</Link>
                </div>
            </section>
        </>
    )
}

export default Banner