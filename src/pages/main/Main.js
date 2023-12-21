import React, {useContext, useEffect, useMemo, useState} from 'react'
import Header from '@/pages/layout/Header'
import Content from '@/pages/layout/Content'
import {I18nContext} from '@/compnents/common/I18nContext'
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {

    const [ testBtn, setTestBtn ] = useState(1);
    const { locale, changeLocale } = useContext(I18nContext);

    const nextLanguage = useMemo(() => (locale === 'en' ? 'ko' : 'en'), [locale]);

    // const navigate = useNavigate();
    const fnNavi = ( e ) => {
        // navigate(`/${e.target.name}` )

    }

    return(
        <>
            <button onClick={() => changeLocale(nextLanguage)}>{nextLanguage}</button>
            <Header/>
            <Content/>
        </>
    )
}
export default Main;
