import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.jpeg'
import gmail from '../../assets/gmail.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='text-text flex justify-between items-center bg-[#f5f6f7]'>
      <div className='flex p-10 '><img className='h-6 bottom-1 ' src={logo2} alt="" /><h1 className='pl-10'>IIT KGP</h1></div>
      <div>
        <div className='pr-20 flex flex-wrap justify-center items-center'>Follow Us
        <a href=""><img className='h-7 w-7 m-4' src={facebook} alt="" /></a>
        <a href=""><img className='h-7 w-7 m-4' src={instagram} alt="" /></a>
        <a href=""><img className='h-7 w-7 m-4' src={gmail} alt="" /></a>
        <a href=""><img className='h-7 w-7 m-4' src={linkedin} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
