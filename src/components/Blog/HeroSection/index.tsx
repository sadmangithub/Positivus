import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="custom-container">
      <div className="bg-[#F3F3F3] rounded-3xl sm:rounded-4xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-15 px-6 sm:px-10 lg:px-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/mic.png"
              alt="mic"
              width={501}
              height={515}
              className="w-fit h-auto"
            />
          </div>
          <div className="flex flex-col justify-center lg:text-left">
            <p className="bg-slate-200 text-slate-500 p-1 text-sm rounded px-4 w-fit mb-10">
              Marketing Strategies
            </p>
            <h1 className="text-black font-semibold text-3xl lg:max-w-[350px] sm:text-4xl lg:text-[40px] leading-tight">
              PPC vs. Organic Marketing: Which one is Right for your Buisness?
            </h1>
            <p className="text-sm sm:text-base pt-6 sm:pt-8 max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
              PPC and organic marketing each offer unique benefits for driving
              traffic and growing your business. Discover which strategy aligns
              best with your goals and how to strike the perfect balance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 mb-10">
        <div>
          <Image
            src="/Members/Sarah.png"
            alt="Sarah"
            width={50}
            height={50}
            className="w-fit h-auto"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="font-bold text-base">Sarah Kim</p>
          <p className="text-sm">Content Creator</p>
        </div>
      </div>
      <div className="border border-t mb-10"></div>
    </div>
  );
}
