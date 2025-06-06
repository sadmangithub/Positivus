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
import Members from "@/components/Members";
import Team from "@/components/Team";
import Testslider from "@/components/Testslider";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
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
      <Team />
      <Members />
      <Testslider />
      <Contactus />
      <Footer />
    </>
  );
}
