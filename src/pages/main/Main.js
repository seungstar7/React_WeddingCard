import React, {useContext, useEffect, useMemo, useState, useTransition} from 'react'
import Header from '@/pages/layout/Header'
import Content from '@/pages/layout/Content'
import {I18nContext} from '@/compnents/common/I18nContext'
import moment from "moment";
import {useTranslation} from 'react-i18next'
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {

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
            <div style={{float :'right'}}>
                <img src="assets/images/img/free-icon-japan-6595897.png"  onClick={()=>btnEvent("ja")} width={50}/>
                <img src="assets/images/img/free-icon-south-korea-317314.png"  onClick={()=>btnEvent("ko")} width={50}/>
                {/*<button value={"ja"} onClick={btnEvent}>일본</button>*/}
                {/*<button value={"ko"} onClick={btnEvent}>한국</button>*/}
            </div>
            <Header/>
            <Content/>
        </>
    )
}
export default Main;
