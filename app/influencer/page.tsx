import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import Frame from "../tasks/sections/Frame/Frame";

export default function Taskthread() {
  const tasks = [
    { title: "Create 3os Video", points: 100 },
    { title: "Write a Thread", points: 250 },
  ];

  return (
    <main className="bg-black flex flex-row justify-center w-full font-inter min-h-screen">
      <div className="bg-black w-[90%] flex flex-col md:flex-row justify-between py-8 gap-6 text-white">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4">
          <Frame />
        </div>

        {/* Right Content Area */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          {/* Influencer Banner */}
          <Card className="bg-gradient-to-r from-purple-700 to-purple-400 p-6 text-white shadow-lg">
            <CardContent className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">
                Become a Gigsol Influencer – Claim up to $1M in Airdrops 🏆
              </h2>
              <p className="text-sm">
                Get rewarded based on your Twitter audience size. Get rewards by bringing your community.
              </p>
              <button className="bg-white text-black rounded-md px-4 py-2 w-fit mt-2 font-medium">
                ✕ Connect Twitter
              </button>
            </CardContent>
          </Card>

          {/* Rewards + Invite Tracker Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Formula Reference Table */}
            <Card className="bg-black border border-gray-700 w-full lg:w-2/3 text-sm">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">📊 Formula Reference</h3>
                <div className="grid grid-cols-3 gap-4 font-medium text-white border-b pb-2 border-gray-600">
                  <span>Twitter Handle</span>
                  <span>Reward Value</span>
                  <span>Invite Target</span>
                </div>
                {[
                  { handle: "2K+", reward: "$500", target: "20 invites" },
                  { handle: "10K+", reward: "$2,500", target: "100 invites" },
                  { handle: "50K+", reward: "$12,500", target: "500 invites" },
                  { handle: "100K+", reward: "$25,000", target: "1,000 invites" },
                  { handle: "1M+", reward: "$250,000", target: "10,000 invites" },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-4 py-2 text-gray-300 border-b border-gray-700">
                    <span>{row.handle}</span>
                    <span>{row.reward}</span>
                    <span>{row.target}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Invite Tracker */}
            <Card className="bg-gray-900 border border-purple-600 w-full lg:w-1/3 text-sm">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">📩 Invite Tracker</h3>
                <p>Invites: <strong>82</strong> / 100 required</p>
                <Progress value={82} className="my-3" />
                <div className="space-y-2 text-gray-300">
                  <p>Unlocked Status: <span className="text-red-500">🔒 Locked</span></p>
                  <p>Locked reward: <strong>$2,500 in $GSOL</strong></p>
                  <p>Next Milestone: <strong>18 more to go</strong></p>
                  <p>Est. Launch Drop: <strong>May 20, 2025</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
