import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'

function Second({ className }) {
  const [headClicked, setheadClicked] = useState('contact')
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className={className}>
      <div className={styles["index-page"]}>
        <main className={styles.main}>
          <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`} >
            <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>

              <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
                {/* Uncomment the line below if you also wish to use an image logo  */}
                <img src="./img/auraLogo.png" alt="" />
                <h1 className={`sitename`}>Aura InfoTech</h1>
              </Link>

              <nav id="navmenu" className={styles.navmenu}>
                <ul>
                  <li><Link href="/" className={headClicked === 'home' ? styles.active : styles.hov} onClick={() => { setheadClicked('home') }} >Home</Link></li>
                  <li><Link href="/#about" className={headClicked === 'about' ? styles.active : 'hov'} onClick={() => { setheadClicked('about') }} >About Us</Link></li>
                  {/* <li><Link href="/#services" className={headClicked==='services'?styles.active:''} onClick={()=>{setheadClicked('services')}}>Services</Link></li>
          <li><Link href="/#portfolio" className={headClicked==='portfolio'?styles.active:''} onClick={()=>{setheadClicked('portfolio')}}>Portfolio</Link></li>
          <li><Link href="/#team" className={headClicked==='team'?styles.active:''} onClick={()=>{setheadClicked('team')}}>Team</Link></li> */}
                  {/* <li><a href="blog.html" className={headClicked==='blog'?styles.active:''} onClick={()=>{setheadClicked('blog')}}>Blog</a></li> */}
                  <li className={`${styles.dropdown} ${headClicked === 'services' ? styles.active : ''}`} onClick={() => { setheadClicked('services') }} ><a href="#" ><span >Services</span> <i className={`bi bi-chevron-down toggle-dropdown`} ></i></a>
                    <ul>
                      <li><a href="#">SAP Solutions</a></li>
                      <li><a href="#">SAP Services</a></li>
                      <li><a href="#">Cloud</a></li>
                      <li><a href="#">Enterprise Analytics with Tableau</a></li>
                      <li><a href="#">Power BI</a></li>
                      <li><a href="#">Technology Services</a></li>
                      <li><a href="#">Business Processing</a></li>
                      <li><a href="#">Consulting</a></li>
                    </ul>
                  </li>
                  <li><a href="#contact" className={headClicked === 'contact' ? styles.active : 'hov'} onClick={() => { setheadClicked('contact') }} >Contact Us</a></li>
                </ul>
                <i className={`${styles["mobile-nav-toggle"]} d-xl-none bi bi-list`}></i>
              </nav>

            </div>
          </header>
          {/* <section id="hero" className={`${styles.hero} ${styles.section} ${styles["dark-background"]}`}>

<div  id="hero-carousel" data-bs-interval="5000" className={`container carousel carousel-fade`} data-bs-ride="carousel">

 
  <div className={`carousel-item active `} >
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>Contact Us</h2>
      <p className={`animate__animated animate__fadeInUp`}>We believe in Creating Value for our Customers by Integrating Technology with Innovation and Agility.
</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  
  <div className={`carousel-item`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}> Tailored for Growing Enterprises
      </h2>
      <p className={`animate__animated animate__fadeInUp`}>Ideal for businesses with strategic growth plans, S/4 HANA Cloud Public Edition supports critical functions like finance, sales, manufacturing, and more.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  
  <div className={`carousel-item`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}> Industry-Leading Best Practices</h2>
      <p className={`animate__animated animate__fadeInUp`}>Benefit from pre-configured best practices and industry-specific scenarios that optimize your operations and fuel your growth journey.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>
  <div className={`carousel-item`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>  Future-Proof Your Business</h2>
      <p className={`animate__animated animate__fadeInUp`}>With SAP S/4HANA Cloud Public Edition, scale your business confidently and explore limitless possibilities with seamless integrations and continuous innovation.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  <a className={styles["carousel-control-prev"]} href="#hero-carousel" role="button" data-bs-slide="prev">
    <span className={`${styles["carousel-control-prev-icon"]} bi bi-chevron-left`} aria-hidden="true"></span>
  </a>

  <a className={styles["carousel-control-next"]} href="#hero-carousel" role="button" data-bs-slide="next">
    <span className={`${styles["carousel-control-next-icon"]} bi bi-chevron-right`} aria-hidden="true"></span>
  </a>

</div>


</section> */}
        </main> </div>
    </div>
  )
}

export default Second