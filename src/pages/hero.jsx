import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import dashboard from '../assets/dashboard.png';
import StaggeredMenu from "../animations/StaggeredMenu";
import taghash from '../assets/taghash.png';
import FormModal from "../popupform/form.jsx";

export default function Hero() {
  const navigate = useNavigate(); // React Router hook

  const badge1 = useRef(null);
  const badge2 = useRef(null);
  const badge3 = useRef(null);
  const badge4 = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) return;

    gsap.to(badge1.current, {
      y: "10px",
      x: "5px",
      rotation: 2,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(badge2.current, {
      y: "15px",
      x: "-5px",
      rotation: -1.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });

    gsap.to(badge3.current, {
      y: "8px",
      rotation: 1,
      duration: 2.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });

    gsap.to(badge4.current, {
      y: "12px",
      x: "3px",
      rotation: -2,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  }, []);

  const menuItems = [
    
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Analysis', ariaLabel: 'Learn about us', link: '/dashboard' }, 
  { label: 'Portfolio', ariaLabel: 'Check Portfolio', link: 'https://portfo-olive.vercel.app/', external: true },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];



  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com/Ghyaneshdeepz' },
    { label: 'LinkedIn', link: 'www.linkedin.com/in/ghyanesh-sy' }
  ];

  return (
    <div className="relative">
     
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 50,
          backgroundColor: 'transparent',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="black"
          openMenuButtonColor="black"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl={taghash}
          accentColor="#ff6b6b"
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>

      
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2 font-[Montserrat] z-0">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 relative">

        
          <div ref={badge1} className="hidden sm:block absolute top-[6rem] left-[5%] sm:top-[10rem] sm:left-[10%]">
            <span className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-[#F3F1FF] text-[#8D79FF] text-sm font-medium">
              Census Entry
            </span>
          </div>
          <div ref={badge2} className="hidden sm:block absolute top-[6.5rem] right-[5%] sm:top-[8.5rem] sm:right-[10%]">
            <span className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-[#FFF1EE] text-[#FF745E] text-sm font-medium">
              Data Records
            </span>
          </div>
          <div ref={badge3} className="hidden sm:block absolute top-[25rem] right-[5%] sm:top-[29rem] sm:right-[10%]">
            <span className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-[#E9F6FF] text-[#29AEFF] text-sm font-medium">
              Vaccination Trends
            </span>
          </div>
          <div ref={badge4} className="hidden sm:block absolute top-[27rem] left-[7%] sm:top-[27rem] sm:left-[10%]">
            <span className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-[#FFF7E9] text-[#FFB128] text-sm font-medium">
              Real time
            </span>
          </div>

       
          <div className="flex justify-center">
            <a
              href="https://covid19dashboard.mohfw.gov.in/"
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300"
            >
              Explore the Capital Product
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2">Explore</span>
                <svg
                  className="shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

        
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Census Management Dashboard
            </h1>
          </div>

          
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600">
              Manage census entries, analyze vaccination trends, and explore gender-based statistics with ease.
            </p>
          </div>

          
          <div className="mt-8 gap-6 flex justify-center flex-col sm:flex-row">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex justify-center cursor-pointer items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-6"
            >
              Survey Now
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex justify-center cursor-pointer items-center gap-x-3 text-center bg-white border border-gray-800 text-black text-sm font-medium rounded-lg py-3 px-6"
            >
              View Data
            </button>
          </div>

          {/* Image */}
          <div className="flex mt-20 justify-center">
            <img
              src={dashboard}
              alt="Dashboard"
              className="rounded-t-3xl w-full max-w-5xl h-auto object-cover"
            />
          </div>
        </div>
      </div>

 
      <FormModal show={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
