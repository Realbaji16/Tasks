import { TwitterIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/card";
import { Progress } from "../../../../components/ui/progress";

export default function Buildcore({ className }: { className?: string }) {
  // Task data for mapping
  const communityTasks = [
    {
      id: 1,
      title: (
        <>
          <span className="text-white">Follow </span>
          <span className="text-[#30EAF7]">@Gigsol</span>

        </>
      ),
    
    },
    {
      id: 2,
      title: (
        <>
          <span className="text-white">Join </span>
         
          <span className="text-white"> Telegram</span>
        </>
      ),
      iconSrc: "https://c.animaapp.com/mae39egt4IHjtX/img/telegram.svg",
      iconAlt: "Telegram",
      iconWidth: "12.33px",
      iconHeight: "12.33px",
      points: 100,
    },
    {
      id: 3,
      title: (
        <>
          <span className="text-white">Join </span>
         
          <span className="text-white"> Discord</span>
        </>
      ),
      iconSrc:
        "https://c.animaapp.com/mae39egt4IHjtX/img/ic-baseline-discord.svg",
      iconAlt: "Discord",
      iconWidth: "14.5px",
      iconHeight: "14.5px",
      points: 100,
    },
  ];
  const actionCardsRow1 = [
    {
      title: (
        <>
          <span className="text-white">Follow </span>
          <span className="text-[#30EAF7]">@Gigsol</span> on
          
        </>
      ),
      points: 100,
      iconUrl:
        "https://c.animaapp.com/mae39egt4IHjtX/img/clip-path-group-1.png",
    },
    {
      title: "Join Telegram",
      points: 250,
      iconUrl:
        "./tgg.svg",
    },
    {
      title: "Join Discord",
      points: 250,
      iconUrl:
        "./disc.svg",
    },
  ];


  return (
    <section className="w-full lg:w-[90%] mb-8">
    <div className="relative">
      {/* Header section */}
      <Card className="w-full border-none h-[152px] rounded-[20px] overflow-hidden bg-cover bg-center mb-[-45px] z-10 relative"
        style={{ backgroundImage: "url('./imgbg.svg')" }}
      >
        <CardContent className="p-0">
          <div className="relative w-full h-full p-[35px] md:pl-[57px]">
            <div className="relative">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[0] leading-[normal]">
              Build core community channels + social follows
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
};
