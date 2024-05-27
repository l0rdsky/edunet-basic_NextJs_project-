"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import whyChooseUsContent from "@/data/whychooseus"

export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={whyChooseUsContent} />
    </div>
  );
}
