import React from "react";
import { Card, CardContent } from "../../components/ui/card";


import Buildcore from "./sections/BuildCore/Buildcore";
import Wrapper from "./sections/Wrapper/Wrapper";
import Groupwrapper from "./sections/GroupWrapper/Groupwrapper";
import Frame from "./sections/Frame/Frame";

export default function Task() {
  // Array of question mark images for easier mapping
  const questionMarkImages = [
    { top: 0, left: "143px", width: "101px", height: "94px" },
    { top: 1, left: "72px", width: "108px", height: "90px" },
    { top: 0, left: 0, width: "108px", height: "94px" },
  ];

  return (
    <main className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-[90%]  flex">
        <Frame />
        <div className="flex-1 p-5">
          <Card className="w-full h-[94px] bg-black-2 rounded-[20px] overflow-hidden mb-7">
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
  );
};
