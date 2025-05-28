"use client";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Service/Herosection";
import Engine from "@/components/Service/Engine";
import SEO from "@/components/Service/SEO";
import Use from "@/components/Service/Use";
import Casebox from "@/components/Service/Casebox";
export default function Service() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Engine />
      <SEO />
      <Use />
      <Casebox />
    </>
  );
}
