import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import Frame from "../tasks/sections/Frame/Frame";

export default function Taskthread() {
  return (
    <main className="bg-black flex flex-row justify-center w-full font-inter min-h-screen">
      <div className="bg-black w-[90%] flex">
        {/* Left Sidebar */}
        <Frame />

        {/* Right Content Area */}
        <div className="flex justify-center items-center w-3/4 h-screen">
  {/* Connect Twitter Section */}
  <Card className="bg-gray-900 p-6 text-white border border-[#494949] rounded-[20px] w-full max-w-[500px] ">
    <CardContent className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-8">
        <img src="./bak.svg" alt="back"/>
        <button className="text-gray-400 hover:text-white">✖</button>
      </div>
      <button className="bg-gradient-to-r from-[#504CFF] to-[#480090] text-white font-medium py-4 px-4 rounded-lg">
        Connect Twitter
      </button>
      <div className="relative rounded-3xl my-3">
        <input
          type="text"
          placeholder="https://x.com/gigsol/status/1913..."
          className="bg-[#0D0D0D] w-full p-4 pr-24 rounded-3xl text-gray-400 text-sm"
        />
        <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#00D1FF] text-black font-semibold px-4 py-1.5 text-sm rounded-full">
          connect X
        </button>
      </div>
    </CardContent>
  </Card>
</div>
      </div>
    </main>
  );
}