import Image from "next/image";

export default function Learn() {
  return (
    <div className="custom-container mb-30 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 - Search Engine Optimization */}
        <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center rounded-4xl border border-b-4 border-black p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Search engine
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Optimization
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Arrow Icon"
                width={40}
                height={40}
              />
              <p className="font-normal mt-1 cursor-pointer">Learn more</p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/Learn/Optimization.png"
              alt="Optimization"
              width={210}
              height={147}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Card 2 - Pay-per-click Advertising */}
        <div className="bg-[#B9FF66] flex flex-col md:flex-row items-center rounded-4xl border border-b-4 border-black p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              Pay-per-click
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              advertising
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Arrow Icon"
                width={40}
                height={40}
              />
              <p className="font-normal mt-1 cursor-pointer">Learn more</p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/Learn/advertising.png"
              alt="Advertising"
              width={210}
              height={147}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Card 3 - Social Media Marketing */}
        <div className="bg-black flex flex-col md:flex-row items-center rounded-4xl p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              Social Media
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              Marketing
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/Arrow.png"
                alt="Arrow"
                width={35}
                height={40}
              />
              <p className="text-white font-normal mt-1 cursor-pointer">
                Learn more
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/Learn/Marketing.png"
              alt="Marketing"
              width={210}
              height={210}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Card 4 - Email Marketing */}
        <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center rounded-4xl border border-b-4 border-black p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Email
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Marketing
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Arrow Icon"
                width={35}
                height={40}
              />
              <p className="font-normal mt-1 cursor-pointer">Learn more</p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/Learn/Email.png"
              alt="Email"
              width={210}
              height={170}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Card 5 - Content Creation */}
        <div className="bg-[#B9FF66] flex flex-col md:flex-row items-center rounded-4xl border border-b-4 border-black p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              Content
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-2">
              Creation
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Arrow Icon"
                width={35}
                height={35}
              />
              <p className="font-normal mt-1 cursor-pointer">Learn more</p>
            </div>
          </div>
          <div className="flex justify-center w-full sm:max-w-[450px] md:w-auto">
            <Image
              src="/Learn/Creation.png"
              alt="Creation"
              width={210}
              height={147}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Card 6 - Analytics and Tracking */}
        <div className="bg-black flex flex-col md:flex-row items-center rounded-4xl p-6">
          <div className="flex flex-col rounded p-4 md:p-10">
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Analytics and
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-2">
              Tracking
            </p>
            <div className="flex gap-2 mt-10 items-center">
              <Image
                src="/Learn/Arrow.png"
                alt="Arrow Icon"
                width={40}
                height={40}
              />
              <p className="text-white font-normal mt-1 cursor-pointer">
                Learn more
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/Learn/Tracking.png"
              alt="Tracking"
              width={210}
              height={210}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
