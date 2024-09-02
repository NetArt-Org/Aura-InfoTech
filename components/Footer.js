import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@coreui/coreui/dist/css/coreui.min.css'
function Footer({className}) {
  
  return (
    <>
    <footer id="footer" className={`${className} ${styles.footer} ${styles["dark-background"]}`}>
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
    </>
  )
}

export default Footer