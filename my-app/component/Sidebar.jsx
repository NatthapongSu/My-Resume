import React, { useEffect, useState } from 'react';
import { FaRegUser, FaBusinessTime } from "react-icons/fa";
import { BsJournalBookmarkFill, BsAlphabetUppercase } from "react-icons/bs";
import { AiOutlineJavaScript } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar({ onScrollToAbout, onScrollToLanguage, onScrollToTechnical, onScrollToWork }) {
  const [open, setOpen] = useState(true);


  return (
    <>
      {/* <div className='md:hidden'>
        <div className='bg-black fixed w-screen h-[100px] flex justify-end items-center md:hidden'>
          <GiHamburgerMenu className='text-5xl mr-5' onClick={() => setOpen(!open)}/>
        </div>

        <div
          className={`bg-black flex  flex-col items-end mr-5 w-screen z-100 text-white overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'opacity-100 space-y-2' : 'max-h-0 opacity-0'}
        `}
        >
          <p className="text-5xl">Home</p>
          <p className="text-5xl">About</p>
          <p className="text-5xl">Services</p>
          <p className="text-5xl">Contact</p>
        </div>
      </div> */}

      <div className='bg-black w-[90px] h-screen p-5 text-amber-50 max-md:hidden'>
        <SidebarIcon onClick={onScrollToAbout} icon={<FaRegUser size={30} />} text='About me' />
        <SidebarIcon onClick={onScrollToTechnical} icon={<AiOutlineJavaScript size={30} />} text='Technical Skills' />
        <SidebarIcon onClick={onScrollToLanguage} icon={<BsAlphabetUppercase size={30} />} text='Language Skills' />
        <SidebarIcon onClick={onScrollToWork} icon={<FaBusinessTime size={30} />} text='Study Work Experience' />
        <SidebarIcon icon={<BsJournalBookmarkFill size={30} />} text='Education (WIP)' />
      </div>
    </>
  );
}

function SidebarIcon({ icon, text = 'tooltip', onClick }) {
  return (
    <div onClick={onClick} className='sidebar-icon group'>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  );
}

export default Sidebar;
