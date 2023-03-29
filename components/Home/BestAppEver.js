import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
        <>
            <div id="about" className="overview-area">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-content">
                                <h2>О Нашем Сообществе</h2>
                                <p>Сообщество Mir.chat создано для постройки дружелюбнего диалога между иммигрантами и обмена полезной ифнормацией.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-user-location-line"></i>
                                        </div>
                                        <h3>Локальные Группы</h3>
                                        <p>Группы Телеграм в различных штатах и городах США.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-thumb-up-line"></i>
                                        </div>
                                        <h3>Полезные Ресурсы</h3>
                                        <p>Регулярно пополняемый сборник полезных ресурсов для иммигрантов в США.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-eye-2-line"></i>
                                        </div>
                                        <h3>Минимум Рекламы</h3>
                                        <p>Мы нацелены содержать группы с минимальным количеством коммерческой рекламы.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-image bg1">
                                <img src="/images/overview1.jpg" alt="overview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestAppEver;