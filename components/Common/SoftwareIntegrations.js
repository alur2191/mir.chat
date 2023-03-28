import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrations = () => {
    return (
        <>
            <div className="software-integrations-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content">
                                <h2>Не нашли группу в своём штате, или городе?</h2>
                                <p>Мы намерены создать группы в самых </p>
                                <p>Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/bg-shape2.png" alt="bg-shape" />

                                    <ul>
                                        <li>
                                            <img src="/images/groups/logo-seattle.png" className="seattles" alt="seattles" />
                                        </li>
                                        <li> 
                                            <img src="/images/groups/logo-sacramento.png" className="sacramento" alt="sacramento" />
                                        </li>
                                        <li>
                                            <img src="/images/groups/logo-philadelphia.png" className="philadelphia" alt="philadelphia" />
                                        </li>
                                        <li>
                                            <img src="/images/groups/logo-chicago.png" className="chicago" alt="chicago" />
                                        </li>
                                        <li>
                                            <img src="/images/groups/logo-miami.png" className="miami" alt="miami" />
                                        </li>
                                        <li>
                                            <img src="/images/groups/logo-usa.png" className="usa" alt="usa" />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SoftwareIntegrations;