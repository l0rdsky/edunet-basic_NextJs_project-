import HeroSection from "@/components/HeroSection";
import StickyScrollRevealDemo from "@/components/StickyScrollBar";
import Footer from "@/components/Footer";
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
    <Footer></Footer>
    {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
   </> 
  );
}
