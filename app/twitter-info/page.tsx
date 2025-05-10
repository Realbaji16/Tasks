'use client'

import React, { useState } from "react";
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
  return (
      <div className="bg-black">
    <main className="bg-black min-h-screen  py-4 pt-2  lg:flex flex-col lg:flex-row justify-center lg:w-[100%] mx-auto font-inter">
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
       <nav className="space-y-12 pt-6">
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
    
 
      <div className="bg-black lg:w-full w-[90%] mx-auto flex">
        {/* Left Sidebar */}
        <Frame className="hidden md:block"/>

        {/* Right Content Area */}
        <div className="w-full md:w-3/4 flex mt-12 flex-col gap-6">
          {/* Influencer Banner */}
              <Card
         className="p-6 md:mt-8 text-white border-none rounded-[20px] overflow-hidden bg-cover bg-center"
         style={{ backgroundImage: "url('./imgbg.svg')" }}
       >
                   <CardContent className="flex mt-4 flex-col gap-2">
                     <h2 className="text-xl font-semibold">
                       Become a Gigsol Influencer – Claim up to $1M in Airdrops 🏆
                     </h2>
                     <p className="text-sm">
                       Get rewarded based on your Twitter audience size. Get rewards by bringing your community.
                     </p>
                   
                   </CardContent>
                 </Card>

          {/* Eligibility Snapshot + Invite Tracker Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Eligibility Snapshot */}
            <Card className="bg-[#171717] border border-[#494949] w-full lg:w-2/3 text-sm rounded-[20px] p-6">
              <CardContent className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white mb-4">📋 Eligibility Snapshot</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Twitter Handle", value: "@maxxpay" },
                    { label: "Followers", value: "2340" },
                    { label: "Tier", value: "3 Silver" },
                    { label: "Eligible for", value: "$3740" },
                    { label: "Required invites to unlock", value: "125" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-[#ffffff0d] p-4 text-gray-300 rounded-lg border border-[#494949]"
                    >
                      <span>{item.label}:</span>
                      <strong className="text-white">{item.value}</strong>
                    </div>
                  ))}
           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#0D0D0D] p-4 rounded-lg border border-[#494949]">
  <p className="text-white mb-2 sm:mb-0">Referral link:</p>
  <input
    type="text"
   
    className="bg-[#0D0D0D] text-gray-400 text-sm py-2 rounded-lg flex-1 border-none outline-none"
    readOnly
    value="https://gigsol.fun/ref/yourhandle"
  />
  <button className="bg-[#30EAF7] text-black font-medium px-4 py-2 rounded-lg">
    Copy
  </button>
</div>
                </div>
              </CardContent>
            </Card>

            {/* Invite Tracker */}
            <Card className="bg-gray-900 border border-purple-600 w-full lg:w-1/3 text-sm h-fit rounded-[20px] p-6">
              <CardContent>
                <h3 className="text-lg font-semibold text-white mb-4">📩 Invite Tracker</h3>
                <p className="text-white">
                  Invites: <strong>82</strong> / 100 required
                </p>
                <div className="relative w-full my-8 h-[3px] bg-[#ffffff80] rounded-[10px]">
                  <Progress
                    value={82}
                    max={100}
                    className="h-[3px] bg-[#30EAF7] rounded-[10px]"
                  />
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    Unlocked Status: <span className="text-red-500">🔒 Locked</span>
                  </p>
                  <p>
                    Locked reward: <strong>$2,500 in $GSOL</strong>
                  </p>
                
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formula Reference Section */}
          <Card className="bg-black border-none w-full lg:w-2/3 text-sm rounded-[20px] lg:p-6">
            <CardContent>
              <h3 className="text-lg text-white font-semibold mb-4">📊 Formula Reference</h3>
              {/* Table Header */}
              <div className="flex justify-between items-center bg-[#ffffff1a] p-4 rounded-t-lg text-gray-300 font-medium">
                <span className="w-1/3">Twitter Handle</span>
                <span className="w-1/3 text-center">Reward Value</span>
                <span className="w-1/3 text-right">Invite Target</span>
              </div>
              {/* Table Rows */}
              <div className="flex flex-col gap-4">
                {[
                  { handle: "2K+", reward: "$500", target: "20 invites" },
                  { handle: "10K+", reward: "$2,500", target: "100 invites" },
                  { handle: "50K+", reward: "$12,500", target: "500 invites" },
                  { handle: "100K+", reward: "$25,000", target: "1,000 invites" },
                  { handle: "1M+", reward: "$250,000", target: "10,000 invites" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center bg-[#ffffff0d] p-4 text-gray-300 ${
                      idx === 0 ? "rounded-t-none" : ""
                    } ${idx === 4 ? "rounded-b-lg" : ""}`}
                  >
                    <span className="w-1/3">{row.handle}</span>
                    <span className="w-1/3 text-center">{row.reward}</span>
                    <span className="w-1/3 text-right">{row.target}</span>
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