import Image from "next/image";
export default function Feature() {
  return (
    <div className="custom-container">
      <div className="bg-[#191A23] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 rounded-3xl p-10 mt-20 mb-20">
        <div className="">
          <h1 className="bg-[#B9FF66] text-[25px] text-center font-bold rounded p-1 inline-block">
            Featured Success Story
          </h1>
          <p className="text-white text-[20px] py-8">
            Scaling Success for a leading E-commerace Brand
          </p>
          <p className="text-[#F3F3F3] text-[15px] max-w-[430px]">
            Through a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility,drive traffic,and boost sales
          </p>
          <div>
            <Image
              src="/Usecases/Read.JPG"
              alt="Trophy"
              width={130}
              height={80}
              className="w-fit h-auto mt-4"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="bg-white rounded-3xl">
            <p className="text-[20px] font-semibold mt-2 lg:mt-10 text-center">
              200%
            </p>
            <p className="text-[15px] text-center">
              increase in organic traffic
            </p>
          </div>
          <div className="bg-white rounded-3xl">
            <p className="text-[20px] text-center mt-2 lg:mt-10 font-semibold">
              150%
            </p>
            <p className="text-[15px] text-center">rise in online sales</p>
          </div>
          <div className="bg-white rounded-3xl">
            <p className="text-[20px] mt-2 lg:mt-10 font-semibold text-center">
              75%
            </p>
            <p className="text-[15px] text-center">
              reduction in cost-per-click(CPC)
            </p>
          </div>
          <div className="bg-white rounded-3xl">
            <p className="text-[20px] text-center mt-2 lg:mt-10 font-semibold">
              300%
            </p>
            <p className="text-[15px] text-center">
              Improvement in conversion rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
