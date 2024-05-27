import HeroSection from "@/components/HeroSection";
import StickyScrollRevealDemo from "@/components/StickyScrollBar";

import WavyBackgroundDemo from "@/components/WavyBackground";
import LampDemo from "@/components/Lampdemo";


export default function Home() {
  return (
   <>
  
    <HeroSection></HeroSection>
    <StickyScrollRevealDemo></StickyScrollRevealDemo>
    {/* <GridBackgroundDemo>
    </GridBackgroundDemo> */}
    <LampDemo>
    </LampDemo>
    <WavyBackgroundDemo></WavyBackgroundDemo>
    {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
   </> 
  );
}
