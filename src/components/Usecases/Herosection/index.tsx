import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="custom-container">
      {/* <div className="px-4 sm:px-6 lg:px-8 mt-10"> */}
      <div className="bg-white lg:bg-[#F3F3F3] rounded-3xl sm:rounded-4xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-15 px-6 sm:px-10 lg:px-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Usecases/Proven.JPG"
              alt="Trophy"
              width={350}
              height={350}
              className="w-full max-w-[300px] sm:max-w-[350px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center lg:text-left">
            <h1 className="text-black font-semibold text-3xl lg:max-w-[350px] sm:text-4xl lg:text-[40px] leading-tight">
              Proven Success Stories
            </h1>
            <p className="text-sm sm:text-base pt-6 sm:pt-8 max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
              See how our innovative digital marketing strategies have
              transformed businesses. Whether through SEO, PPC, social media, or
              web design, these use cases highlight the tangible impact of our
              work. Explore the successes and envision what we can achieve
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
