import Image from "next/image";
export default function Explore() {
  return (
    <div className="custom-container">
      <div className="bg-[#B9FF66] border border-b-4 border-black flex flex-col lg:flex-row px-6 lg:px-16 rounded-3xl gap-10 lg:gap-[250px] mb-20 items-center lg:items-start">
        <div className="flex flex-col mt-8 lg:mt-10 text-center lg:text-left items-center lg:items-start w-full lg:w-1/3">
          <p className="text-[22px] md:text-[30px] font-semibold rounded-xl">
            Join Our Team
          </p>
          <p className="font-normal text-sm w-[470px] mt-5">
            At Positivus, we thrive on innovation and collaboration. We&apos;re
            always looking for passionate individuals to join our team and help
            businesses grow. Ready to make an impact?
          </p>
          <button className="text-white cursor-pointer hover:bg-slate-900 transition duration-300 bg-black rounded-xl px-3 sm:px-6 py-1 sm:py-3 mt-4 sm:w-auto max-w-[250px]">
            Explore Careers
          </button>
        </div>
        <div className="flex justify-center lg:justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/Aboutus/Explore.JPG"
            alt="Logo"
            width={228}
            height={214}
            className="w-fit sm:w-[270px] md:w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
