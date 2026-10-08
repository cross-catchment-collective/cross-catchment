import React from 'react'
import Hero from '../components/Hero.jsx'
import Partners from '../components/Partners.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import SixCSection from '../components/SixCs.jsx'
import Subscribe from '../components/Subscribe.jsx'

function Homepage () {
    return (
        <>
            <Hero />
            <Partners />
            <HowItWorks />
            <SixCSection />
            <Subscribe />
        </>
    )
}

export default Homepage;