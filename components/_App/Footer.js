// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const FooterStyleOne = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link href="/">
                            <a className="logo">
                                <Image src="/images/logo2.png" width={94} height={100} alt="logo" />
                            </a>
                        </Link>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#groups" className="nav-link">Группы</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">О Нас</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resources" className="nav-link">Ресурсы</a>
                            </li>
                        </ul>

                        {/*<p className="copyright">Copyright &copy; {currentYear} <strong>texap</strong>. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterStyleOne;