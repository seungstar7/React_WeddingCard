import React, {useContext, useEffect, useMemo, useState, useTransition} from 'react'
import Header from '@/pages/layout/Header'
import Content from '@/pages/layout/Content'
import {I18nContext} from '@/compnents/common/I18nContext'
import moment from "moment";
import {useTranslation} from 'react-i18next'
import Footer from '@/pages/layout/Footer'
import {Animator, batch, Fade, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, ZoomIn} from "react-scroll-motion";
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {
    const { locale, changeLocale } = useContext(I18nContext);
    const [ isChose , setIsChose ] = useState(false);
    const { t, i18n } = useTranslation(["menu"]);

    const nextLanguage = useMemo(() => (locale === 'ja' ? 'ko' : 'ja'), [locale]);




    const btnEvent = async ( langType ) => {
        changeLocale(langType)
        moment.locale(langType);
        await i18n.changeLanguage(langType);
        let element3 = document.querySelector('.header');
        let elementTop3 = window.pageYOffset + element3.getBoundingClientRect().top;
        setIsChose(true)
        window.scrollTo({top:elementTop3 - 30, behavior: 'smooth'})
    }

    return(
        <>
            <div data-v-227354f0="" className="template-basic ">
                <ScrollContainer>
                    {/* Page 1 */}
                    <ScrollPage>
                        <Animator animation={batch(Sticky(), Fade())}>
                            <img src="assets/images/img/free-icon-japan-6595897.png"  onClick={()=>btnEvent("ja")} width={50}/>
                            <img src="assets/images/img/free-icon-south-korea-317314.png"  onClick={()=>btnEvent("ko")} width={50}/>
                            {/*<img data-v-4de6baaa="" src="/assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>*/}
                            {/*<main/>*/}
                            {/*<div data-v-4de6baaa="" className="time">2028. 03. 18. SAT PM 1:00</div>*/}
                            {/*<div data-v-4de6baaa="" className="location">누리시아웨딩홀 6층</div>*/}
                        </Animator>
                    </ScrollPage>
                    <ScrollPage/>
                    <Header/>
                    <Content/>
                    <Footer/>
                </ScrollContainer>
                {/*<div className={"sc-container"}></div>*/}

                {/*{isChose &&*/}
                {/*    <>*/}
                {/*        <Header/>*/}
                {/*        <Content/>*/}
                {/*        <Footer/>*/}
                {/*    </>*/}
                {/*}*/}

            </div>

        </>
    )
}
export default Main;
