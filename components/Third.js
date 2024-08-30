import React, {useEffect,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'
import { CCarousel, CCarouselItem, CImage,CCarouselCaption} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

function Third({className}) {
    const [headClicked, setheadClicked] = useState('about')
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
      const headingStyle = {
        marginBottom: "30px",
        fontSize: window.innerWidth >= 768 ? "48px" : "20px", // Adjust based on your 'md' breakpoint
        fontWeight: "700",
      };
      const captionStyle= {
        marginBottom: window.innerWidth >= 768? "5%": "0",
        marginTop: window.innerWidth >= 768? "0": "10%"
      }
  return (
    <div className={className}>
        <div className={styles["index-page"]}>
            <main className={styles.main}>
            <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`} >
    <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>

      <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
         {/* Uncomment the line below if you also wish to use an image logo  */}
         <img src="./img/auraLogo.png" alt=""/>
        <h1 className={`sitename`}>Aura InfoTech</h1>
      </Link>

      <nav id="navmenu" className={styles.navmenu}>
        <ul>
          <li><Link href="/" className={headClicked==='home'?styles.active:styles.hov} onClick={()=>{setheadClicked('home')}} >Home</Link></li>
          <li><Link href="/about-us" className={headClicked==='about'?styles.active:'hov'} onClick={()=>{setheadClicked('about')}} >About Us</Link></li>
          {/* <li><Link href="/#services" className={headClicked==='services'?styles.active:''} onClick={()=>{setheadClicked('services')}}>Services</Link></li>
          <li><Link href="/#portfolio" className={headClicked==='portfolio'?styles.active:''} onClick={()=>{setheadClicked('portfolio')}}>Portfolio</Link></li>
          <li><Link href="/#team" className={headClicked==='team'?styles.active:''} onClick={()=>{setheadClicked('team')}}>Team</Link></li> */}
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
          <li><Link href="/contact-us" className={headClicked==='contact'?styles.active:'hov'} onClick={()=>{setheadClicked('contact')}} >Contact Us</Link></li>
        </ul>
        <i className={`${styles["mobile-nav-toggle"]} d-xl-none bi bi-list`}></i>
      </nav>

    </div>
  </header>
  <section>
  <div className={` ${styles.banner2}`}>
    <h2>About Us</h2>
    <p className={`d-block`} style={{maxWidth:"80%"}}>Accelerate your Digital Transformation and Reinvent your Business Model with AURA – your ASEAN / APAC Partner</p>
    <Link href="/about-us" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`} style={{textDecoration:"none"}}>Read More</Link>
  </div>
</section>
<section id="about" className={`${styles.about} ${styles.section}`}>


<div className={`${styles.sectionTitle} container`} data-aos="fade-up">
  <h2>Our Guiding Principle</h2>
  <p>EMPOWERING TRANSFORMATION
  </p>
</div>

<div className={`container`}>
  <div className={`row gy-4`}>

    <div className={`col-lg-6 ${styles.content}`} >
      <h3>Our Vision</h3>
      <p>We aspire to be the go-to partner for businesses navigating the complexities of the digital age. Our vision is to create a world where our cutting-edge solutions not only empower organizations to thrive but also enable them to lead with confidence in an ever-changing technological landscape.</p>
      <p>We envision a future where our collaboration drives sustainable growth, innovation, and excellence in every industry we serve.
      </p>
    </div>

    <div className={`col-lg-6`} >
      <h3>Our Mission</h3>
      <p>Our mission is to deliver innovative, high-quality, and reliable IT solutions that drive successful digital transformation for businesses. We are dedicated to providing exceptional service, fostering long-term partnerships, and making a positive impact on our clients' success.
      </p>
      <p>By combining our expertise with deep industry insights, we aim to help organizations reinvent their business models, achieve operational excellence, and unlock new opportunities for growth.
      </p>
      
    </div>

  </div>

</div>

</section>
<section id="services" className={`${styles.services} ${styles.section}`}>


<div className={`container ${styles["section-title"]}`} data-aos="fade-up">
  <h2>Our Core Values</h2>
  <p>Principles That Define Us</p>
</div>

<div className={`container`}>

<div className={`row gy-4`}>

  <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="100">
    <div className={`${styles["service-item"]}  position-relative`}>
      <div className={styles.icon}>
        <i className={`bi bi-cash-stack`} style={{color: "#0dcaf0"}}></i>
      </div>
      <a href="service-details.html" className={`stretched-link`}>
        <h3>Transparency & Integrity</h3>
      </a>
      <p>We uphold the highest standards of honesty and ethics, ensuring trust and credibility in every action and decision.
      </p>
    </div>
  </div>

  <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="200">
    <div className={`${styles["service-item"]} position-relative`}>
      <div className={styles.icon}>
        <i className={`bi bi-calendar4-week`} style={{color: "#fd7e14"}}></i>
      </div>
      <a href="service-details.html" className={`stretched-link`}>
        <h3>Teamwork & Winning</h3>
      </a>
      <p>Our success is driven by collaboration and a shared sense of purpose, enabling us to achieve outstanding results together.</p>
    </div>
  </div>

  <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="300">
    <div className={`${styles["service-item"]} position-relative`}>
      <div className={styles.icon}>
        <i className={`bi bi-chat-text`} style={{color: "#20c997"}}></i>
      </div>
      <a href="service-details.html" className={`stretched-link`}>
        <h3>Agility & Innovation</h3>
      </a>
      <p>We embrace change and encourage creativity, developing cutting-edge solutions that keep our clients ahead in a rapidly evolving market.
      </p>
    </div>
  </div>

  <div className={`col-lg-3 col-md-6`} data-aos="fade-up" data-aos-delay="400">
    <div className={`${styles["service-item"]} position-relative`}>
      <div className={styles.icon}>
        <i className={`bi bi-credit-card-2-front`} style={{color: "#df1529"}}></i>
      </div>
      <a href="service-details.html" className={`stretched-link`}>
        <h3>Customer-Centric Approach</h3>
      </a>
      <p>We prioritize our clients' needs and goals, delivering personalized solutions and services that drive meaningful outcomes and long-term success.
      </p>
    </div>
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
    <section id="testimonials" className={`${styles.testimonials} ${styles.section}`}>
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>
      <CCarousel controls >
  <CCarouselItem style={{maxHeight:"600px"}}>
    <div className={`d-flex row-lg-6 row-md-12 align-items-center`}>
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
        </div>
    </div>
  )
}

export default Third