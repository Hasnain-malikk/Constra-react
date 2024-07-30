import React from 'react'
import HeaderTop from './Components/Header/HeaderTop'
import HeaderBottom from './Components/Header/HeaderBottom'
import BootStrapNav from './Components/Navbar/BootStrapNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import OurPeople from './Pages/OurPeople';
import Testimonials from './Pages/Testimonials';
import FAQ from './Pages/FAQ';
import Pricing from './Pages/Pricing';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Features from './Pages/Features';
import News from './Pages/News';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <HeaderTop/>
       <HeaderBottom/>
       <BootStrapNav/>
        <Routes>
         <Route path="/" element={<Home/>} /> 
         <Route path="/aboutus" element={<AboutUs/>} /> 
         <Route path="/ourpeople" element={<OurPeople/>} /> 
         <Route path="/testimonials" element={<Testimonials/>} /> 
         <Route path="/faq" element={<FAQ/>} /> 
         <Route path="/pricing" element={<Pricing/>} /> 
         <Route path="/projects/*" element={<Projects/>} /> 
         <Route path="/services" element={<Services/>} /> 
         <Route path="/features" element={<Features/>} /> 
         <Route path="/news" element={<News/>} /> 
         <Route path="/contact" element={<Contact/>} /> 
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
