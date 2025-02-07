import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'
// import './global.css';
import CBCStateEx from './stateeaxample/CBCStateEx'
import FCBStateEx from './stateeaxample/FCBStateEx'
import FunctionalComponent from './components/functionalcomponent'
import './App.css'


const App = () =>{
  return (
    <div >
      {/* <Navbar />
      <Main />
      <div className='sidebar'>
      <Sidebar1 />
      <Sidebar2 />
      </div>
      <Footer /> */}
      {/* <CBCStateEx/>
    <br/>
      <FCBStateEx/>
      <br/> */}
      <FunctionalComponent/>
    </div>
  )
}


export default App