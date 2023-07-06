import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
                </div>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Hobbies</p>
                </div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-1xl'>
                    <p>At the College of Idaho, I played baseball all four years while mixing in some
                        snowboarding trips up to Bogus Basin and Brundage a few times a year. As I've
                        always been very involved with technology, I found my passion for programming
                        during online classes due to covid. Although my life got busy at times due to 
                        me being a student athlete and coding wasn't always my main focus, I still 
                        have a desire to imrpove my skills and add onto my knowledge every day. 

                    </p>
                </div>
                <div className='sm:text-left text-1xl'>
                    <p>In my free time, I love to spend time with friends, play video games, go out 
                        and have some drinks, and find new music to add to my vast number 
                        of playlists. Now that I'm done with my baseball career, I will be focusing more 
                        on snowboarding in the winter and finding a different sport or activity to be 
                        putting the rest of my free time in to. I pride myself by being kind to everyone 
                        and not being embarrassed to ask questions.
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About