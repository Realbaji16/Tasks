import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import Frame from "../tasks/sections/Frame/Frame";

export default function Tasktimeline() {
  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: 0, width: "108px", height: "94px" },
  ];

  const tasks = [
    { title: "Retweet Post", points: 100 },
    { title: "Post on Timeline", points: 250 },
    { title: "Retweet another post", points: 100 },
    { title: "Comment on post", points: 100 },
    { title: "Quote tweet", points: 100 },
  ];

  return (
    <main className="bg-black flex flex-row justify-center w-full font-inter">
      <div className="bg-black w-[90%] flex">
        <Frame />

        <div className="flex-1 p-5">
          {/* Top Card */}
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

          {/* Content Section */}
          <div className="grid grid-cols-5 w-[80%] gap-6">
  {/* Left: Task Group and List */}
  <div className="col-span-2 space-y-4">
    {/* Gradient Task Group Card */}
    <div className="bg-gradient-to-r from-[#504CFF] to-[#480090] rounded-[20px] p-4 text-white w-full">

      <p className="text-lg font-semibold">
        Boost & Shill: Light Social Actions
      </p>
      <p className="text-sm mb-1 mt-4">1/3</p>
      <div className="relative w-[296px]  h-[3px] bg-[#ffffff80] rounded-[10px]">
                    <Progress
                      value={33}
                      className="w-[130px] h-[3px] bg-primary-blue rounded-[10px]"
                    />
                  </div>
    </div>

    {/* Task List */}
    {tasks.map((task, i) => (
  i === 2 ? (
    // Gradient border wrapper
    <div className="p-[2px] rounded-[20px] bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF]">
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
    <div
      key={i}
      className="flex items-center justify-between bg-[#171717] px-4 py-2 rounded-[20px] text-white"
    >
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
  )
))}
  </div>

  {/* Right: Task Detail */}
  <div className="col-span-3 bg-[#171717] rounded-[20px] p-6 text-white w-full h-[70%] ">
    <div className="text-center text-3xl font-bold bg-gradient-to-r from-[#504CFF] to-[#480090] rounded-[14px] mx-auto w-[90%] py-4 mb-4">
      100 <span className="text-sm">pts</span>
    </div>
    <p className="my-8 flex justify-center items-center gap-2">
  <img src="/twe.svg" alt="Twitter Icon" className="" />
  Find someone yappin’ about Gigsol <br /> and smash that RT
</p>

    <div className="relative w-[90%] mx-auto mb-3">
  <input
    type="text"
    placeholder="https://x.com/gigsol/status/1913..."
   
    className="bg-[#0D0D0D] w-full p-4 pb-24 pr-24 rounded-[10px] text-gray-400 text-sm"
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
  );
}
