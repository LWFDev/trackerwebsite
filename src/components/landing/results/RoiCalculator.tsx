
import React from "react";
import { Button } from "@/components/ui/button";
import { ChartBar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const RoiCalculator = () => {
  return (
    <ScrollReveal delay={200} className="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <ChartBar size={28} className="mr-4 text-[#D4AF37]" />
          <h3 className="text-2xl font-bold">Calculate Your ROI</h3>
        </div>
        <p className="text-gray-300 mb-6">
          See how much time and money your business could save by implementing Tracker's workflow automation solution.
        </p>
        <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300">Orders per month</label>
              <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                <option>50-100</option>
                <option>100-500</option>
                <option>500-1000</option>
                <option>1000+</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300">Team size</label>
              <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                <option>1-5</option>
                <option>6-15</option>
                <option>16-50</option>
                <option>50+</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300">Current software</label>
              <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                <option>Manual process</option>
                <option>Spreadsheets</option>
                <option>Other software</option>
              </select>
            </div>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#F2D675] text-black w-full">Calculate Savings</Button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">
            On average, customers save 15-20 hours per week on administrative tasks after implementing Tracker.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default RoiCalculator;
