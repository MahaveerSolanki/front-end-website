import React from 'react'
import './Coursepage.css'
import { course_images } from '../../assets/images.js'
import courses from '../../assets/data.js'
import { motion } from "framer-motion"
import { NavLink, useParams } from 'react-router-dom'
const Coursepage = () => {
  const [item, setItem] = React.useState(null)
  const { index } = useParams();

  const handleClick = (index) => {
    setItem(index)

    return
  }
  return (
    <div className=''>
      <div className='flex flex-col justify-between gap-5 m-10 cursor-pointer '>
        {courses.map((course, index) => {
          const link = course_images[index];
          return (
            <NavLink to={`/courses/${index}`}>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}

                whileHover={{ x: 200, scale: 1.2, transition: { duration: 0.3, delay: 0.4 } }}
                onClick={() => handleClick(index)}
                className={
                  'flex gap-20 items-start' + (index === item ? 'h-full w-full' : '')
                }
              >
                <div>
                  <img
                    src={link}
                    key={course.id}
                    className={'border border-none rounded-lg w-[240px] h-[135px] max-sm:w-30 max-sm:h-16'}
                    alt=""
                  />
                </div>
                <div className=''>
                  <div className='text-text text-3xl flex flex-wrap  max-sm:text-sm'>
                    {course.course_name}
                  </div>
                  <div className='text-text text-xs font-thin flex flex-wrap'>
                    {course.description}
                  </div>
                  <div className='text-primary flex flex-wrap'>
                    {course.creator}
                  </div>
                  <div className='text-primary flex flex-wrap'>
                  </div>
                </div>
              </motion.div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Coursepage
