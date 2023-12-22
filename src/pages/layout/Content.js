import React from 'react'
import Intro from '@/compnents/main/intro/Intro'
import Contact from '@/compnents/main/Contact/Contact'
import Gallery from '@/compnents/main/gallery/Gallery'
import Location from '@/compnents/main/location/location'
import Calendar from '@/compnents/main/calendar/calendar'
import Insa from '@/compnents/main/Insa/Insa'
import LocationV2 from '@/compnents/main/location/LocationV2'
import Account from '@/compnents/main/account/Account'

const Content = () => {

    return(
        <>
            <Intro/>
            <Contact/>
            <Gallery/>
            <LocationV2/>
            <Calendar/>
            <Account/>
            {/*아래꺼는 안쓸예정*/}
            {/*<Location/>*/}
            {/*<Insa/>*/}

        </>
    )
}

export default Content;