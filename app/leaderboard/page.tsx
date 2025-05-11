'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChartBarIcon, LayoutDashboardIcon, TrophyIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Frame from "../tasks/sections/Frame/Frame";

export default function Task() {
  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: "0", width: "108px", height: "94px" },
  ];

    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

          useEffect(() => {
              if (menuOpen) {
                document.body.classList.add('overflow-hidden', 'h-screen');
              } else {
                document.body.classList.remove('overflow-hidden', 'h-screen');
              }
          
              return () => {
                document.body.classList.remove('overflow-hidden', 'h-screen');
              };
            }, [menuOpen]);
  

  return (
    <div className="bg-black">
     <main className="bg-black min-h-screen  py-4 pt-2  lg:flex flex-col lg:flex-row justify-center w-full mx-auto font-inter">
         {/* Mobile Header */}
         <div className="lg:hidden flex justify-between p-4 bg-[#171717]">
           <div className="flex items-center gap-2">
             <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
             <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
           </div>
           <button onClick={toggleMenu} className="text-white">
             <img src="./burg.svg" alt="hamburger"/>
           </button>
         </div>
     
         {/* Slide-Out Menu */}
         {menuOpen && (
     <div className="lg:hidden  fixed top-0 right-0 w-3/4 h-full bg-[#171717] z-50 px-8 p-5">
       {/* Close Button */}
       <button
         onClick={toggleMenu}
         className="text-white text-2xl absolute mt-4 right-4"
       >
         ✖
       </button>
   
       {/* Gigsol Logo */}
       <div className="flex items-center mt-4 gap-2 mb-8">
         <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
         <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
       </div>
   
       {/* Navigation Links */}
       <nav className="space-y-4 pt-6">
  <Link
    href="/tasks"
    className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
  >
    <LayoutDashboardIcon className="w-5 h-5" />
    Tasks
  </Link>
  <Link
    href="/leaderboard"
    className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
  >
    <ChartBarIcon className="w-5 h-5" />
    Leaderboard
  </Link>
  <Link
    href="/influencer"
    className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
  >
    <TrophyIcon className="w-5 h-5" />
    Influencer Rewards
  </Link>
</nav>
   
       {/* User Info */}
     <div className="mt-8">
       <Card className="w-full bg-transparent border border-[#494949] rounded-[20px] px-0 py-4 mt-12 mb-6">
  <CardContent className="flex flex-col gap-2">
    <h3 className="text-gray-100 font-medium text-base">Myth0x</h3>
    <p className="text-white text-lg">GPoints: 3,250</p>
    <p className="text-gray-400 text-sm">X:@mythhh</p>
  </CardContent>
</Card>
         {/* Daily Challenge */}
         <Card className="w-full bg-transparent border border-[#494949] rounded-[20px] px-0 py-4 ">
           <CardContent className="flex flex-col gap-2">
             <h3 className="text-white font-medium text-base">Daily Challenge</h3>
             <p className="text-gray-400 text-sm">
               Earn up to 1000 points per day
             </p>
             <div className="relative mt-4">
  <Button className="absolute text-black  h-[25px] w-[150px] rounded-[30px] px-[15px] py-2.5 text-xs font-medium bg-[#30EAF7] group overflow-hidden">
    {/* Default Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
      Complete challenge
    </span>
    {/* Hover Text */}
    <span className="absolute bg-[#30EAF7] inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
      Coming Soon
    </span>
  </Button>
</div>
           </CardContent>
         </Card>
       </div>
     </div>
   )}
      <div className="bg-black w-full flex">
        <Frame className="hidden md:block" />
        <div className="flex-1   p-5">
          {/* Top Banner */}
             <Card className="w-full border-none hidden md:block  h-[94px] bg-[#171717] rounded-[20px] overflow-hidden mb-7">
               <CardContent className="p-0 relative h-full">
                 <p className="absolute top-[35px] left-[45px] font-semibold text-white text-lg">
                   Start your quest journey and claim your rewards by joining our
                   community
                 </p>
   
                 <div className="absolute w-[251px] h-[126px] -top-3.5 right-[7px]">
                 <div className="relative w-[244px] h-[94px] top-3.5">
                   {questionMarkImages.map((img, index) => (
                     <img
                       key={index}
                       className={`absolute w-[${img.width}] h-[${img.height}] top-[${img.top}px] left-[${img.left}]`}
                       alt="Pixel question solid"
                       src="./qmark.svg"
                     />
                   ))}
                 </div>
               </div>
               </CardContent>
             </Card>
   

          {/* Leaderboard Section */}
          <Card className="w-full lg:w-[80%]  border-none  lg:h-[60%] bg-[#171717] rounded-[20px] overflow-hidden">
  <CardContent className="p-0">
    {/* Gradient Header */}
    <div className="w-full h-[200px] bg-cover bg-center rounded-t-[20px] px-12 flex items-center"
      style={{ backgroundImage: "url('./imgbg.svg')" }}
    >
      <div className="text-white font-semibold text-lg">
        Leaderboard
        <div className="flex mt-2"><img src="/usa.svg" alt="User" className="w-6 h-6 rounded-full" /> <div className="text-sm font-normal text-white/70">1025 Participants</div></div>
      </div>
    </div>

    {/* Leaderboard Content */}
    <div className="mt-[20%] lg:mt-0 px-12 py-6">
      {[1, 2, 3].map((rank) => (
        <div key={rank} className="flex justify-between items-center py-4 ">
          <div className="flex items-center gap-3">
            <span className="text-white text-lg font-semibold">{rank}.</span>
            <img src="/blu.svg" alt="User" className="w-6 h-6 rounded-full" />
            <span className="text-white">MythMyth</span>
          </div>
          <div className="text-white">1250 pts</div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

        </div>
      </div>
    </main>
    </div>
  );
}
