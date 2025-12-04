import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

const Home: React.FC = () => {
    return (
        <>
            <SEO />
            <StructuredData />
            <main className='bg-image'>
                <Header />
                <Hero />
                <AboutUs />
                <Services />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default Home