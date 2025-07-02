'use client'

import React, { useEffect, useRef } from 'react'
import Sidebar from '@/component/Sidebar'
import About_me from '@/component/About_me'
import Language from '@/component/Language';
import Technical_skill from '@/component/Technical_skill';
import Work from '@/component/Work';
import Education from '@/component/Education';

function Page() {
  const aboutRef = useRef(null);
  const languagesRef = useRef(null);
  const technicalRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target); // fade in only once
        }
      });
    }, {
      threshold: 0.05,
    });

    if (languagesRef.current) {
      observer.observe(languagesRef.current);
    }
    if (technicalRef.current) {
      observer.observe(technicalRef.current);
    }
    if (workRef.current) {
      observer.observe(workRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (languagesRef.current) observer.unobserve(languagesRef.current);
      if (technicalRef.current) observer.unobserve(technicalRef.current);
      if (workRef.current) observer.unobserve(workRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);

    };
  }, []);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='md:flex'>
      {/* <Sidebar
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToLanguage={() => scrollToSection(languagesRef)}
        onScrollToTechnical={() => scrollToSection(technicalRef)}
        onScrollToWork={() => scrollToSection(workRef)}

      /> */}
      <div className='main'></div>

      <div className='w-screen h-screen overflow-y-auto scroll-smooth'>
        <section ref={aboutRef}>
          <About_me />
        </section>

        <section ref={technicalRef} className='opacity-0'>
          <Technical_skill />
        </section>

        <section ref={languagesRef} className='opacity-0'>
          <Language />
        </section>

        <section ref={workRef} className='opacity-0'>
          <Work />
        </section>

        <section ref={educationRef} className='mb-3 opacity-0'>
          <Education />
        </section>

      </div>
    </div>
  );
}

export default Page;
