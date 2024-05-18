import React from 'react'
import MERNlogo from '../assets/MERNlogo.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import typescript from '../assets/typescript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='py-[-8]'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    {/* <p>These are the Languages Programs that I work with </p> */}
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={MERNlogo} alt="HTML icon" />
                        <p className='my-4' >API & DB</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                        <p className='my-4' >CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascript} alt="JS icon" />
                        <p className='my-4' >JS</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="REACT icon" />
                        <p className='my-4' >REACT JS</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt="Typescript icon" />
                        <p className='my-4' >TYPESCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
                        <p className='my-4' >TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#683b6a] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="Github icon" />
                        <p className='my-4' >GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills