import Image from "next/image";
export default function Learn() {
  return (
    <div className="custom-container mb-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#F3F3F3] flex flex-row rounded-4xl border border-black">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-[#B9FF66] text-[25px] max-w-[500px] font-semibold rounded-xl px-1">
              Search engine
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-1">
              Optimization
            </p>
            <div className="flex gap-2 mt-20">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Logo"
                width={40}
                height={40}
                className=""
              />
              <p className="font-normal justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-15 pl-20">
            <Image
              src="/Learn/Optimization.png"
              alt="Logo"
              width={210}
              height={170}
              className=""
            />
          </div>
        </div>
        <div className="bg-[#B9FF66] flex flex-row rounded-4xl border border-black">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              Pay-per-click
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              advertising
            </p>
            <div className="flex gap-2 mt-20">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="font-normal justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-15 pl-20">
            <Image
              src="/Learn/advertising.png"
              alt="Logo"
              width={210}
              height={147}
            />
          </div>
        </div>
        <div className="bg-black flex flex-row rounded-4xl">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              Social Media
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              Marketing
            </p>
            <div className="flex gap-2 mt-30">
              <Image src="/Learn/Arrow.png" alt="Logo" width={40} height={40} />
              <p className="font-normal text-white justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-11 pl-20">
            <Image
              src="/Learn/Marketing.png"
              alt="Logo"
              width={210}
              height={210}
            />
          </div>
        </div>
        <div className="bg-[#F3F3F3] flex flex-row rounded-4xl border border-black">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-1">
              Email
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-1">
              Marketing
            </p>
            <div className="flex gap-2 mt-30">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Logo"
                width={40}
                height={40}
                className=""
              />
              <p className="font-normal justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-15 pl-25">
            <Image src="/Learn/Email.png" alt="Logo" width={210} height={170} />
          </div>
        </div>
        <div className="bg-[#B9FF66] flex flex-row rounded-4xl border border-black">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              Content
            </p>
            <p className="bg-white text-[25px] font-semibold rounded-xl px-1">
              Creation
            </p>
            <div className="flex gap-2 mt-30">
              <Image
                src="/Learn/BlackArrow.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="font-normal justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-15 pl-30">
            <Image
              src="/Learn/Creation.png"
              alt="Logo"
              width={210}
              height={147}
            />
          </div>
        </div>
        <div className="bg-black flex flex-row rounded-4xl">
          <div className="flex flex-col rounded p-10 mt-4">
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-1">
              Analytics and
            </p>
            <p className="bg-[#B9FF66] text-[25px] font-semibold rounded-xl px-1">
              Tracking
            </p>
            <div className="flex gap-2 mt-30">
              <Image src="/Learn/Arrow.png" alt="Logo" width={40} height={40} />
              <p className="font-normal text-white justify-center items-center mt-2">
                Learn more
              </p>
            </div>
          </div>
          <div className="mt-11 pl-20">
            <Image
              src="/Learn/Tracking.png"
              alt="Logo"
              width={210}
              height={210}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
