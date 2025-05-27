import Image from "next/image";
export default function Award() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] sm:items-center justify-center text-[24px] md:text-[30px] font-semibold rounded px-2 w-fit">
          Our Journey
        </p>
        <p className="font-normal sm:items-center text-sm max-w-[450px]">
          From humble beginnings to industry leaders, discover how positivus has
          evovlved to drive success business world wide
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-20">
        <div className="flex flex-col bg-[#F3F3F3] rounded-4xl p-10 ">
          <div className="flex justify-center">
            <Image
              src="/Aboutus/Marketing.JPG"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto"
            />
          </div>
          <div>
            <p className="text-base font-semibold mt-4">
              Best Small Buisness Digital Marketing Agency of the Year
            </p>
            <p className="mt-4">
              Celebrating our success in delivering innovative strategies and
              measurable status for small buisness clients
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F3F3F3] rounded-4xl p-10">
          <div className="flex justify-center">
            <Image
              src="/Aboutus/Innovative.JPG"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto"
            />
          </div>
          <div>
            <p className="text-base font-semibold mt-8">
              Innovative Website Design
            </p>
            <p className="mt-4">
              Honoring our expertise in developing visually stunning,
              user-friendly websites that capture a brand&apos;s essence and
              boost conversions.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F3F3F3] rounded-4xl p-10">
          <div className="flex justify-center">
            <Image
              src="/Aboutus/Campaign.JPG"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto"
            />
          </div>
          <div className="items-center">
            <p className="text-base font-semibold mt-8">
              Top Performing PPC Campaign of the year
            </p>
            <p className="mt-4">
              Acknowledging our ability to design and execute a high-impact
              pay-per-click campaign that drove exceptional client results.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F3F3F3] rounded-4xl p-10">
          <div className="flex justify-center">
            <Image
              src="/Aboutus/Marketing.JPG"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto"
            />
          </div>
          <div>
            <p className="text-base font-semibold mt-4">
              Expertise in social Media Marketing
            </p>
            <p className="mt-4">
              Recognizing our exceptional skills in crafting effective social
              media strategies, managing, accounts, and creating engaging
              content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
