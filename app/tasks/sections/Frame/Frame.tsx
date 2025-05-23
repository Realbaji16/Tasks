'use client';

import { ChartBarIcon, LayoutDashboardIcon, TrophyIcon, LogOutIcon } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export default function Frame({ className }: { className?: string }) {
  // Navigation items data with state
  const [navItems, setNavItems] = useState([
    {
      id: 1,
      name: "Tasks",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
      active: true,
      route: "/tasks",
    },
    {
      id: 2,
      name: "Leaderboard",
      icon: <ChartBarIcon className="w-5 h-5" />,
      active: false,
      route: "/leaderboard",
    },
    {
      id: 3,
      name: "Influencer Rewards",
      icon: <TrophyIcon className="w-5 h-5" />,
      active: false,
      route: "/influencer",
    },
  ]);

  // Handle active state
  const handleActiveState = (id) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <aside
      className={`w-[292px] h-screen sticky top-0 bg-[#171717] rounded-[20px] overflow-hidden border border-solid border-[#494949] m-5 ${className}`}
    >
      {/* Header with logo and collapse button */}
      <div className="flex justify-between items-center p-5">
  <div className="flex items-center gap-[9.56px]">
    <div className="relative w-[40.39px] h-[39.2px] flex items-center justify-center">
      <img
        className="w-[37px] h-8"
        alt="Logo icon"
        src="./gslogo.svg"
      />
    </div>
    <h1 className="font-['Montserrat',Helvetica] font-semibold text-white text-[28.7px]">
      GIGSOL
    </h1>
  </div>
  <img
    className="w-[34px] h-[34px] bg-[#ffffff1a] rounded-[5px]"
    alt="Menu icon"
    src="./arr.svg"
  />
</div>

      {/* Navigation menu */}
      <nav className="mt-12 px-3">
        <ul className="space-y-7">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.route}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-1.5 h-[45px] ${
                    item.active
                      ? "bg-[#ffffff0d] text-white font-semibold"
                      : "bg-transparent text-white font-normal"
                  }`}
                  onClick={() => handleActiveState(item.id)} // Move the onClick handler here
                >
                  {item.icon}
                  <span className="font-['Inter',Helvetica] text-base">
                    {item.name}
                  </span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Card className="w-[239px] h-[117px] absolute bottom-[30%] left-3.5 rounded-[20px] border border-solid border-[#494949] bg-transparent">
        <CardContent className="pl-12 relative h-full">
          <div className="flex items-start p-[19px]  gap-3">
          
            <div>
              <h3 className="font-['Inter',Helvetica] font-medium text-white text-base">
                Myth0x
              </h3>
              <p className="font-['Inter',Helvetica] font-medium text-text-1 text-xs">
              GPoints: 3,250
              </p>
            </div>
          </div>
          <h1 className="absolute bottom-[9px]  h-[25px] rounded-[30px] px-[15px] text-lg font-medium text-white">
          X:@mythhh
          </h1>
        </CardContent>
      </Card>

      {/* Daily challenge card */}
      <Card className="w-[239px] h-[117px] absolute bottom-[15%] left-3.5 rounded-[20px] border border-solid border-[#494949] bg-transparent">
        <CardContent className="p-0 relative h-full">
          <div className="flex items-start p-[19px] gap-3">
            <div className="flex w-10 h-10 items-center justify-center bg-[#d9d9d91a] rounded-[20px]">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-[18px] h-[22px] top-px left-[3px]"
                  alt="TrophyIcon icon"
                  src="https://c.animaapp.com/mae39egt4IHjtX/img/group.png"
                />
              </div>
            </div>
            <div>
              <h3 className="font-['Inter',Helvetica] font-medium text-white text-base">
                Daily challenge
              </h3>
              <p className="font-['Inter',Helvetica] font-medium text-text-1 text-xs">
                Earn up to 1000 points per day
              </p>
            </div>
          </div>
          <div className="relative mt-4">
  <Button className="absolute bottom-[9px] left-14 h-[25px] w-[150px] rounded-[30px] px-[15px] py-2.5 text-xs font-medium [background:linear-gradient(186deg,rgba(0,255,163,1)_0%,rgba(220,31,255,1)_100%)] group overflow-hidden">
    {/* Default Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
      Complete challenge
    </span>
    {/* Hover Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
      Coming Soon
    </span>
  </Button>
</div>


        </CardContent>
      
      </Card>

<Button className="absolute bottom-[10%] left-4 h-[25px] w-[150px] rounded-[30px] px-[120px] py-4 text-xs font-medium bg-white text-black group overflow-hidden">
  <LogOutIcon className="inline-block w-4 h-4 mr-2" /> 
  Log out
</Button>
    </aside>
  );
}