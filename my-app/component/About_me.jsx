'use client'
import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';

function About_me() {
    return (
        <div className='pt-7'>
            <div className='flex justify-center'>
                <div className='w-[250px] h-[250px] border-amber-300 border rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src="/profile.png" alt="image-profile" />
                </div>

                <div className='ml-5'>
                    <div className='text-5xl'>
                        Natthapong Suphalawut
                    </div>
                    <div className='text-3xl mt-3   ' >
                        Web App/Website Fullstack Developer
                    </div>
                    <hr className='my-5' />
                    <div className='flex'>
                        <div className='text-2xl' >Email</div>
                        <AiOutlineMail className='mx-2' size={30} />
                        <div className='text-2xl'>:</div>
                        <div className='text-2xl ml-2' >natthapong.su7@gmail.com</div>
                    </div>

                    <div className='flex'>
                        <div className='text-2xl' >Phone</div>
                        <AiOutlinePhone className='mx-2' size={30} />
                        <div className='text-2xl'>:</div>
                        <div className='text-2xl ml-2' >0969479270</div>
                    </div>

                    <div className='flex'>
                        <div className='text-2xl' >Github</div>
                        <AiOutlineGithub className='mx-2' size={30} />
                        <div className='text-2xl'>:</div>
                        <a href='#' className='text-2xl ml-2 underline hover:text-amber-400' >NatthapongSu</a>
                    </div>

                </div>

            </div>

            <div className='mx-30'>
                {/* <div>
                    <TypeAnimation
                        sequence={[
                            'About Me', // Types 'One'
                            1000, // Waits 2s
                            // () => {
                            //     console.log('Sequence completed');
                            // },
                        ]}
                        wrapper="span"
                        cursor={true}
                        speed={50}
                        className='header-text'
                        // repeat={Infinity}
                    />
                </div> */}
                <div className='header-text'>About Me</div>

                <div className='n-text'>
                    I am a recent Web Developer graduate with a strong motivation and I am a responsible, highly motivated web developer with a passion for learning. I possess a passion for learning and have a keen interest in exploring new technologies and trends within the software industry.
                </div>

            </div>
            <div className='h-20'></div>
        </div>
    )
}

export default About_me