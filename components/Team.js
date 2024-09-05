import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Team({ className, heading, subHeading, btnText, btnLink }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section id="team" className={`${className} ${styles.team} ${styles.section}`}>
                <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
                    <h2>Team</h2>
                    <p>Our Hardworking Team</p>
                </div>
                <div className={`container`}>
                    <div className={`row gy-4`}>
                        <div className={`col-lg-4 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles["team-member"]}>
                                <div className={styles["member-img"]}>
                                    <img src="./img/team/team-1.jpg" className={`img-fluid`} alt="" />
                                    <div className={styles.social}>
                                        {/* <a href=""><i className={`bi bi-twitter-x`}></i></a>
      <a href=""><i className={`bi bi-facebook`}></i></a>
      <a href=""><i className={`bi bi-instagram`}></i></a> */}
                                        <a href="" target='_blank'><i className={`bi bi-linkedin`}></i></a>
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
                                    <img src="./img/team/team-2.jpg" className={`img-fluid`} alt="" />
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
                                    <img src="./img/team/team-3.jpg" className={`img-fluid`} alt="" />
                                    <div className={styles.social}>
                                        {/* <a href=""><i className={`bi bi-twitter-x`}></i></a>
      <a href=""><i className={`bi bi-facebook`}></i></a>
      <a href=""><i className={`bi bi-instagram`}></i></a> */}
                                        <a href="https://www.linkedin.com/in/sanjay-sp" target='_blank'><i className={`bi bi-linkedin`}></i></a>
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
        </>
    )
}

export default Team