import React from 'react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import chocolates from '../assets/chocolates.png';
import { RiGlobalLine } from "react-icons/ri";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

function Homepage() {
  const videoRef = useRef();
  const chocolateRef1 = useRef();
  const chocolateRef2 = useRef();

  useEffect(() => {
    gsap.to(chocolateRef1.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2
    });

    gsap.to(chocolateRef2.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
      delay: 1
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-screen h-screen px-5 pt-8 pb-10">
      <div className='z-50 relative flex text-white font-semibold w-full justify-between'>
        <div>
          <p className='text-md font-dm-sans'>Hey ....</p>
        </div>
        <div className='flex gap-3 justify-between font-dm-sans items-center'>
          <p className='text-md tracking-wide'>A Little Chocolate Goes a Long Way... 🍬✨</p>
          {/* <button className="text-white px-4 py-2 rounded-md bg-[#A66D45] text-sm" onClick={onLogout}>Logout</button> */}
        </div>
      </div>
      <video playsInline autoPlay preload="none" muted ref = {videoRef} className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src = "https://nicolaipalmkvist.com/wp-content/uploads/2024/12/1-1.mp4"  type="video/mp4" />
      </video>
      <div className='relative top-48 flex w-full justify-between px-28 font-dm-sans z-50'>
        <div>
          <p className='text-6xl text-white font-bold pb-4 tracking-widest'>Chocolate</p>
          <p className='text-6xl text-white font-bold tracking-wider'>makes</p>
        </div>
        <div>
          <p className='text-6xl text-white font-bold pb-4 tracking-widest'>Everything</p>
          <p className='text-6xl text-white font-bold text-right tracking-wider'>better.</p>
        </div>
      </div>
      <div className='relative flex w-full justify-between px-28 pb-40'>
        <div className='w-96' ref = {chocolateRef1}>
          <img src = {chocolates} alt="chocolate" />
        </div>
        <div className='w-96' ref = {chocolateRef2}>
          <img src = {chocolates} alt="chocolate" />
        </div>
      </div>
      <div className='z-50 relative flex text-white w-full justify-between'>
        <div className='flex w-1/6 justify-between font-dm-sans font-semibold'>
          <div className='text-xl cursor-pointer'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <RiGlobalLine />
            </a>
          </div>
          <div className='text-lg cursor-pointer'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </div>
          <div className='text-lg cursor-pointer'>
            <a href="https://www.linkedin.com/in/yashi-gupta-22785a2b0/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div className='text-lg cursor-pointer'>
            <a href="https://www.youtube.com/@coderYashi" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div>
          <p className='text-md font-dm-sans tracking-wider'>Yashi Gupta</p>
          <p>__________</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

