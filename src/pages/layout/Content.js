import React from 'react'
import Intro from '@/compnents/cardMain/Contact/intro/Intro'
import Contact from '@/compnents/cardMain/Contact/Contact'
import Gallery from '@/compnents/cardMain/Contact/gallery/Gallery'
import Location from '@/compnents/cardMain/Contact/location/location'
import Calendar from '@/compnents/cardMain/calendar/calendar'
import Insa from '@/compnents/cardMain/Contact/Insa/Insa'
import LocationV2 from '@/compnents/cardMain/Contact/location/LocationV2'

const Content = () => {

    return(
        <>
            <Intro/>
            <Contact/>
            <Gallery/>
            {/*<Location/>*/}
            <LocationV2/>
            {/*<Insa/>*/}
            <Calendar/>
        </>
    )
}

export default Content;