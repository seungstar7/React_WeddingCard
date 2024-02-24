import React, {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import "/assets/css/style.css";
import "/assets/css/public.css";
import "/assets/css/button.css";
import Layout from '@/pages/layout/Layout'
import Main from '@/pages/main/Main'
import Intro from '@/pages/intro/Intro'
import {MenuContext} from '@/compnents/common/MenuContext'
import {I18nContext} from '@/compnents/common/I18nContext'
import "./i18n/index"
import {useTranslation} from 'react-i18next'
import {remote} from '@/remote'

function App() {
    const [ menu , setMenu ] = useState('intr');
    const { t, i18n } = useTranslation(["menu"]);
    const changeMenu = useCallback(
        (menu) => {
            setMenu(menu);
        },
        [setMenu]
    );

    useEffect(()=>{
        // console.log(remote())
    },[])

    const [locale, setLocale] = useState('ja');
    const changeLocale = useCallback(
        (locale) => {
            setLocale(locale);
        },
        [setLocale]
    );

    // 콘솔에 현재 언어 출력
    useEffect(()=>{
        let userBrowserLang = navigator.language;
        //let userBrowserLang = "ja";
        if(userBrowserLang==="ja"){
            let result = changeLang;
            console.log(result())
        }
    },[])
    const changeLang = async () => {
        await i18n.changeLanguage('ja');
        return true
    }

    return (
        <>



        <MenuContext.Provider value={{menu, changeMenu}}>
            <I18nContext.Provider value={{ locale, changeLocale }}>
            <Layout childProps={menu === 'intro' ? <Intro/> : <Main/>}/>
                {/*<LanguageButton />*/}
            </I18nContext.Provider>
        </MenuContext.Provider>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<ScrollComponent/>} ></Route>*/}
            {/*        <Route path="/main" element={<main/>} ></Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            {/*<ScrollComponent/>*/}

            {/*<main/>*/}
        </>
    );
}

const LanguageButton = () => {
    // useContext를 사용하여 I18nContext의 값을 가져옴
    const { locale, changeLocale } = useContext(I18nContext);
    //rgb(223, 178, 161);

    // 콘솔에 현재 언어 출력
    useEffect(() => {
        console.log('현재 언어:', locale);
    }, [locale]);

    const nextLanguage = useMemo(() => (locale === 'en' ? 'ko' : 'en'), [locale]);

    // 버튼 클릭시 언어 변경
    return (
        <button onClick={() => changeLocale(nextLanguage)}>{nextLanguage}</button>
    );
};
export default App;
