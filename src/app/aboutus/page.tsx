"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/About/HeroSection";
import Ourimpact from "@/components/About/Ourimpact";
import OurJourney from "@/components/About/OurJourney";
import Corevalues from "@/components/About/Corevalues";
import Johnsmith from "@/components/About/Johnsmith";
import Award from "@/components/About/Award";
import Explore from "@/components/About/Explore";
import Footer from "@/components/About/Footer";
export default function Aboutus() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ourimpact />
      <OurJourney />
      <Corevalues />
      <Johnsmith />
      <Award />
      <Explore />
      <Footer />
    </>
  );
}
