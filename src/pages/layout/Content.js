import React, {useContext} from 'react'
import Intro from '@/compnents/main/intro/Intro'
import Contact from '@/compnents/main/Contact/Contact'
import Gallery from '@/compnents/main/gallery/Gallery'
import Location from '@/compnents/main/location/location'
import Calendar from '@/compnents/main/calendar/calendar'
import Insa from '@/compnents/main/Insa/Insa'
import LocationV2 from '@/compnents/main/location/LocationV2'
import Account from '@/compnents/main/account/Account'
import {I18nContext} from "@/compnents/common/I18nContext";
import Comment from "@/compnents/main/comment/Comment";

const Content = () => {
    const { locale, changeLocale } = useContext(I18nContext);

    return(
        <>
            <Comment/>
            {/*<Intro/>*/}
            {/*<Contact/>*/}
            {/*<Gallery/>*/}
            {/*<LocationV2/>*/}
            {/*<Calendar/> */}
            {/*<Account/>*/}
            {/*{locale==='ko' &&  <Account/>}*/}
            {/*아래꺼는 안쓸예정*/}
            {/*<Location/>*/}
            {/*<Insa/>*/}

        </>
    )
}

export default Content;