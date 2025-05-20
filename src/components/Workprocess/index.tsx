import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough research and craft a strategy tailored to your business goals.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We implement the strategy using best practices and monitor execution closely.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "Performance is continuously monitored and optimized for maximum ROI.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "You receive regular, transparent updates on performance and strategy adjustments.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We evolve and improve strategies based on insights to sustain growth.",
  },
];

export default function Workprocess() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="custom-container">
      {steps.map((step, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`rounded-3xl sm:rounded-4xl px-4 sm:px-8 mb-4 border-black border-b-4 transition-all duration-300 ease-in-out ${
              isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-semibold text-[28px] sm:text-[35px]">
                  {step.number}
                </span>
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
