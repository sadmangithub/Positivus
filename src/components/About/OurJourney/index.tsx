import Image from "next/image";
export default function OurJourney() {
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
      <div className="flex flex-col md:flex-row gap-4 mt-10 mb-15">
        <h1 className="text-[30px] font-semibold">2019</h1>
        <div className="bg-black flex flex-col md:flex-row rounded-4xl gap-4 px-5 py-10 ">
          <div>
            <Image
              src="/Aboutus/Star.jpeg"
              alt="Star"
              width={50}
              height={50}
              className="w-fit h-auto"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-white text-semibold text-[25px]">
              The Beginnings
            </h1>
            <p className="text-slate-300 text-sm font-normal max-w-[250px] mt-4">
              Postivius was founded to help businesses navigate the digital
              world and achive online success
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mb-15">
        <div className="hidden md:block">
          <Image
            src="/Aboutus/Round2.jpeg"
            alt="Star"
            width={150}
            height={150}
            className="w-fit h-auto"
          />
        </div>
        <div className="text-[30px] pl-0 md:pl-50 font-semibold">2021</div>
        <div className="bg-black flex flex-col md:flex-row rounded-4xl gap-4 px-5 py-10 ">
          <div>
            <Image
              src="/Aboutus/Star.jpeg"
              alt="Star"
              width={50}
              height={50}
              className="w-fit h-auto"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-white text-semibold text-[25px]">
              Industry Recognition
            </h1>
            <p className="text-slate-300 text-sm font-normal max-w-[250px] mt-4">
              Postivius was named among the top 50 global digital agencies,
              affirming our leadership
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mb-15">
        <div className="text-[30px] font-semibold">2023</div>
        <div className="bg-black flex flex-col md:flex-row rounded-4xl px-5 py-10 ">
          <div>
            <Image
              src="/Aboutus/Star.jpeg"
              alt="Star"
              width={50}
              height={50}
              className="w-fit h-auto"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-white text-semibold text-[25px]">
              Innovation and growth
            </h1>
            <p className="text-slate-300 text-sm font-normal max-w-[250px] mt-4">
              With over 50 experts, we continue to delver cutting edge solutions
              to help buisness thrive
            </p>
          </div>
        </div>
        <div className="hidden md:block pl-50">
          <Image
            src="/Aboutus/Round1.jpeg"
            alt="Star"
            width={150}
            height={150}
            className="w-fit h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-5 mb-30">
        <div className="text-[30px] pl-0 md:pl-50 font-semibold">2024</div>
        <div className="bg-black flex flex-col md:flex-row rounded-4xl gap-4 px-5 py-10 ">
          <div>
            <Image
              src="/Aboutus/Star.jpeg"
              alt="Star"
              width={50}
              height={50}
              className="w-fit h-auto"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-white text-semibold text-[25px]">
              Leading the future
            </h1>
            <p className="text-slate-300 text-sm font-normal max-w-[250px] mt-4">
              Postivius was named among the top 50 global digital agencies,
              affirming our leadership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
