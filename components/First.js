/**@format */
import React, {useState,useEffect,useRef} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'
import { CCarousel, CCarouselItem, CImage,CCarouselCaption} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
function First({className}) {
  const [features1, setfeatures1] = useState(true)
  const [features2, setfeatures2] = useState(false)
  const [features3, setfeatures3] = useState(false)
  const [features4, setfeatures4] = useState(false)
  const [headClicked, setheadClicked] = useState('home')
  const [faq1, setfaq1] = useState(true)
  const [faq2, setfaq2] = useState(false)
  const [faq3, setfaq3] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mobileNav, setmobileNav] = useState(false)
  // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
  // mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev); // Toggle the state
  };
  const headingStyle = {
    marginBottom: "30px",
    fontSize: window.innerWidth >= 768 ? "48px" : "20px", // Adjust based on your 'md' breakpoint
    fontWeight: "700",
  };
  const captionStyle= {
    marginBottom: window.innerWidth >= 768? "5%": "0",
    marginTop: window.innerWidth >= 768? "0": "10%"
  }
  function changeCss () {
    var navElement = document.querySelector("header");
    // this.scrollY >500 ? navElement.style.boxShadow ="inset 0 0 0 300px rgba(0,0,0,0.5)" : navElement.style.boxShadow ="inset 0 0 0 300px rgba(0,0,0,0)";
    this.scrollY >500 ? navElement.style.opacity =0.94 : navElement.style.opacity =1;
  }
  useEffect(() => {
    window.addEventListener("scroll", changeCss , false);
  
    
  }, [])
  
 
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const carouselRef = useRef(null);

  
  return (
    <div className={className} style={{}}>
        <div className={styles["index-page"]}>
        
    <main className={styles.main}>
    <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
    <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>

      <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
         {/* Uncomment the line below if you also wish to use an image logo  */}
         <img src="./img/auraLogo.png" alt=""/>
        <h1 className={`sitename`}>Aura InfoTech</h1>
      </Link>

      <nav id="navmenu" className={styles.navmenu}>
        <ul>
          <li><a href="#hero" className={headClicked==='home'?styles.active:''} onClick={()=>{setheadClicked('home')}}  >Home</a></li>
          <li><Link href="/about-us" className={headClicked==='about'?styles.active:''} onClick={()=>{setheadClicked('about')}} >About Us</Link></li>
          {/* <li><a href="#services" className={headClicked==='services'?styles.active:''} onClick={()=>{setheadClicked('services')}}>Services</a></li> */}
          {/* <li><a href="#portfolio" className={headClicked==='portfolio'?styles.active:''} onClick={()=>{setheadClicked('portfolio')}}>Portfolio</a></li> */}
          {/* <li><a href="#team" className={headClicked==='team'?styles.active:''} onClick={()=>{setheadClicked('team')}}>Team</a></li> */}
          {/* <li><a href="blog.html" className={headClicked==='blog'?styles.active:''} onClick={()=>{setheadClicked('blog')}}>Blog</a></li> */}
          <li className={`${styles.dropdown} ${headClicked==='services'?styles.active:''}`} onClick={()=>{setheadClicked('services')}} ><a href="#" ><span >Services</span> <i className={`bi bi-chevron-down toggle-dropdown`} ></i></a>
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
          <li><Link href="/contact-us" className={headClicked==='contact'?styles.active:''} onClick={()=>{setheadClicked('contact')}} >Contact Us</Link></li>
        </ul>
        <i className={  ` ${styles["mobile-nav-toggle"]} ${mobileNav?"mobile-nav-active":"mobile-nav-toggle"} d-xl-none bi bi-list`} onClick={()=>{setmobileNav(!mobileNav)}}></i>
      </nav>

    </div>
  </header>
  <CCarousel controls indicators>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <CImage className={`d-block w-100`} src="./img/hero/hero1.jpg" alt="slide 1"  />
    <CCarouselCaption className="d-block" >
      <h2 style={headingStyle}>Accelerate your Digital Transformation with SAP</h2>
      <p className="d-none d-md-block" style={{maxWidth:"80%", animationDelay:"0.4s", margin:"0 auto 30px auto"}}>Empower your business with cutting-edge SAP solutions, driving agility, innovation, and growth in a rapidly changing landscape.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</a>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <CImage className={`d-block w-100`} src="./img/hero/hero2.jpg" alt="slide 2" />
    <CCarouselCaption className="d-block" >
      <h2 style={headingStyle}>Simplify your IT Landscape with Award-Winning ERP Solutions</h2>
      <p  className="d-none d-md-block" style={{maxWidth:"80%", animationDelay:"0.4s", margin:"0 auto 30px auto"}}>Streamline operations and reduce complexity with our industry-leading ERP systems, designed for efficiency and scalability.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</a>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <CImage className="d-block w-100" src="./img/hero/hero3.jpg" alt="slide 3" />
    <CCarouselCaption className="d-block" >
      <h2 style={headingStyle}>Stay Ahead with SAP APO</h2>
      <p className="d-none d-md-block" style={{maxWidth:"80%", animationDelay:"0.4s", margin:"0 auto 30px auto"}}>Optimize your supply chain with SAP APO, ensuring precise planning and maintaining a competitive edge in the market.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</a>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <CImage className="d-block w-100" src="./img/hero/hero4.png" alt="slide 4" />
    <CCarouselCaption className="d-block" style={captionStyle}>
      <h2 style={headingStyle}>GROW with SAP</h2>
      <p className="d-none d-md-block" style={{maxWidth:"80%", animationDelay:"0.4s", margin:"0 auto 30px auto"}}>Unlock growth potential with SAP solutions tailored for small and medium businesses, enabling faster innovation and expansion.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</a>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <CImage className="d-block w-100" src="./img/hero/hero5.png" alt="slide 5" />
    <CCarouselCaption className="d-block" >
      <h2 style={headingStyle}>RISE with SAP</h2>
      <p className="d-none d-md-block" style={{maxWidth:"80%", animationDelay:"0.4s", margin:"0 auto 0 auto"}}>Transition to the cloud seamlessly with RISE with SAP, empowering your existing systems with future-ready cloud capabilities.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</a>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
<div className={styles.hero}>
<svg className={styles["hero-waves"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
  </defs>
  <g className={styles.wave1}>
    <use href="#wave-path" x="50" y="3" />
  </g>
  <g className={styles.wave2}>
    <use href="#wave-path" x="50" y="0" />
  </g>
  <g className={styles.wave3}>
    <use href="#wave-path" x="50" y="9" />
  </g>
</svg>
</div>

  {/* <section id="hero" className={`${styles.hero} ${styles.section} ${styles["dark-background"]}`}>

<div  id="hero-carousel" data-bs-interval="5000" className={`container carousel carousel-fade`} data-bs-ride="carousel">

 
  <div className={`carousel-item active `} >
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>Unlock Agility with SAP Cloud Solutions</h2>
      <p className={`animate__animated animate__fadeInUp`}>Empower your enterprise to adopt new business models, enhance productivity, and create long-term value with SAP&#39;s cutting-edge cloud solutions.</p>
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

      <section id="about" className={`${styles.about} ${styles.section}`}>


<div className={`${styles.sectionTitle} container`} data-aos="fade-up">
  <h2>About</h2>
  <p>Who we are</p>
</div>

<div className={`container`}>
  <div className={`row gy-4`}>

    <div className={`col-lg-6 ${styles.content}`} data-aos="fade-up" data-aos-delay="100">
      <p>
      At Aura InfoTech, we stand at the forefront of digital transformation, helping businesses across the ASEAN and APAC regions unlock their full potential through innovative technology solutions. Our expertise spans across ERP, Cloud, CRM, Data Analytics, AI, and Offshore Technology Solutions, making us a one-stop partner for enterprises seeking to drive efficiency, agility, and growth in a rapidly evolving digital landscape.

      </p>
      <ul>
        <li><i className={`bi bi-check2-circle`}></i> <span>SAP Expertise: Seamless SAP S/4 HANA Cloud integration for real-time insights.</span></li>
        <li><i className={`bi bi-check2-circle`}></i> <span>Tailored Solutions: Industry-specific, pre-configured best practices for peak performance.</span></li>
        <li><i className={`bi bi-check2-circle`}></i> <span>Innovative Technology: AI, machine learning, and data analytics to keep you ahead.</span></li>       
        <li><i className={`bi bi-check2-circle`}></i> <span>Full Support: End-to-end guidance through your digital transformation journey.</span></li>
        <li><i className={`bi bi-check2-circle`}></i> <span>Client Focus: Long-term partnerships with exceptional service and value.</span></li>
      </ul>
    </div>

    <div className={`col-lg-6`} data-aos="fade-up" data-aos-delay="200">
      <p>At Aura InfoTech, we believe that the key to success lies in collaboration and innovation. Our team of experienced professionals works tirelessly to provide solutions that not only address today’s challenges but also anticipate tomorrow’s opportunities. We are driven by a shared vision of a digital future where businesses can operate with unprecedented agility, efficiency, and insight.
      </p>
      <p>Our strength lies not only in our technical capabilities but also in our commitment to understanding the unique challenges and opportunities our clients face. We work closely with our clients to design and implement tailored solutions that not only meet their current needs but also future-proof their operations.
      </p>
      <Link href="/about-us" className={`${styles.readMore}`}><span>Read More</span><i className={`bi bi-arrow-right`}></i></Link>
    </div>

  </div>

</div>

</section>
<section id="call-to-action" className={`${styles["call-to-action"]} ${styles["section"]} ${styles["dark-background"]}`}>

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
    <section id="services" className={`${styles.services} ${styles.section}`}>


    <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
      <h2>Services</h2>
      <p>What we do offer</p>
    </div>

  <div className={`container`}>

    <div className={`row gy-4`}>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="100">
        <div className={`${styles["service-item"]}  position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-cash-stack`} style={{color: "#0dcaf0"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>SAP Solutions</h3>
          </a>
          <p>Transform your operations with SAP S/4 HANA Cloud, offering real-time insights and seamless integration to drive growth and efficiency.
          </p>
        </div>
      </div>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="200">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-calendar4-week`} style={{color: "#fd7e14"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>SAP Services</h3>
          </a>
          <p>Expert implementation and support tailored to your needs. Enhance your SAP systems with our comprehensive services.</p>
        </div>
      </div>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="300">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-chat-text`} style={{color: "#20c997"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Cloud</h3>
          </a>
          <p>Modernize your infrastructure with our scalable cloud solutions, designed to meet your evolving business requirements.</p>
        </div>
      </div>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="400">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-credit-card-2-front`} style={{color: "#df1529"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Enterprise Analytics with Tableau</h3>
          </a>
          <p>Leverage Tableau for powerful data visualization that drives smarter business decisions and strategic insights.</p>
        </div>
      </div>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Power BI
            </h3>
          </a>
          <p>Turn data into actionable insights with Power BI’s interactive dashboards and reports, enhancing your decision-making process.</p>
        </div>
      </div>

      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="600">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-clock`} style={{color: "#f3268c"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Technology Services</h3>
          </a>
          <p>Optimize your IT systems with our technology solutions, designed to improve efficiency and operational effectiveness.</p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="600">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-clock`} style={{color: "#f3268c"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Consulting
            </h3>
          </a>
          <p>Receive strategic guidance to navigate challenges and drive business growth with our consulting services.
          </p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="600">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-clock`} style={{color: "#f3268c"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Business Processing</h3>
          </a>
          <p>Enhance your business operations with expert consulting to streamline processes and boost productivity.</p>
        </div>
      </div>
      {/* <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Offshore Development Center

            </h3>
          </a>
          <p>Access skilled talent and cost-effective solutions through our offshore development center for your technology projects.
          </p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Staff Augmentation

            </h3>
          </a>
          <p>Strengthen your team with additional expertise to meet project demands efficiently through our staff augmentation services.
          </p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Application Management Services (AMS)

            </h3>
          </a>
          <p>Maintain and optimize your SAP applications with our comprehensive management services for enhanced performance.
          </p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Migration Services
            </h3>
          </a>
          <p>Ensure a smooth transition with expert migration services, facilitating efficient data migration and system integration.</p>
        </div>
      </div> */}
  </div>

</div>

</section>
<section id="features" className={`${styles.features} ${styles.section}`}>
<div className={`${styles.sectionTitle} container`} data-aos="fade-up">
  <h2>Why Choose Us?</h2>
  <p>Why Partner with Us for SAP Consulting?</p>
</div>

<div className={`container`}>

  <ul className={`nav ${styles["nav-tabs"]} row  d-flex`} data-aos="fade-up" data-aos-delay="100">
    <li className={`nav-item col-3`} onClick={()=>{setfeatures2(false);setfeatures3(false);setfeatures4(false);setfeatures1(true);}}>
      <a className={`${styles["nav-link"]} ${features1?styles.active:''} show`} data-bs-toggle="tab" data-bs-target="#features-tab-1">
        <i className={`bi bi-cloud-download`}></i>
        <h4 className={`d-none d-lg-block`}>SAP S/4 HANA Cloud Integration</h4>
      </a>
    </li>
    <li className={`nav-item col-3`} onClick={()=>{setfeatures1(false);setfeatures3(false);setfeatures4(false);setfeatures2(true);}}>
      <a className={`${styles["nav-link"]} ${features2?styles.active:''}`} data-bs-toggle="tab" data-bs-target="#features-tab-2">
        <i className={`bi bi-award`}></i>
        <h4 className={`d-none d-lg-block`}> Industry-Specific Best Practices
        </h4>
      </a>
    </li>
    <li className={`nav-item col-3`} onClick={()=>{setfeatures1(false);setfeatures2(false);setfeatures4(false);setfeatures3(true);}}>
      <a className={`${styles["nav-link"]} ${features3?styles.active:''}`} data-bs-toggle="tab" data-bs-target="#features-tab-3">
        <i className={`bi bi-robot`}></i>
        <h4 className={`d-none d-lg-block`}> Cutting-Edge Technology</h4>
      </a>
    </li>
    <li className={`nav-item col-3`} onClick={()=>{setfeatures1(false);setfeatures3(false);setfeatures2(false);setfeatures4(true);}}>
      <a className={`${styles["nav-link"]} ${features4?styles.active:''}`} data-bs-toggle="tab" data-bs-target="#features-tab-4">
        <i className={`bi bi-patch-check`}></i>
        <h4 className={`d-none d-lg-block`}>Proven Expertise</h4>
      </a>
    </li>
  </ul>

  <div className={styles["tab-content"]} data-aos="fade-up" data-aos-delay="200">

 { features1 &&  <div className={`${styles["tab-pane"]} fade active show`} id="features-tab-1" >
      <div className={`row`}>
        <div className={`col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0`}>
          <h3>Transform Your Business with Expert SAP Consulting</h3>
          <p className={`fst-italic`}>
          Unlock the full potential of your enterprise with SAP S/4 HANA Cloud. Our solutions provide seamless integration that delivers real-time insights and boosts operational efficiency. Designed to adapt to evolving business needs, our ERP system supports strategic growth, enabling companies to manage business changes swiftly and leverage advanced analytics for smarter decision-making.

          </p>
          <ul>
            <li><i className={`bi bi-check2-all`}></i>
              <span>Real-Time Insights: Gain immediate visibility into business operations.</span>
            </li>
            <li><i className={`bi bi-check2-all`}></i> <span>Efficient Integration: Align effortlessly with existing systems.</span></li>
            <li><i className={`bi bi-check2-all`}></i> <span>Scalable Solutions: Support future growth with adaptable technology.</span></li>
          </ul>
          <p>
          Choosing the right partner for your SAP consulting needs is crucial for achieving your business goals. At Aura InfoTech, we stand out with our commitment to excellence and tailored solutions designed to drive growth and efficiency. Here’s why partnering with us will benefit your organization.
          </p>
        </div>
        <div className={`col-lg-6 order-1 order-lg-2 text-center`}>
          <img src="./img/working-1.jpg" alt="" className={`img-fluid`}/>
        </div>
      </div>
    </div>}
    {features2 && <div className={`${styles["tab-pane"]} fade show`} id="features-tab-2" >
            <div className={`row`}>
              <div className={`col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0`}>
                <h3>Industry-Specific Best Practices</h3>
                <p>
                Our industry-specific solutions are pre-configured with best practices tailored to your sector, ensuring optimal performance and efficiency. Whether your focus is on manufacturing, retail, consumer products, industrial products, or another industry, we provide solutions designed to meet your unique needs and support your strategic growth objectives.

                </p>
                {/* <p className={`fst-italic`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p> */}
                <ul>
                  <li><i className={`bi bi-check2-all`}></i> <span>Pre-Configured Solutions: Best practices for various industries.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Operational Efficiency: Optimized performance for different sectors.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Custom Fit: Solutions tailored to your industry’s needs.</span></li>
                  {/* <li><i className={`bi bi-check2-all`}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li> */}
                </ul>
              </div>
              <div className={`col-lg-6 order-1 order-lg-2 text-center`}>
                <img src="./img/working-2.jpg" alt="" className={`img-fluid`}/>
              </div>
            </div>
          </div>}

         {features3 && <div className={`${styles["tab-pane"]} fade show`} id="features-tab-3" >
            <div className={`row`}>
              <div className={`col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0`}>
                <h3>Advanced Technology</h3>
                <p>
                Stay competitive with our advanced technology solutions, including AI, machine learning, and data analytics. These tools are integrated into your business strategy to drive innovation and enhance efficiency. Embrace cutting-edge technology that provides predictive insights and automates processes, keeping your business at the forefront of industry advancements.

                </p>
                <ul>
                  <li><i className={`bi bi-check2-all`}></i> <span>AI Integration: Enhance decision-making with artificial intelligence.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Machine Learning: Automate processes and improve accuracy.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Data Analytics: Gain predictive insights and optimize strategies.</span></li>
                </ul>
                {/* <p className={`fst-italic`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p> */}
              </div>
              <div className={`col-lg-6 order-1 order-lg-2 text-center`}>
                <img src="./img/working-3.jpg" alt="" className={`img-fluid`}/>
              </div>
            </div>
          </div>}

          {features4 && <div className={`${styles["tab-pane"]} fade show`} id="features-tab-4" >
            <div className={`row`}>
              <div className={`col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0`}>
                <h3>Proven Expertise in SAP Solutions</h3>
                <p>
                With over 15 years of experience in SAP consulting, we bring deep expertise to every project. Our track record includes successful SAP S/4 HANA implementations, cloud solutions, and migration services. We have served a wide range of industries and countries, consistently delivering high-value outcomes and strategic benefits to our clients.
                </p>
                {/* <p className={`fst-italic`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p> */}
                <ul>
                  <li><i className={`bi bi-check2-all`}></i> <span>Years of Experience: 15+ years in SAP consulting and end-to-end implementation.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Industries Served: Manufacturing, Retail, Consumer Products, Industrial Products, and others.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Countries Served: Extensive international experience with global market implementations.</span></li>
                  <li><i className={`bi bi-check2-all`}></i> <span>Client Success Stories: Proven results in achieving significant improvements and ROI.</span></li>
                </ul>
              </div>
              <div className={`col-lg-6 order-1 order-lg-2 text-center`}>
                <img src="./img/working-4.jpg" alt="" className={`img-fluid`}/>
              </div>
            </div>
          </div>}
  </div>

</div>

</section>

  
{/* <section id="portfolio" className={`${styles["portfolio"]} ${styles.section}`}>


<div className={`container ${styles["section-title"]}`} data-aos="fade-up">
  <h2>Portfolio</h2>
  <p>What we&#39;ve done</p>
</div>
<div className={`container`}>

  <div className={`isotope-layout`} data-default-filter="*" data-layout="masonry" data-sort="original-order">

    <ul className={`${styles["portfolio-filters"]} isotope-filters`} data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" className={styles["filter-active"]}>All</li>
      <li data-filter=".filter-app">App</li>
      <li data-filter=".filter-product">Card</li>
      <li data-filter=".filter-branding">Web</li>
    </ul>

    <div className={`row gy-4 isotope-container`} data-aos="fade-up" data-aos-delay="200">

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-1.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>
      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-2.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-3.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-4.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-5.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-6.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-7.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-8.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-9.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

    </div>

  </div>

</div>

</section> */}
 <section id="testimonials" className={`${styles.testimonials} ${styles.section}`}>
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>
      <CCarousel controls >
  <CCarouselItem style={{maxHeight:"600px"}} >
    <div className={`d-flex row-lg-6 row-md-12 align-items-center `}>
  <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-1.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Pricewaterhouse Coopers</h3>
                <h4>Senior Manager</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-2.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Cognizant Technology Solutions</h3>
                <h4>Functional Architect</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>
         

            </div>
  </CCarouselItem>
  <CCarouselItem style={{maxHeight:"600px"}}>
    <div className={`d-flex row-lg-6 row-md-12 align-items-center`}>
    <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-3.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Bristlecone India Ltd.</h3>
                <h4>Lead Consultant</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-4.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>ASM Technologies Pvt. Ltd</h3>
                <h4>Consultant</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

            </div>
  </CCarouselItem>
</CCarousel>

    </section>
    {/* <section id="pricing" className={`${styles.pricing} ${styles.section}`}>

    
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Pricing</h2>
        <p>What they are saying about us</p>
      </div>

      <div className={`container`}>

        <div className={`row gy-3`}>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles["pricing-item"]}>
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className={styles.na}>Pharetra massa</li>
                <li className={styles.na}>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="200">
            <div className={`${styles["pricing-item"]} ${styles["featured"]}`}>
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className={styles.na}>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="400">
            <div className={styles["pricing-item"]}>
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="400">
            <div className={styles["pricing-item"]}>
              <span className={styles.advanced}>Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section> */}
    
    {/* <section id="faq" className={`${styles.faq} ${styles.section}`}>
      
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className={`container`} data-aos="fade-up">
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={styles["custom-accordion"]} id="accordion-faq">
              <div className={styles["accordion-item"]}>
                <h2 className={`mb-0`}>
                  <button className={`btn ${styles["btn-link"]} ${!faq1?'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-1" onClick={()=>{setfaq1(!faq1)}}>
                    How to download and register?
                  </button>
                </h2>

                <div id="collapse-faq-1" className={`collapse ${faq1?'show':''}`} aria-labelledby="headingOne" data-parent="#accordion-faq">
                  <div className={styles["accordion-body"]}>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean.
                  </div>
                </div>
              </div>
              

              <div className={[styles["accordion-item"]]}>
                <h2 className={`mb-0`}>
                  <button className={`btn ${styles["btn-link"]} ${!faq2?'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-2" onClick={()=>{setfaq2(!faq2)}}>
                How to create your paypal account?
              </button>
            </h2>
            <div id=" collapse-faq-2" className={`collapse ${faq2?'show':''}`} aria-labelledby="headingTwo" data-parent="#accordion-faq">
                    <div className={styles["accordion-body"]}>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic country, in
                      which roasted parts of sentences fly into your mouth.
                    </div>
              </div>
            </div>
            

            <div className={styles["accordion-item"]}>
              <h2 className={`mb-0`}>
                <button className={`btn ${styles["btn-link"]} ${!faq3?'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-3" onClick={()=>{setfaq3(!faq3)}}>
                  How to link your paypal and bank account?
                </button>
              </h2>

              <div id="collapse-faq-3" className={`collapse ${faq3?'show':''}`} aria-labelledby="headingThree" data-parent="#accordion-faq">
                <div className={styles["accordion-body"]}>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the subline
                  of her own road, the Line Lane. Pityful a rethoric question ran
                  over her cheek, then she continued her way.
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>
      </div>
      
    </section> */}
    <section id="team" className={`${styles.team} ${styles.section}`}>

      
      <div className={`container ${styles["section-title"]}` }data-aos="fade-up">
        <h2>Team</h2>
        <p>Our Hardworking Team</p>
      </div>
      <div className={`container`}>

        <div className={`row gy-4`}>

          <div className={`col-lg-4 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-1.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  {/* <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a> */}
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Lakshmanan Cida Rajan</h4>
                <span>President & CEO</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="200">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-2.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  {/* <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a> */}
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Poongunran Subramanian</h4>
                <span>MD & COO</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="300">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-3.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  {/* <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a> */}
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Sanjay Poongunran</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          

        </div>

      </div>

    </section>
    {/* <section id="recent-posts" className={`${styles["recent-posts"]} ${styles.section}`}>

      
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Recent Posts</h2>
        <p>Recent Blog Posts<br/></p>
      </div>

      <div className={`container`}>

        <div className={`row gy-4`}>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-1.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={styles["post-category"]}>Politics</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={`post-author`}>Maria Doe</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="200">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-2.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={`post-category`}>Sports</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author-2.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={styles["post-author"]}>Allisa Mayer</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="300">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-3.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={styles["post-category"]}>Entertainment</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author-3.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={styles["post-author"]}>Mark Dower</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

        </div>

      </div>

    </section> */}
    <section id="contact" className={`${styles.contact} ${styles.section}`} style={{marginTop:"100px"}}>

      
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
            <input type="text" name="name" className={`form-control`} placeholder="Your Name" required=""/>
          </div>

          <div className={`col-md-6 `}>
            <input type="email" className={`form-control`} name="email" placeholder="Your Email" required=""/>
          </div>

          <div className={`col-md-12`}>
            <input type="text" className={`form-control`} name="subject" placeholder="Subject" required=""/>
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
    
    </main>
    <footer id="footer" className={`${styles.footer} ${styles["dark-background"]}`}>
    <div className={`container`}>
      <div className={`d-flex align-items-center mx-auto justify-content-center`} > 
    <img src="./img/auraLogo.png" alt=""/>
      <h3 className={`sitename`}>Aura InfoTech</h3>
      </div>
      {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
      {/* <div className={`${styles["social-links"]} d-flex justify-content-center`}>
        <a href=""><i className={`bi bi-twitter-x`}></i></a>
        <a href=""><i className={`bi bi-facebook`}></i></a>
        <a href=""><i className={`bi bi-instagram`}></i></a>
        <a href=""><i className={`bi bi-skype`}></i></a>
        <a href=""><i className={`bi bi-linkedin`}></i></a>
      </div> */}
      <div className={`container`}>
        <div className={styles.copyright}>
          <span>Copyright</span> <strong className={`px-1 sitename`}>Aura InfoTech</strong> <span>All Rights Reserved</span>
        </div>
        {/* <div className={styles.credits}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </div>
  </footer>
  <a href="#" id="scroll-top" className={`${styles["scroll-top"]} d-flex align-items-center justify-content-center`}><i className={`bi bi-arrow-up-short`}></i></a>
        </div>
    
    </div>
  )
}

export default First