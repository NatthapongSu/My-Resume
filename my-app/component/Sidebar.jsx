import React, { useEffect, useState } from 'react';
import { FaRegUser, FaBusinessTime } from "react-icons/fa";
import { BsJournalBookmarkFill, BsAlphabetUppercase } from "react-icons/bs";
import { AiOutlineJavaScript } from "react-icons/ai";

function Sidebar({ onScrollToAbout, onScrollToLanguage, onScrollToTechnical }) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const mobile = /Mobile|iPhone|Android.*Mobile|Windows Phone/i.test(ua);
    setIsMobile(mobile);
  }, []);

  return (
    <>
        <div>

        </div>
        <div className='bg-black w-[90px] h-screen p-5 text-amber-50 max-md:hidden'>
          <SidebarIcon onClick={onScrollToAbout} icon={<FaRegUser size={30} />} text='About me' />
          <SidebarIcon onClick={onScrollToTechnical} icon={<AiOutlineJavaScript size={30} />} text='Technical Skills' />
          <SidebarIcon onClick={onScrollToLanguage} icon={<BsAlphabetUppercase size={30} />} text='Language Skills' />
          <SidebarIcon icon={<FaBusinessTime size={30} />} text='Study Work Experience' />
          <SidebarIcon icon={<BsJournalBookmarkFill size={30} />} text='Education' />
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
