import Image from "next/image";
export default function Blackbox() {
  return (
    <div className="custom-container">
      <div className="bg-[#191A23] flex flex-row divide-y md:divide-y-0 md:divide-x divide-white rounded-4xl justify-center items-center pt-3 pb-10 mb-20">
        <div className="flex flex-col p-7">
          <p className=" text-white font-normal text-sm max-w-[230px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex gap-2 mt-4">
            <p className="text-[#B9FF66]">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>

        <div className="flex flex-col p-10">
          <p className=" text-white font-normal text-sm max-w-[250px]">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex gap-2 mt-4">
            <p className="text-[#B9FF66]">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>
        <div className="flex flex-col p-10">
          <p className=" text-white font-normal text-sm max-w-[250px]">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex gap-2 mt-4">
            <p className="text-[#B9FF66]">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
