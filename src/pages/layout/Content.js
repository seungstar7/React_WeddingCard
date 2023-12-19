import React from 'react'
import Intro from '@/compnents/cardMain/Contact/intro/Intro'
import Contact from '@/compnents/cardMain/Contact/Contact'
import Gallery from '@/compnents/cardMain/Contact/gallery/Gallery'
import Location from '@/compnents/cardMain/Contact/location/location'
import Calendar from '@/compnents/cardMain/calendar/calendar'
import Insa from '@/compnents/cardMain/Contact/Insa/Insa'

const Content = () => {

    return(
        <>
            <Intro/>
            <Contact/>
            <Gallery/>
            <Location/>
            <Insa/>
            <Calendar/>
        </>
    )
}

export default Content;