import Image from "next/image";
export default function Casebox() {
  return (
    <div className="custom-container">
      <div className="bg-[#191A23] flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white rounded-4xl pt-3 pb-8 mb-20">
        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <h2 className="text-white text-[20px] font-bold max-w-[200px]">
            E-commerce Fashion Brand
          </h2>
          <p className="text-white font-normal text-sm max-w-[230px] mt-4 mx-auto md:mx-0">
            We implemented a tailored SEO strategy that boosted organic search
            rankings, leading to a 150% increase in website traffic and a 50%
            rise in online sales within six months.
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start cursor-pointer">
            <p className="text-[#B9FF66] hover:underline">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>

        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <h2 className="text-white text-[20px] font-bold max-w-[200px]">
            Local Restaurant Chain
          </h2>
          <p className="text-white font-normal text-sm max-w-[250px] mt-4 mx-auto md:mx-0">
            By optimizing local SEO and enhancing Google My Business profiles,
            we increased visibility, driving a 300% boost in online reservations
            and foot traffic.
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start cursor-pointer">
            <p className="text-[#B9FF66] hover:underline">Learn more</p>
            <Image src="/Greenarrow.png" alt="Logo" width={22} height={20} />
          </div>
        </div>

        <div className="flex flex-col p-3 sm:p-5 md:p-10 text-center md:text-left">
          <h2 className="text-white text-[20px] font-bold">
            Healthcare Provider
          </h2>
          <p className="text-white font-normal text-sm max-w-[250px] mt-4 mx-auto md:mx-0">
            Through content optimization and targeted keyword strategy, we
            helped a healthcare provider rank on the first page for critical
            services, resulting in a 180% increase in inquiries and patient
            bookings.
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
