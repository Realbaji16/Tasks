import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

export default function Groupwrapper() {
  const actionCardsRow1 = [
    {
      title: "Create 30s Video",
      points: 100,
      iconUrl:
        "https://c.animaapp.com/mae39egt4IHjtX/img/clip-path-group-1.png",
    },
    {
      title: "Write a Thread",
      points: 250,
      iconUrl:
        "https://c.animaapp.com/mae39egt4IHjtX/img/clip-path-group-2.png",
    },
  ];

  return (
    <section className="w-full mb-8">
      <div className="relative">
        {/* Header section */}
        <Card className="w-full border-none h-[152px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[#504CFF] to-[#480090] bg-cover mb-[-45px] z-10 relative">
          <CardContent className="p-0">
            <div className="relative w-full h-full p-[35px] md:pl-[57px]">
              <div className="relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[0] leading-[normal]">
                Power Actions: Show You're a Degen
                </h2>

                <div className="flex flex-col w-[411px] items-start gap-[7px] mt-[38px]">
                  <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xs tracking-[0] leading-[normal]">
                    1/3
                  </div>
                  <div className="relative w-[290px] md:w-[396px] h-[3px] bg-[#ffffff80] rounded-[10px]">
                    <Progress
                      value={33}
                      className="w-[130px] h-[3px] bg-primary-blue rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main content section */}
        <Card className="w-full border-none bg-[#161616] rounded-[20px] overflow-hidden pt-[79px]">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row items-center gap-[11px] px-[27px] mb-[21px]">
              {actionCardsRow1.map((card, index) => (
                <Card
                  key={index}
                  className="relative w-[328px] h-[97px] rounded-[20px] overflow-hidden border border-solid border-[#494949]"
                >
                  <CardContent className="p-0">
                    <div className="absolute w-[74px] h-[72px] top-[13px] left-[243px] rounded-[20px] [background:linear-gradient(186deg,rgba(0,255,163,1)_0%,rgba(220,31,255,1)_100%)]">
                      <div className="relative w-[46px] h-10 top-[13px] left-[15px]">
                        <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[23px] tracking-[0] leading-[normal]">
                          {card.points}
                        </div>
                        <div className="left-3 absolute top-[25px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xs tracking-[0] leading-[normal]">
                          pts
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[156px] items-start gap-3.5 absolute top-[26px] left-[21px]">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[normal]">
                        {card.title}
                      </div>
                      <div className="flex w-[21.78px] items-end justify-center relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[3.29px] relative flex-[0_0_auto]">
                          <div
                            className="relative w-[10.61px] h-[10.61px]"
                            style={{
                              backgroundImage: `url(${card.iconUrl})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
