import Image from "next/image";
export default function Proposal() {
  return (
    <div className="custom-container">
      <div className="bg-[#B9FF66] flex flex-col lg:flex-row px-6 lg:px-16 rounded-3xl gap-10 lg:gap-[250px] mb-20 items-center lg:items-start">
        <div className="flex flex-col mt-8 lg:mt-10 text-center lg:text-left items-center lg:items-start w-full lg:w-1/4">
          <p className="text-[23px] md:text-[30px] w-[230px] md:w-[600px] mt-5 lg:mt-10 font-bold rounded-xl">
            Let&apos;s Create your Next Success Story
          </p>
          <p className="font-normal text-sm w-[250px] md:w-[350px] mt-5">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="text-white cursor-pointer hover:bg-slate-900 transition duration-300 bg-black rounded-xl px-2 sm:px-6 py-1 sm:py-3 mt-4 sm:w-auto max-w-[250px]">
            Get your free proposal
          </button>
        </div>
        <div className="flex justify-center lg:justify-end w-fit lg:w-1/2">
          <Image
            src="/proposal.png"
            alt="Logo"
            width={309}
            height={305}
            className="w-fit sm:w-[270px] md:w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
