"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Blog/HeroSection";
import Contents from "@/components/Blog/Contents";
import ByNumber from "@/components/Blog/ByNumber";
import RealWorld from "@/components/Blog/RealWorld";
import Insights from "@/components/Blog/Insights";
import Footer from "@/components/Footer";
export default function client() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Contents />
      <ByNumber />
      <RealWorld />
      <Insights />
      <Footer />
    </>
  );
}
