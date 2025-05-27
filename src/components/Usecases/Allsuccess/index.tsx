import Image from "next/image";

export default function Allsuccess() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] sm:items-center text-[24px] md:text-[30px] font-semibold rounded px-1">
          All Success Stories
        </p>
        <p className="font-normal sm:items-center text-sm max-w-[400px]">
          Explore real life example of our Proven Digital Marketing success
          through Our Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border border-black rounded-2xl p-10 mb-20">
        <div className="p-6 border-b border-black lg:border-b-0 lg:border-r">
          <p className="font-semibold text-[20px]">E-Commerce Fashion Brand</p>
          <p className="mt-4 w-[250px]">
            We implemented a tailored SEO strategy that boosted organic search
            rankings, leading to a 150% increase in website traffic and a 50%
            rise in online sales within six months.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-b-0 lg:border-r">
          <p className="font-semibold text-[20px]">Local Resturant Chain</p>
          <p className="mt-4 w-[250px]">
            By optimizing local SEO and enhancing Google My Buisness profile,We
            increased visibility driving a 300% boost in online rservations and
            food traffic
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="font-semibold text-[20px]">Health Care Provider</p>
          <p className="mt-4 w-[250px]">
            Through content optimization and targeted keyword strategy, we
            helped a healthcare provider rank on the first page for critical
            services, resulting in a 180% increase in inquiries and patient
            bookings.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-r border-t lg:border-b-0">
          <p className="font-semibold text-[20px] mt-10">
            E-Commerce Fashion Brand
          </p>
          <p className="mt-4 w-[250px]">
            We implemented a tailored SEO strategy that boosted organic search
            rankings, leading to a 150% increase in website traffic and a 50%
            rise in online sales within six months.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-r lg:border-t lg:border-b-0">
          <p className="font-semibold text-[20px] mt-10">
            Local Resturant Chain
          </p>
          <p className="mt-4 w-[250px]">
            By optimizing local SEO and enhancing Google My Buisness profile,We
            increased visibility driving a 300% boost in online rservations and
            food traffic
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>

        <div className="p-6 border-black lg:border-t  w-full">
          <p className="font-semibold text-[20px] mt-10 ">
            Health Care Provider
          </p>
          <p className="mt-4 w-[250px]">
            Through content optimization and targeted keyword strategy, we
            helped a healthcare provider rank on the first page for critical
            services, resulting in a 180% increase in inquiries and patient
            bookings.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
