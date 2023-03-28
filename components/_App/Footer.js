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
                                <Link href="/services">
                                    <a className="nav-link">Группы</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">О Нас</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/privacy-policy">
                                    <a className="nav-link">Бытовые Ресурсы</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/privacy-policy">
                                    <a className="nav-link">Дальнобойщики</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Обратная Связь</a>
                                </Link>
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