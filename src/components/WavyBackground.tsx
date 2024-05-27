"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

import AnimatedTooltipPreview from "@/components/AnimatedTooltipPreview";
export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
    <h2 className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mt-16">Meet Our Instructors</h2>
    <p className=" text-base md:text-lg text-white text-center mt-12">Discover the talented professionals who will guide your tech journey</p>
    <div className="flex flex-row items-center justify-center mb-36 mr-96 w-full">
        <AnimatedTooltipPreview />
    </div>
</WavyBackground>
  );
}
