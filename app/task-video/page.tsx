'use client'

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import Frame from "../tasks/sections/Frame/Frame";
import { ChartBarIcon, LayoutDashboardIcon, TrophyIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function Taskthread() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const tasks = [
    { title: "Create 30s Video", points: 100 },
    { title: "Write a Thread", points: 250 },
  ];

  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: 0, width: "108px", height: "94px" },
  ];

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
    <main className="bg-black min-h-screen  py-4 pt-2  lg:flex flex-col lg:flex-row justify-center  mx-auto font-inter">
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
      <p className="bg-[#171717] w-[90%] mx-auto mt-8 text-white md:hidden text-center p-4 font-[16px] text-lg mt-4 mb-2">
      Start your quest journey and claim your rewards by joining our community
      </p>

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
         <Card className="w-full bg-transparent border border-[#494949] rounded-[20px] p-4 mt-12 mb-6">
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

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-6">
            {/* Left: Task Group and List */}
            <div className="hidden lg:block col-span-2 space-y-4">
              {/* Gradient Task Group Card */}
           <div className="bg-cover bg-center  rounded-[20px] p-4 text-white w-full"
                  style={{ backgroundImage: "url('./imgbg.svg')" }}
               >
                <p className="text-lg font-semibold">
                  Power Actions: Show You're a Degen
                </p>
                <p className="text-sm mb-1 mt-4">1/3</p>
                <div className="relative w-full h-[3px] bg-[#ffffff80] rounded-[10px]">
                  <Progress
                    value={33}
                    className="w-[33%] h-[3px] bg-primary-blue rounded-[10px]"
                  />
                </div>
              </div>

              {/* Task List */}
{tasks.map((task, i) => (
  i === 0 ? (
    // Gradient border wrapper
    <div key={i} className="p-[2px] rounded-[20px] bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF]">
      <div className="flex items-center justify-between bg-[#171717] px-4 py-2 rounded-[18px] text-white">
        <div>
          <span>{task.title}</span>
          <br />
          <span className="p-2">X</span>
        </div>
        <div className="text-xl text-right bg-gradient-to-r from-[#504CFF] to-[#480090] px-8 py-4 rounded-lg">
          {task.points} <br />
          <span>pts</span>
        </div>
      </div>
    </div>
  ) : (
    <Link href="/task-thread" key={i}>
      <div className="flex items-center justify-between bg-[#171717] px-4 py-2 rounded-[20px] text-white cursor-pointer hover:bg-[#1e1e1e]">
        <div>
          <span>{task.title}</span>
          <br />
          <span className="p-2">X</span>
        </div>
        <div className="text-xl text-right bg-gradient-to-r from-[#504CFF] to-[#480090] px-8 py-4 rounded-lg">
          {task.points} <br />
          <span>pts</span>
        </div>
      </div>
    </Link>
  )
))}
  </div>

            {/* Right: Task Detail */}
            <div className="col-span-3 bg-[#171717] rounded-[20px] p-6 text-white lg:w-[70%] lg:h-[150%]">
              <div className="text-center text-3xl font-bold bg-gradient-to-r from-[#504CFF] to-[#480090] rounded-[14px] mx-auto w-[90%] py-4 mb-4">
                100 <span className="text-sm">pts</span>
              </div>
              <p className="my-8 flex justify-center items-center gap-2">
                <img src="/twe.svg" alt="Twitter Icon" className="" />
                Make a 30-sec banger. Post the link when it’s live
              </p>

              <div className="relative w-[90%] mx-auto mb-3">
                <input
                  type="text"
                  placeholder="Enter link here..."
                  className="bg-[#0D0D0D] w-full p-4 pr-24 rounded-[10px] text-gray-400 text-sm"
                />
              </div>
              <div className="text-center mt-4 text-lg py-1 bg-[#30EAF7] rounded-[14px] mx-auto w-[90%] text-black mb-4">
                Verify Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}