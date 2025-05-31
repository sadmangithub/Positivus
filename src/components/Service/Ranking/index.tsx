import Image from "next/image";
export default function Ranking() {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-2 p-10 mt-15 rounded-3xl border border-b-4 border-black mb-20">
        <div className="flex flex-col">
          <p className="font-semibold text-[17px] lg:text-[23px] mb-7">
            Ready to Elevate Your Search Rankings?
          </p>
          <div className="border-t border-black pt-2 pb-6 text-sm sm:text-base"></div>
          <p className="text-sm font-normal lg:max-w-[400px]">
            {" "}
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we&apos;re here to make it happen.
          </p>
          <p className="font-bold mt-10">
            Let&apos;s Work Together to grow your online presence
          </p>
          <button className="bg-[#B9FF66] text-black text-bold text-center p-3 rounded-xl mt-10">
            Start My SEO Journey
          </button>
        </div>
        <div className="order-2 md:order-0">
          <Image
            src="/Aboutus/Innovation.png"
            alt="Star"
            width={350}
            height={200}
            className="w-fit h-auto pl-10"
          />
        </div>
      </div>
    </div>
  );
}
