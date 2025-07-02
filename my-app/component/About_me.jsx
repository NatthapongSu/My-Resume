
import React, { useEffect, useRef } from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import copy from 'clipboard-copy';
import { IoIosPin } from "react-icons/io";


function About_me() {

    function copyText(text) {
        copy(text)
        toast.success('Copy Success!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeIn');
              observer.unobserve(entry.target); // fade in only once
            }
          });
        }, {
          threshold: 0.02,
        });
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) observer.unobserve(ref.current);
    
        };
      }, []);


    return (
        <div className='pt-7'>
            <ToastContainer />
            <div className='flex justify-center max-md:flex-col'>
                <div className='w-[250px] h-[250px] border-amber-300 border rounded-full overflow-hidden max-md:m-auto'>
                    <img className='w-full h-full object-cover' src="/s_profile.jpg" alt="image-profile" />
                </div>

                <div className='ml-5'>
                    <div className='text-5xl'>
                        Natthapong Suphalawut
                    </div>
                    <div className='text-3xl mt-3   ' >
                        Web App/Website Fullstack Developer
                    </div>
                    <hr className='my-5' />

                    <div className='flex max-md:flex-col max-md:mb-2'>
                        <div className='flex'>
                            <div className='text-2xl' >Email</div>
                            <AiOutlineMail className='mx-2' size={30} />
                            <div className='text-2xl'>:</div>
                        </div>
                        <div className='flex cursor-pointer' onClick={() => copyText('natthapong.su7@gmail.com')}>
                            <div className='text-2xl ml-2 mr-1 underline text-amber-400' >natthapong.su7@gmail.com</div>
                            <MdContentCopy size={20} className='text-amber-400' />
                        </div>
                    </div>

                    <div className='flex max-md:flex-col max-md:mb-2'>
                        <div className='flex'>
                            <div className='text-2xl' >Address</div>
                            <IoIosPin className='mx-2' size={30} />
                            <div className='text-2xl'>:</div>
                        </div>
                        <div className='text-2xl ml-2' >130/59 ,Ban Suan, Chon Buri District, Chon Buri 20000</div>
                    </div>

                    <div className='flex max-md:flex-col max-md:mb-2'>
                        <div className='flex'>
                            <div className='text-2xl' >Phone</div>
                            <AiOutlinePhone className='mx-2' size={30} />
                            <div className='text-2xl'>:</div>
                        </div>
                        <div className='text-2xl ml-2' >0969479270</div>
                    </div>

                    <div className='flex'>
                        <div className='flex'>
                            <div className='text-2xl' >Github</div>
                            <AiOutlineGithub className='mx-2' size={30} />
                            <div className='text-2xl'>:</div>
                        </div>
                        <a href='https://github.com/NatthapongSu' target='_blank' className='text-2xl ml-2 underline text-amber-400' >NatthapongSu</a>
                    </div>

                </div>

            </div>

            <div className='session-box opacity-0' ref={ref}>
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
            {/* <div className='h-20'></div> */}
        </div>
    )
}

export default About_me