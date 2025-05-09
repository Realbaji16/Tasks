'use client'

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import Frame from "../tasks/sections/Frame/Frame";

export default function Influencer() {
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
      <div className="bg-black w-[90%] mx-auto flex">
        {/* Left Sidebar */}
        <Frame className="hidden lg:block" />

        {/* Right Content Area */}
        <div className="w-full md:w-3/4 flex mt-12 flex-col gap-6">
          {/* Influencer Banner */}
          <Card className="bg-gradient-to-r from-[#504CFF] to-[#480090] p-6 text-white border-none rounded-[20px] overflow-hidden">
            <CardContent className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">
                Become a Gigsol Influencer – Claim up to $1M in Airdrops 🏆
              </h2>
              <p className="text-sm">
                Get rewarded based on your Twitter audience size. Get rewards by bringing your community.
              </p>
              <button className="bg-white text-black flex rounded-3xl px-4 py-2 w-fit mt-2 font-medium">
                Connect Twitter
              </button>
            </CardContent>
          </Card>

          {/* Rewards + Invite Tracker Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Formula Reference */}
            <Card className="bg-black border-none w-full lg:w-2/3 text-sm rounded-[20px] ">
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
            {/* Invite Tracker */}
            <Card className="bg-gray-900 border border-purple-600 w-full lg:w-1/3 text-sm rounded-[20px] p-6 mb-8">
              <CardContent>
                <h3 className="text-lg font-semibold text-white mb-4">📩 Invite Tracker</h3>
                <p className="text-white">
                  Invites: <strong>82</strong> / 100 required
                </p>
                 <div className="relative w-[296px] my-8 h-[3px] bg-[#ffffff80] rounded-[10px]">
                                    <Progress
                                      value={33}
                                      className="w-[130px] h-[3px] bg-[#30EAF7] rounded-[10px]"
                                    />
                                  </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    Unlocked Status: <span className="text-red-500">🔒 Locked</span>
                  </p>
                  <p>
                    Locked reward: <strong>$2,500 in $GSOL</strong>
                  </p>
                  <p>
                    Next Milestone: <strong>18 more to go</strong>
                  </p>
                  <p>
                    Est. Launch Drop: <strong>May 20, 2025</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}