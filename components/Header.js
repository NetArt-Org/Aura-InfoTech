import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [headClicked, setHeadClicked] = useState('');

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const dropdownItems = [
        { href: '/sap-solutions/', label: 'SAP Solutions' },
        { href: '/sap-services/', label: 'SAP Services' },
        { href: '/cloud/', label: 'Cloud' },
        { href: '/enterprise-analytics/', label: 'Enterprise Analytics with Tableau' },
        { href: '/power-bi/', label: 'Power BI' },
        { href: '/technology-services/', label: 'Technology Services' },
        { href: '/business-processing/', label: 'Business Processing' },
        { href: '/consulting/', label: 'Consulting' }
    ];

    return (
        <>
            {/* Desktop Header */}
            <header id="header" className={`${styles.header} d-flex align-items-center fixed-top d-none d-xl-flex`}>
                <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>
                    <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
                        <img src="./img/auraLogo.png" alt="Aura InfoTech Logo" />
                        <h1 className="sitename">Aura InfoTech</h1>
                    </Link>

                    <nav id="navmenu" className={styles.navmenu}>
                        <ul>
                            <li><Link href="/" className={headClicked === 'home' ? styles.active : styles.hov} onClick={() => setHeadClicked('home')}>Home</Link></li>
                            <li><Link href="/about-us/" className={headClicked === 'about' ? styles.active : styles.hov} onClick={() => setHeadClicked('about')}>About Us</Link></li>
                            <li className={`${styles.dropdown} ${headClicked === 'services' ? styles.active : ''}`} onClick={() => setHeadClicked('services')}>
                                <a href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    {dropdownItems.map((item) => (
                                        <li key={item.href}>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li><Link href="/contact-us/" className={headClicked === 'contact' ? styles.active : styles.hov} onClick={() => setHeadClicked('contact')}>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header id="header-mobile" className={`${styles.header} d-flex align-items-center fixed-top d-xl-none`}>
                <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>
                    <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
                        <img src="./img/auraLogo.png" alt="Aura InfoTech Logo" />
                        <h1 className="sitename">Aura InfoTech</h1>
                    </Link>

                    <button className={`${styles['mobile-nav-toggle']} d-xl-none`} onClick={handleMenuToggle}>
                        <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>

                    <div className={`${styles['mobile-nav']} ${isMobileMenuOpen ? styles['mobile-nav-active'] : ''}`}>
                        <div className={`${styles.logo} d-flex align-items-center justify-content-center mb-4`}>
                            <img src="./img/auraLogo.png" alt="Aura InfoTech Logo" />
                            <h1 className="sitename">Aura InfoTech</h1>
                        </div>
                        <nav id="navmenu" className={styles.navmenu}>
                            <ul>
                                <li><Link href="/" className={headClicked === 'home' ? styles.active : styles.hov} onClick={() => { setHeadClicked('home'); handleMenuToggle(); }}>Home</Link></li>
                                <li><Link href="/about-us/" className={headClicked === 'about' ? styles.active : styles.hov} onClick={() => { setHeadClicked('about'); handleMenuToggle(); }}>About Us</Link></li>
                                <li className={`${styles.dropdown} ${headClicked === 'services' ? styles.active : ''}`} onClick={() => { setHeadClicked('services'); handleMenuToggle(); }}>
                                    <a href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        {dropdownItems.map((item) => (
                                            <li key={item.href}>
                                                <a href={item.href}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li><Link href="/contact-us/" className={headClicked === 'contact' ? styles.active : styles.hov} onClick={() => { setHeadClicked('contact'); handleMenuToggle(); }}>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
