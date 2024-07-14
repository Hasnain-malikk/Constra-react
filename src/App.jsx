import React from 'react'
import HeaderTop from './Components/Header/HeaderTop'
import HeaderBottom from './Components/Header/HeaderBottom'
// import Navbar from './Components/Navbar/Navbar'
import BootStrapNav from './Components/Navbar/BootStrapNav'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <HeaderTop/>
      <HeaderBottom/>
      {/* <Navbar/> */}
      <BootStrapNav/>
    </div>
  )
}

export default App
