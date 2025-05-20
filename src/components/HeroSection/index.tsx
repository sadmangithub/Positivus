import Image from "next/image";
export default function Hero() {
  return (
    <div className="custom-container px-4">
      <div className="flex flex-col-reverse lg:flex-row mt-7 items-center lg:items-start justify-between">
        <div className="flex flex-col text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-[#000000] text-3xl sm:text-4xl lg:text-[40px] font-bold max-w-full lg:max-w-[380px]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-[#000000] font-normal text-sm sm:text-base max-w-full lg:max-w-[300px] pt-4">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="text-white cursor-pointer hover:bg-slate-900 transition duration-300 bg-black rounded-xl px-6 py-3 mt-6 w-full sm:w-auto max-w-[200px] self-center lg:self-start">
            Book a consultation
          </button>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:ml-8">
          <Image
            src="/mic.png"
            alt="Mic"
            width={500}
            height={515}
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
