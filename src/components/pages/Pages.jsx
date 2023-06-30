import React from 'react'
import Header from '../common/header/Header';
import { BrowserRouter as Router, Outlet, Route } from "react-router-dom"
import Home from '../home/Home';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Footer from '../common/footer/Footer';



   const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Outlet>
          <Route exact path='/' elementt={<Home />} />
          <Route  path="about" element={<About />} />
          <Route  path="servises" element={<Services />} />
          <Route  path="blog" element={<Blog />} />
          <Route  path="pricing" element={<Pricing />} />
          <Route  path="contact" element={<Contact />} />
          
        </Outlet>
        <Footer />
      </Router>
    </>
  )
}

export default Pages