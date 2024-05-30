import React from 'react'
import { course_images } from '../../assets/images.js'
import courses from '../../assets/data.js'
import { NavLink ,  useParams } from 'react-router-dom'
import playbutton from '../../assets/svg/playbutton.svg'


const Id = () => {
    const { index } = useParams()
    return (
        <div>
            <div className='flex justify-around mt-10 px-20 bg-[#061049] text-bg'>
                <div>
                    <h1 className='text-2xl p-3'>{courses[index].course_name}</h1>
                    <div className='text-md font-mono p-3' >{courses[index].description}</div>
                    <div className='text-xs font-mono flex p-3' > <div className='text-xs font-mono text-[#f69c08]'>Rating({courses[index].rating_star})  </div> Students enrolled {courses[index].students}</div>
                    <div className='p-3'>Created by {courses[index].creator}</div>
                    <div className='p-3 text-xs font-mono text-gray-400 '>Last updated {courses[index].updated_date}</div>
                </div>
                <div>
                    <div className='w-[35vw] h-[29vh] p-3'>
                    <img className='border border-none w-[30vw] rounded-md' src={course_images[index]} alt="" /></div>
                    <img className='relative ' src={playbutton} alt="" />
                    </div>


            </div>
        </div>
    )
}

export default Id
