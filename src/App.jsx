import React from 'react'
import HeaderTop from './Components/Header/HeaderTop'
import HeaderBottom from './Components/Header/HeaderBottom'
import BootStrapNav from './Components/Navbar/BootStrapNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <HeaderTop/>
      <HeaderBottom/>
      <BootStrapNav/>
      <Footer/>
    </div>
  )
}

export default App
