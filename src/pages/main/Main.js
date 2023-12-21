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

    const btnEvent = async (e) => {
        changeLocale(nextLanguage)
        moment.locale(nextLanguage);
        await i18n.changeLanguage(nextLanguage);
    }
    // const navigate = useNavigate();
    const fnNavi = ( e ) => {
        // navigate(`/${e.target.name}` )

    }

    return(
        <>
            <button onClick={btnEvent}>{nextLanguage}</button>
            <Header/>
            <Content/>
        </>
    )
}
export default Main;
