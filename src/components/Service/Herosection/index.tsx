import Image from "next/image";
export default function Herosection() {
  return (
    <div className="custom-container">
      <div className="bg-white lg:bg-[#F3F3F3] rounded-3xl sm:rounded-4xl mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-15 px-6 sm:px-10 lg:px-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Service/Expert.JPG"
              alt="Market"
              width={320}
              height={320}
              className="w-full max-w-[300px] sm:max-w-[350px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center lg:text-left">
            <h1 className="text-black font-semibold text-3xl lg:max-w-[350px] sm:text-4xl lg:text-[40px] leading-tight">
              Expert Digital Marketing Services
            </h1>
            <p className="text-sm sm:text-base pt-6 sm:pt-8 max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
              Unlock Your Buisness&apos;s full potential with tailored
              strategies designed to drive growth and deliver result.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src="/Learn/BlackArrow.png"
          alt="Arrow Icon"
          width={35}
          height={35}
        />
        <p className="font-normal mt-1 hover:underline cursor-pointer">Back</p>
      </div>
    </div>
  );
}
