import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Are there any additional fees or charges that may apply?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    title: "Can I change or cancel my plan at any time?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    title: "Do you offer a free trial or consultation?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    title: "How do you bill and invoice your clients?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    title: "Are your services guaranteed to deliver results?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    title: "Do you offer contract-based or monthly retainer-based pricing?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
];

export default function Workprocess() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="custom-container">
      <div className="flex flex-col items-center md:items-start md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] text-[22px] md:text-[30px] font-semibold rounded px-1 w-fit">
          Frequently Asked Questions:
        </p>
      </div>
      {steps.map((step, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`rounded-3xl sm:rounded-4xl px-4 sm:px-8 mb-6 p-4 border-black border-b-4 transition-all duration-300 ease-in-out ${
              isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <h2 className="font-bold text-[16px] sm:text-[18px]">
                  {step.title}
                </h2>
              </div>

              <div className="mt-4 sm:mt-0">
                <Image
                  src={isOpen ? "/minus.png" : "/plus.png"}
                  alt={isOpen ? "Collapse" : "Expand"}
                  width={24}
                  height={24}
                  className={`w-6 sm:w-8 h-6 sm:h-8 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-black pt-4 pb-6 text-sm sm:text-base">
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
