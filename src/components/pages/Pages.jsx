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
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          
        </Outlet>
        <Footer />
      </Router>
    </>
  )
}

export default Pages