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
                  <div className="flex items-center gap-2 bg-[#0D0D0D] p-4 rounded-lg border border-[#494949]">
                    <p className="text-white">Referral link:</p>
                    <div className="bg-[#0D0D0D] text-gray-400 text-sm px-4 py-2 rounded-lg flex-1">
                      https://gigsol.fun/ref/yourhandle
                    </div>
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
          <Card className="bg-black border-none w-full lg:w-2/3 text-sm rounded-[20px] p-6">
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
  );
}