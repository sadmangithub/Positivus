import Image from "next/image";
export default function Engine() {
  return (
    <div className="custom-container">
      <div className="bg-black rounded-3xl">
        <div className=" flex flex-col lg:flex-row p-10 mt-10 mb-20">
          <div>
            <Image
              src="/Aboutus/Star.jpeg"
              alt="Star"
              width={60}
              height={60}
              className="w-fit h-auto pr-6"
            />
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col rounded">
              <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
                Search engine
              </p>
              <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
                Optimization
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white max-w-[600px]">
                SEO is the process of improving your website&apos;s visibility
                on search engines like Google. By optimizing your content and
                site structure, we help your business rank higher in search
                results, driving more organic traffic and potential customers.
              </p>
              <button className="bg-white text-black text-bold text-center p-3 rounded-xl mt-4">
                Book My Ranks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
