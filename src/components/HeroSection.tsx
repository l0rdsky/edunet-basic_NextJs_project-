"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import CardHover from "@/components/CardHover";
export default function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mt-48 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       Empowering the Next Generation <br></br>
        <Highlight className="text-white dark:text-white">
          {" "} of Tech Leaders<br></br>
        </Highlight>
      </motion.h1>
      <CardHover></CardHover>
    </HeroHighlight>
  );
}
