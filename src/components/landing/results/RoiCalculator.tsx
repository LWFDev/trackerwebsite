
import React from "react";
import { Button } from "@/components/ui/button";
import { ChartBar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const RoiCalculator = () => {
  return (
    <ScrollReveal delay={200} className="bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 dark:border-zinc-800 light:border-gray-200 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <ChartBar size={28} className="mr-4 text-gold" />
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">Calculate Your ROI</h3>
        </div>
        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6">
          See how much time and money your business could save by implementing Tracker's workflow automation solution.
        </p>
        <div className="bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-gray-50/50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300 dark:text-gray-300 light:text-gray-700">Orders per month</label>
              <select className="bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-gray-300 text-white dark:text-white light:text-gray-900 rounded-md py-2 px-3 w-full">
                <option>50-100</option>
                <option>100-500</option>
                <option>500-1000</option>
                <option>1000+</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300 dark:text-gray-300 light:text-gray-700">Team size</label>
              <select className="bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-gray-300 text-white dark:text-white light:text-gray-900 rounded-md py-2 px-3 w-full">
                <option>1-5</option>
                <option>6-15</option>
                <option>16-50</option>
                <option>50+</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1 text-gray-300 dark:text-gray-300 light:text-gray-700">Current software</label>
              <select className="bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-gray-300 text-white dark:text-white light:text-gray-900 rounded-md py-2 px-3 w-full">
                <option>Manual process</option>
                <option>Spreadsheets</option>
                <option>Other software</option>
              </select>
            </div>
          </div>
          <Button className="bg-gold hover:bg-gold-light text-gold-foreground w-full">Calculate Savings</Button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
            On average, customers save 15-20 hours per week on administrative tasks after implementing Tracker.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default RoiCalculator;
