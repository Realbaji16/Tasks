import React from "react";
import { Card, CardContent } from "../../components/ui/card";

import Frame from "../tasks/sections/Frame/Frame";

export default function Task() {
  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: "0", width: "108px", height: "94px" },
  ];

  return (
    <main className="bg-black flex flex-row justify-center w-full min-h-screen">
      <div className="bg-black w-[90%] flex">
        <Frame />
        <div className="flex-1 p-5">
          {/* Top Banner */}
             <Card className="w-full border-none h-[94px] bg-[#171717] rounded-[20px] overflow-hidden mb-7">
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
          <Card className="w-full border-none h-[60%] bg-[#171717] rounded-[20px] overflow-hidden">
  <CardContent className="p-0">
    {/* Gradient Header */}
    <div className="w-full h-[200px] bg-gradient-to-r from-[#6E3FF3] to-[#BC52EE] rounded-t-[20px] px-12 flex items-center">
      <div className="text-white font-semibold text-lg">
        Leaderboard
        <div className="flex mt-2"><img src="/usa.svg" alt="User" className="w-6 h-6 rounded-full" /> <div className="text-sm font-normal text-white/70">1025 Participants</div></div>
      </div>
    </div>

    {/* Leaderboard Content */}
    <div className=" px-12 py-6">
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
  );
}
