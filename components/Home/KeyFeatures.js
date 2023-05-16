import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div id="resources" className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <h2>Полезные Ресурсы</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <a href="https://www.cdlhelp.app" style={{display:"flex", flexDirection: "column", alignItems:"center", textAlign: "center"}}>
                                    <div className="icon">
                                        <i className="ri-survey-line"></i>
                                    </div>
                                    <h3>Бытовые Ресурсы</h3>
                                    <p>Различные ресурсы и помощь с документами, работой, арендой, страховкой, и.т.д.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <a href="https://www.dmvhelp.app" style={{display:"flex", flexDirection: "column", alignItems:"center", textAlign: "center"}}>
                                    <div className="icon bg2">
                                        <i className="ri-car-line"></i>
                                    </div>
                                    <h3>Водительские Права</h3>
                                    <p>Мобильное приложение с тестами DMV с переводом на русский язык. Запуск в ближайшие недели...</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <a href="https://www.cdlhelp.app" style={{display:"flex", flexDirection: "column", alignItems:"center", textAlign: "center"}}>
                                    <div className="icon bg3">
                                        <i className="ri-truck-line"></i>
                                    </div>
                                    <h3>Дальнобойщики</h3>
                                    <p>Мобильное приложение стестами, работа, сообщество, и прочие ресрусы для дальнобойщиков в США</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;