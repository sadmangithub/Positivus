"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Usecases/Herosection";
import Featured from "@/components/Usecases/Featured";
import Allsuccess from "@/components/Usecases/Allsuccess";
import Testimonial from "@/components/Usecases/Testimonial";
import Proposal from "@/components/Usecases/Proposal";
import Footer from "@/components/Usecases/Footer";
export default function Usecases() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <Allsuccess />
      <Testimonial />
      <Proposal />
      <Footer />
    </>
  );
}
