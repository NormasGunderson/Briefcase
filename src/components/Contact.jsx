import React from 'react'

export const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#040c16] flex justify-center items-center p-4'>
            <form method="POST" action='https://getform.io/f/Rb4lZVbB' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl from-bold inline border-b-4 border-pink-500 text-gray-300'>Leave a Comment</p>
                    <p className='text-gray-100 py-4'>Submit your comment, my email: normasgunderson@gmail.com</p>
                </div>
                <input className='bg-[#ccd5f6] p-2'type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd5f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd5f6] p-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-900 px-4 py-3 my-8 mx-auto flex items-center bo' >Let's Collaborate</button>
            </form>
        </div>
            
    )
}
