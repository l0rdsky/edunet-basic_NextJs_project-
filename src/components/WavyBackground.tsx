"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import AnimatedTooltipPreview from "@/components/AnimatedTooltipPreview";
export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="ml-[600px] text-2xl md:text-4xl lg:text-4xl text-white font-bold  text-center">
       Our Instructors
      </p>
    <AnimatedTooltipPreview></AnimatedTooltipPreview>
    </WavyBackground>
  );
}
