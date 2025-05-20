import Image from "next/image";

export default function Proposal() {
  return (
    <div className="custom-container">
      <div className="bg-[#F3F3F3] flex flex-col lg:flex-row pl-6 lg:pl-15 rounded-3xl gap-10 lg:gap-[250px] mb-20 items-center lg:items-start">
        <div className="flex flex-col mt-10 lg:mt-20 text-center lg:text-left items-center lg:items-start px-4">
          <p className="text-[24px] sm:text-[30px] font-semibold rounded-xl">
            Let&apos;s make this happen
          </p>
          <p className="font-normal text-sm max-w-[380px] mt-5">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="text-white cursor-pointer hover:bg-slate-900 transition duration-300 bg-black rounded-xl px-3 sm:px-6 py-1 sm:py-3 mt-4 sm:w-auto max-w-[250px]">
            Get your free proposal
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/proposal.png"
            alt="Logo"
            width={309}
            height={305}
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[309px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
