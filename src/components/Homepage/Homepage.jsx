import React from 'react'
import './Homepage.css'
import { motion } from "framer-motion"
import aws1 from '../../assets/images/aws_1.jpg'
import aws2 from '../../assets/images/aws_2.jpg'
import aws3 from '../../assets/images/aws_3.jpg'
import python1 from '../../assets/images/python_1.jpg'

const Homepage = () => {
  const variants = {
    tap: { scale: 0.9 },
    hover: { scale: 1.1 },
    whileinview: {x:0,opacity: 1},
    initial: {opacity: 0,x:-300},
    transition: { type: "spring"},

  }
  
  return (
    <div className='text-text bg-gray-200'>        
    <div className='text-text flex justify-between'>
        <h1 className='text-[50px] md:text-[75px] font-serif m-48 xl:text-[100px]'>Welcome to my page</h1>
        <div className='ml-9 max-lg:hidden'></div>
      </div>
      <div className='flex justify-end flex-wrap items-center gap-10 w-[80%]'>
        <h1 className=' max-md:text-2xl flex text-5xl w-full justify-center text-text'>Our new courses</h1>
        <div className='space-y-10'>
          <motion.img transition={{ type: "spring", stiffness: 60, damping: 4 }} variants={variants} whileTap={"tap"} whileHover={"hover"} whileInView={"whileinview"} initial={"initial"} className='rounded-3xl ' src={aws1} alt="" />
          <motion.img transition={{ type: "spring", stiffness: 60, damping: 4 }} variants={variants} whileTap={"tap"} whileHover={"hover"} whileInView={"whileinview"} initial={"initial"} src={aws2} className='rounded-3xl ' alt="" />
        </div>
        <div className='space-y-10'>
          <motion.img transition={{ type: "spring", stiffness: 60, damping: 4 }} variants={variants} whileTap={"tap"} whileHover={"hover"} whileInView={"whileinview"} initial={"initial"} src={aws3} className='rounded-3xl ' alt="" />
          <motion.img transition={{ type: "spring", stiffness: 60, damping: 4 }} variants={variants} whileTap={"tap"} whileHover={"hover"} whileInView={"whileinview"} initial={"initial"} src={python1} className='rounded-3xl' alt="" />
        </div>
    </div>
    <div className='flex justify-center items-center text-text  flex-wrap font-mono p-10' >
        <h1 className='text-3xl text-primary blur-[0.5px] font-mono p-10'>About Us</h1>
        "KDAG is aimed at bringing Data Analytics and Machine Learning enthusiasts together under the umbrella of a single society, and provide ample opportunities & resources that are required to build a successful career in this emerging domain." 
    </div>
    </div>
  )
  }

export default Homepage
