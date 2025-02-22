import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import HIW from './components/HIW/HIW';
import OM from './components/OM';
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import Footer from './components/footer'
const App = () => {
  return (
   <div className='app-container'>

    <Navbar/>
    <Banner/>
    <HIW/>
    <OM/>
    <ContactUs/>
    <FAQ/>
    <Footer/>
   </div>
  )
}

export default App
