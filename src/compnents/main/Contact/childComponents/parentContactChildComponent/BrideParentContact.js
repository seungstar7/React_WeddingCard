import React from 'react'
import {useTranslation} from 'react-i18next'

const BrideParentContact = () => {
    const { t, i18n } = useTranslation(["menu"]);
    return(
        <>
            {/*신부측 혼주 영역 시작*/}
            <div data-v-0470861c="" data-v-4752b0dc="" className="parents-contact">
                <span data-v-0470861c="" className="title">{t("")}신부측 혼주</span>
                <div data-v-0470861c="" father="[object Object]" mother="[object Object]"
                     className="parents-wrap">
                    <div data-v-39c2c16b="" data-v-0470861c="" className="parent">
                        <div data-v-39c2c16b="" className="name">
                            <div data-v-39c2c16b="" className="type">{t("아버지")}</div>
                            <div data-v-39c2c16b="" className="text">{t("리코아빠")}</div>
                        </div>
                        <div data-v-39c2c16b="" className="contact">
                            <div data-v-39c2c16b="" className="icons">
                                <a data-v-39c2c16b="" href="tel:010-1234-1234">
                                    <svg data-v-39c2c16b="" aria-hidden="true" focusable="false"
                                         data-prefix="fas" data-icon="phone" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-phone fa-w-16">
                                        <path data-v-39c2c16b="" fill="currentColor"
                                              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                              className=""></path>
                                    </svg>
                                </a>
                                <a data-v-39c2c16b="" href="sms:010-1234-1234">
                                    <svg data-v-39c2c16b="" aria-hidden="true" focusable="false"
                                         data-prefix="fas" data-icon="sms" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-sms fa-w-16">
                                        <path data-v-39c2c16b="" fill="currentColor"
                                              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"
                                              className=""></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-v-39c2c16b="" data-v-0470861c="" className="parent">
                        <div data-v-39c2c16b="" className="name">
                            <div data-v-39c2c16b="" className="type">
                                {t("어머니")}
                            </div>
                            <div data-v-39c2c16b="" className="text">{t("리코엄마")}</div>
                        </div>
                        <div data-v-39c2c16b="" className="contact">
                            <div data-v-39c2c16b="" className="icons">
                                <a data-v-39c2c16b="" href="tel:010-1234-1234">
                                    <svg data-v-39c2c16b="" aria-hidden="true" focusable="false"
                                         data-prefix="fas" data-icon="phone" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-phone fa-w-16">
                                        <path data-v-39c2c16b="" fill="currentColor"
                                              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                              className=""></path>
                                    </svg>
                                </a>
                                <a data-v-39c2c16b="" href="sms:010-1234-1234">
                                    <svg data-v-39c2c16b="" aria-hidden="true" focusable="false"
                                         data-prefix="fas" data-icon="sms" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-sms fa-w-16">
                                        <path data-v-39c2c16b="" fill="currentColor"
                                              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"
                                              className=""></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*신부측 혼주 영역 끝*/}

        </>
    )
}
export default BrideParentContact;