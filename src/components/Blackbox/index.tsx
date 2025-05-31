import Image from "next/image";
export default function Blackbox() {
  return (
    <div className="custom-container">
      <div className="bg-[#191A23] flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white rounded-4xl pt-3 pb-8 mb-20">
        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <p className="text-white font-normal text-sm max-w-[230px] mx-auto md:mx-0">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start cursor-pointer">
            <p className="text-[#B9FF66] hover:underline">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>

        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <p className="text-white font-normal text-sm max-w-[250px] mx-auto md:mx-0">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start cursor-pointer">
            <p className="text-[#B9FF66] hover:underline">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>

        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <p className="text-white font-normal text-sm max-w-[250px] mx-auto md:mx-0">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start cursor-pointer">
            <p className="text-[#B9FF66] hover:underline">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
