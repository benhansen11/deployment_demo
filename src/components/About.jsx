import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Ben. Please feel free to take a look around my portfolio.</p>
                </div>
                <div>
                    <p> I am a highly motivated Computer Science graduate seeking a 
                        challenging career opportunity where I can leverage my 
                        skills in problem-solving, attention to detail, teamwork, 
                        communication, and programming to contribute to the success 
                        of an organization.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About