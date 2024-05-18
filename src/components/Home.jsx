import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
// import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        // add a name to react smooth scowl
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hello, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Norma Gunderson</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Fullstack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I focus on creating and maintaining the best iterative website. Looking forward to collaborate with the team(s) to continuing creating modern web applications.</p>
                <div>
                    {/* //by adding a group the arrow icon will rotate in a 90 deg */}
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center bg-fuchsia-600 border-fuchsia-800 '>
                        <Link to="./components/Work">View Work</Link>
                        <span className='group-hover:rotate-90 duration-300' >
                            <HiArrowNarrowRight className='ml-3' />

                        </span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Home