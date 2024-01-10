import React, {useContext, useEffect, useMemo, useState, useTransition} from 'react'
import Header from '@/pages/layout/Header'
import Content from '@/pages/layout/Content'
import {I18nContext} from '@/compnents/common/I18nContext'
import moment from "moment";
import {useTranslation} from 'react-i18next'
import Footer from '@/pages/layout/Footer'
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {


    return(
        <>
            <div data-v-227354f0="" className="template-basic ">

                <Header/>
                <Content/>
                <Footer/>
            </div>
        </>
    )
}
export default Main;
