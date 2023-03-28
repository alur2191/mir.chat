import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-wrapper-content">
                                <h1>Сообщество для иммигрантов в США</h1>
                                <p>Присоединяйтесь, общайтесь, и познавайте Америку вместе с нами!</p>
                                <Link href="/#groups">
                                    <a className="default-btn">Список Сообществ</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="banner-wrapper-image">
                                {/*<div className="banner-img">
                                    <img src="/images/banner/banner-img1.png" alt="banner-img" />
                                </div>*/}
                                <div className="banner-img">
                                    <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} initiallyVisible={true}>
                                        <img src="/images/banner/banner-img2.png" alt="banner-img" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape15">
                    <img src="/images/shape/shape18.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;