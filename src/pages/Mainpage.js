import "./Mainpage.css"
import React from 'react'
import Navbar from '../components/Navbar'
import { Element } from "react-scroll"
import Home from "../components/Home"
import About from "../components/About"

const Mainpage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
    </div>
  )
}

export default Mainpage