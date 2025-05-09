'use client'

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";

import Buildcore from "./sections/BuildCore/Buildcore";
import Wrapper from "./sections/Wrapper/Wrapper";
import Groupwrapper from "./sections/GroupWrapper/Groupwrapper";
import Frame from "./sections/Frame/Frame";

export default function Task() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  

  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: 0, width: "108px", height: "94px" },
  ];

  return (
    <div className="bg-black">
    <main className="bg-black min-h-screen  py-4 pt-2  lg:flex flex-col lg:flex-row justify-center lg:w-[90%] mx-auto font-inter">
      
       <div className="lg:hidden flex justify-between p-4 bg-[#171717]">
         <div className="flex items-center gap-2">
           <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
           <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
         </div>
         <button onClick={toggleMenu} className="text-white">
         <img src="/burg.svg" alt="Twitter Icon" className="" />
         </button>
       </div>
       <p className="bg-[#171717] w-[90%] mx-auto mt-8 text-white md:hidden text-center p-4 font-[16px] text-lg mt-4 mb-2">
       Start your quest journey and claim your rewards by joining our community
       </p>
 
       {/* Slide-Out Menu */}
       {menuOpen && (
   <div className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#171717] z-50 p-5">
     {/* Close Button */}
     <button
       onClick={toggleMenu}
       className="text-white text-2xl absolute top-4 right-4"
     >
       ✖
     </button>
 
     {/* Gigsol Logo */}
     <div className="flex items-center gap-2 mb-8">
       <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
       <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
     </div>
 
     {/* Navigation Links */}
     <nav className="space-y-6">
       <a
         href="/tasks"
         className="block text-white text-lg font-medium hover:text-gray-400"
       >
         Tasks
       </a>
       <a
         href="/leaderboard"
         className="block text-white text-lg font-medium hover:text-gray-400"
       >
         Leaderboard
       </a>
       <a
         href="/influencer"
         className="block text-white text-lg font-medium hover:text-gray-400"
       >
         Influencer Rewards
       </a>
     </nav>
 
     {/* User Info */}
     <div className="mt-10">
       <Card className="w-full bg-transparent border border-[#494949] rounded-[20px] p-4 mt-72 mb-6">
         <CardContent className="flex flex-col gap-2">
           <h3 className="text-white font-medium text-base">Myth0x</h3>
           <p className="text-gray-400 text-sm">GPoints: 3,250</p>
           <p className="text-gray-400 text-sm">X:@mythhh</p>
         </CardContent>
       </Card>
 
       {/* Daily Challenge */}
       <Card className="w-full bg-transparent border border-[#494949] rounded-[20px] p-4">
         <CardContent className="flex flex-col gap-2">
           <h3 className="text-white font-medium text-base">Daily Challenge</h3>
           <p className="text-gray-400 text-sm">
             Earn up to 1000 points per day
           </p>
           <button className="mt-4 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] text-black font-medium py-2 px-4 rounded-lg">
             Complete Challenge
           </button>
         </CardContent>
       </Card>
     </div>
   </div>
 )}
 
       <div className="bg-black w-full flex flex-col lg:flex-row">
         {/* Left Sidebar */}
         <Frame className="hidden lg:block" />
 
         {/* Right Content Area */}
         <div className="flex-1 p-5">
           {/* Top Card */}
            <Card className="w-full hidden md:block border-none h-[94px] bg-[#171717] rounded-[20px] overflow-hidden mb-7">
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

          <Buildcore />
          <Wrapper />
          <Groupwrapper />
        </div>
      </div>
    </main>
    </div>
  );
}
