'use client'

import React, { useRef } from 'react'
import Sidebar from '@/component/Sidebar'
import About_me from '@/component/About_me'
import Language from '@/component/Language';
import Technical_skill from '@/component/Technical_skill';

function Page() {
  const aboutRef = useRef(null);
  const languagesRef = useRef(null);
  const technicalRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex'>
      <Sidebar
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToLanguage={() => scrollToSection(languagesRef)}
        onScrollToTechnical={() => scrollToSection(technicalRef)}

      />
      <div className='w-screen h-screen overflow-y-auto scroll-smooth'>
        <section ref={aboutRef}>
        {/* <section className='relative bg-[url("/flat-lay-desk-arrangement-with-copy-space.jpg")] bg-cover bg-center' ref={aboutRef}></section> */}
          {/* <div className="absolute inset-0 bg-black opacity-85 z-10"></div> */}
          <div className='relative z-20'>
            <About_me />
          </div>
        </section>

        <section ref={technicalRef}>
          <Technical_skill/>
        </section>

        <section ref={languagesRef}>
          <Language />
        </section>
      </div>
    </div>
  );
}

export default Page;
