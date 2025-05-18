"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Services from "@/components/Services";
import Learn from "@/components/Learn";
import Proposal from "@/components/Proposal";
import CaseStudies from "@/components/CaseStudies";
import Blackbox from "@/components/Blackbox";
import Ourwork from "@/components/Ourwork";
import Workprocess from "@/components/Workprocess";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
      <Services />
      <Learn />
      <Proposal />
      <CaseStudies />
      <Blackbox />
      <Ourwork />
      <Workprocess />
    </>
  );
}
