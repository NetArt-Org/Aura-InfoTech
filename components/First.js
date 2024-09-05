/**@format */
import React, { useState, useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
function First({ className }) {
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
  const captionStyle = {
    marginBottom: window.innerWidth >= 768 ? "5%" : "0",
    marginTop: window.innerWidth >= 768 ? "0" : "10%"
  }
  function changeCss() {
    var navElement = document.querySelector("header");
    // this.scrollY >500 ? navElement.style.boxShadow ="inset 0 0 0 300px rgba(0,0,0,0.5)" : navElement.style.boxShadow ="inset 0 0 0 300px rgba(0,0,0,0)";
    this.scrollY > 500 ? navElement.style.opacity = 0.94 : navElement.style.opacity = 1;
  }
  useEffect(() => {
    window.addEventListener("scroll", changeCss, false);


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
          <CCarousel controls indicators>
            <CCarouselItem style={{ maxHeight: "600px" }}>
              <CImage className={`d-block w-100`} src="./img/hero/hero1.jpg" alt="slide 1" />
              <CCarouselCaption className="d-block" >
                <h2 style={headingStyle}>Accelerate your Digital Transformation with SAP</h2>
                <p className="d-none d-md-block" style={{ maxWidth: "80%", animationDelay: "0.4s", margin: "0 auto 30px auto" }}>Empower your business with cutting-edge SAP solutions, driving agility, innovation, and growth in a rapidly changing landscape.</p>
                <Link href="/accelerate-your-digital-transformation" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>Read More</Link>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem style={{ maxHeight: "600px" }}>
              <CImage className={`d-block w-100`} src="./img/hero/hero2.png" alt="slide 2" />
              <CCarouselCaption className="d-block" >
                <h2 style={headingStyle}>Simplify your IT Landscape with Award-Winning ERP Solutions</h2>
                <p className="d-none d-md-block" style={{ maxWidth: "80%", animationDelay: "0.4s", margin: "0 auto 30px auto" }}>Streamline operations and reduce complexity with our industry-leading ERP systems, designed for efficiency and scalability.</p>
                <Link href="/accelerate-your-digital-transformation" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>Read More</Link>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem style={{ maxHeight: "600px" }}>
              <CImage className="d-block w-100" src="./img/hero/hero3.jpg" alt="slide 3" />
              <CCarouselCaption className="d-block" >
                <h2 style={headingStyle}>Stay Ahead with SAP APO</h2>
                <p className="d-none d-md-block" style={{ maxWidth: "80%", animationDelay: "0.4s", margin: "0 auto 30px auto" }}>Optimize your supply chain with SAP APO, ensuring precise planning and maintaining a competitive edge in the market.</p>
                <Link href="/stay-ahead-with-sap-apo" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>Read More</Link>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem style={{ maxHeight: "600px" }}>
              <CImage className="d-block w-100" src="./img/hero/hero4.png" alt="slide 4" />
              <CCarouselCaption className="d-block" style={captionStyle}>
                <h2 style={headingStyle}>GROW with SAP</h2>
                <p className="d-none d-md-block" style={{ maxWidth: "80%", animationDelay: "0.4s", margin: "0 auto 30px auto" }}>Unlock growth potential with SAP solutions tailored for small and medium businesses, enabling faster innovation and expansion.</p>
                <Link href="/grow-with-sap" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>Read More</Link>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem style={{ maxHeight: "600px" }}>
              <CImage className="d-block w-100" src="./img/hero/hero5.png" alt="slide 5" />
              <CCarouselCaption className="d-block" >
                <h2 style={headingStyle}>RISE with SAP</h2>
                <p className="d-none d-md-block" style={{ maxWidth: "80%", animationDelay: "0.4s", margin: "0 auto 0 auto" }}>Transition to the cloud seamlessly with RISE with SAP, empowering your existing systems with future-ready cloud capabilities.</p>
                <Link href="/rise-with-sap" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{ textDecoration: "none" }}>Read More</Link>
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
                <Link href="/sap-solutions">
                  <div className={`${styles["service-item"]}  position-relative`}>
                    <div className={styles.icon}>
                      {/* <i className={`bi bi-cash-stack`} style={{ color: "#0dcaf0" }}></i> */}
                      <img src="/img/sap-cloud.png"/>
                    </div>
                    {/* <Link href="/sap-solutions" className={`stretched-link`}> */}
                      <h3>SAP Solutions</h3>
                    <p>Transform your operations with SAP S/4 HANA Cloud, offering real-time insights and seamless integration to drive growth and efficiency.
                    </p>
                  </div>
                    </Link>
                </div>

                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="200">
                <Link href="/sap-services">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                    <img src="/img/sap-cloud.png"/>
                      {/* <i className={`bi bi-calendar4-week`} style={{ color: "#fd7e14" }}></i> */}
                    </div>
                      <h3>SAP Services</h3>
                    <p>Expert implementation and support tailored to your needs. Enhance your SAP systems with our comprehensive services.</p>
                  </div>
                  </Link>
                </div>
                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
                <Link href="/sap-business-one">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                    <img src="/img/sap-business-one.png"/>
                      {/* <i className={`bi bi-globe`} style={{ color: "#6610f2" }}></i> */}
                    </div>
                      <h3>SAP Business One
                      </h3>
                    <p>Turn data into actionable insights with Power BI’s interactive dashboards and reports, enhancing your decision-making process.</p>
                  </div>
                  </Link>
                </div>
                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="600">
                <Link href="/business-consulting-services">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                      <i className={`bi bi-people-fill`} style={{ color: "#f3268c" }}></i>
                    </div>
                      <h3>Business Consulting
                      </h3>
                    <p>Receive strategic guidance to navigate challenges and drive business growth with our consulting services.
                    </p>
                  </div>
                  </Link>
                </div>
                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="500">
                <Link href="/power-bi">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                      <i className={`bi bi-file-earmark-bar-graph`} style={{ color: "#6610f2" }}></i>
                    </div>
                      <h3>Power BI
                      </h3>
                    <p>Turn data into actionable insights with Power BI’s interactive dashboards and reports, enhancing your decision-making process.</p>
                  </div>
                  </Link>
                </div>
                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="300">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                      <i className={`bi bi-cloud`} style={{ color: "#20c997" }}></i>
                    </div>
                      <h3>Cloud</h3>
                    <p>Modernize your infrastructure with our scalable cloud solutions, designed to meet your evolving business requirements.</p>
                  </div>
                </div>

                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="400">
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                      <i className={`bi bi-bar-chart-fill`} style={{ color: "#df1529" }}></i>
                    </div>
                      <h3>Enterprise Analytics with Tableau</h3>
                    <p>Leverage Tableau for powerful data visualization that drives smarter business decisions and strategic insights.</p>
                  </div>
                </div>

                <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="600">
                  
                  <div className={`${styles["service-item"]} position-relative`}>
                    <div className={styles.icon}>
                      <i className={`bi bi-phone`} style={{ color: "#f3268c" }}></i>
                    </div>
                      <h3>Application Development</h3>
                    <p>Optimize your IT systems with our application development, designed to improve efficiency and operational effectiveness.</p>
                  </div>
                </div>

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
                <li className={`nav-item col-3`} onClick={() => { setfeatures2(false); setfeatures3(false); setfeatures4(false); setfeatures1(true); }}>
                  <a className={`${styles["nav-link"]} ${features1 ? styles.active : ''} show`} data-bs-toggle="tab" data-bs-target="#features-tab-1">
                    <i className={`bi bi-cloud-download`}></i>
                    <h4 className={`d-none d-lg-block`}>SAP S/4 HANA Cloud Integration</h4>
                  </a>
                </li>
                <li className={`nav-item col-3`} onClick={() => { setfeatures1(false); setfeatures3(false); setfeatures4(false); setfeatures2(true); }}>
                  <a className={`${styles["nav-link"]} ${features2 ? styles.active : ''}`} data-bs-toggle="tab" data-bs-target="#features-tab-2">
                    <i className={`bi bi-award`}></i>
                    <h4 className={`d-none d-lg-block`}> Industry-Specific Best Practices
                    </h4>
                  </a>
                </li>
                <li className={`nav-item col-3`} onClick={() => { setfeatures1(false); setfeatures2(false); setfeatures4(false); setfeatures3(true); }}>
                  <a className={`${styles["nav-link"]} ${features3 ? styles.active : ''}`} data-bs-toggle="tab" data-bs-target="#features-tab-3">
                    <i className={`bi bi-robot`}></i>
                    <h4 className={`d-none d-lg-block`}> Cutting-Edge Technology</h4>
                  </a>
                </li>
                <li className={`nav-item col-3`} onClick={() => { setfeatures1(false); setfeatures3(false); setfeatures2(false); setfeatures4(true); }}>
                  <a className={`${styles["nav-link"]} ${features4 ? styles.active : ''}`} data-bs-toggle="tab" data-bs-target="#features-tab-4">
                    <i className={`bi bi-patch-check`}></i>
                    <h4 className={`d-none d-lg-block`}>Proven Expertise</h4>
                  </a>
                </li>
              </ul>

              <div className={styles["tab-content"]} data-aos="fade-up" data-aos-delay="200">

                {features1 && <div className={`${styles["tab-pane"]} fade active show`} id="features-tab-1" >
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
                      <img src="./img/working-1.jpg" alt="" className={`img-fluid`} />
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
                      <img src="./img/working-2.jpg" alt="" className={`img-fluid`} />
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
                      <img src="./img/working-3.jpg" alt="" className={`img-fluid`} />
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
                      <img src="./img/working-4.jpg" alt="" className={`img-fluid`} />
                    </div>
                  </div>
                </div>}
              </div>

            </div>

          </section>

        </main>
      </div>

    </div>
  )
}

export default First