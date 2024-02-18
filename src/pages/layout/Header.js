import React, {Component, useContext, useMemo, useState, useTransition} from 'react'
import {useTranslation} from 'react-i18next'
import {I18nContext} from "@/compnents/common/I18nContext";
import moment from "moment/moment";

const Header = () => {

    const [ testBtn, setTestBtn ] = useState(1);
    const { locale, changeLocale } = useContext(I18nContext);
    const { t, i18n } = useTranslation(["menu"]);
    const [isPending, startTransition] = useTransition();

    const nextLanguage = useMemo(() => (locale === 'ja' ? 'ko' : 'ja'), [locale]);

    const btnEvent = async ( langType ) => {
        changeLocale(langType)
        moment.locale(langType);
        console.log(langType)
        await i18n.changeLanguage(langType);
    }
    // const navigate = useNavigate();
    const fnNavi = ( e ) => {
        // navigate(`/${e.target.name}` )

    }
    return(

        <>
            {/*메인 헤더영역*/}
            <div data-v-4de6baaa="" data-v-227354f0="" className="main">
                <img src="assets/images/img/free-icon-japan-6595897.png"  onClick={()=>btnEvent("ja")} width={50}/>
                <img src="assets/images/img/free-icon-south-korea-317314.png"  onClick={()=>btnEvent("ko")} width={50}/>
                <div data-v-4de6baaa="" className="header">
                    <img data-v-4de6baaa="" src="./assets/images/fixedIMG/main/jpeg-optimizer_36_MKH01571_2.jpg" width={'90%'}  className="img"/>
                    <div style={{float :'right'}}>
                        {/*<button value={"ja"} onClick={btnEvent}>일본</button>*/}
                        {/*<button value={"ko"} onClick={btnEvent}>한국</button>*/}
                    </div>
                    <div data-v-4de6baaa="" className="date">

                    </div>
                    <div data-v-4de6baaa="" className="names">
                        <div data-v-4de6baaa="">
                            <span data-v-4de6baaa="" name="김승현" phone="010-1234-1234">{t('김 승 현')}</span>
                            <span data-v-4de6baaa="" className="and"></span>
                            <span data-v-4de6baaa="" name="리코" phone="010-1234-1234">{t('리 코')}</span>
                        </div>
                    </div>
                    <div data-v-4de6baaa="" className="title">
                        {t('결 혼 합 니 다.')}
                    </div>

                    <div data-v-4de6baaa="" className="time">2024. 04. 06. SAT AM 11:00</div>
                    <div data-v-4de6baaa="" className="location">{t('베뉴지')} B1 {t('마리아 칼라스홀')}</div>
                </div>
            </div>
            {/*메인 헤더영역 끝*/}
        </>
    )

}

export default Header;