import React, {useCallback, useEffect, useRef, useState} from 'react';
import "/assets/css/style.css";
import "/assets/css/public.css";
import "/assets/css/button.css";
import ScrollComponent from '@/compnents/cardMain/ScrollComponent'
import CardMain from '@/compnents/cardMain/CardMain'
import Layout from '@/pages/layout/Layout'
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
    const [ menu , setMenu ] = useState('main');
    const menuDef = ( menuType ) => {
        setMenu(menuType);
    }

    return (
        <>
            <Layout childProps={menu == 'intro' ? <ScrollComponent menuDef={menuDef}/> : <CardMain/>}/>

            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<ScrollComponent/>} ></Route>*/}
            {/*        <Route path="/main" element={<CardMain/>} ></Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            {/*<ScrollComponent/>*/}
            {/*<CardMain/>*/}
        </>
    );
}
export default App;