import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-[#F3F3F3] rounded-3xl sm:rounded-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 py-15 px-6 sm:px-10 lg:px-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Aboutus/trophy.png"
              alt="Trophy"
              width={350}
              height={350}
              className="w-full max-w-[300px] sm:max-w-[350px] h-auto"
            />
          </div>
          <div className="flex flex-col lg:text-left">
            <h1 className="text-black font-semibold text-3xl lg:max-w-[350px] sm:text-4xl lg:text-[40px] leading-tight">
              Together for success
            </h1>
            <p className="text-sm sm:text-base pt-6 sm:pt-8 max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
              At Positivus, the organization helps businesses grow by combining
              creativity, innovation, and data-driven strategies. Together, they
              aim to build a future of shared success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
