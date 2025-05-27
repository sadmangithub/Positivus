import Image from "next/image";

export default function Johnsmith() {
  return (
    <div className="custom-container">
      <div className="bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-2 rounded-3xl p-5 md:p-10 mb-20 gap-6 items-center">
        <div className="flex justify-center">
          <Image
            src="/Aboutus/Face.png"
            alt="Star"
            width={359}
            height={395}
            className="w-[250px] md:w-auto h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[22px] max-w-[430px] md:text-[25px] lg:text-[30px] font-semibold lg:font-bold text-center md:text-left">
            &apos;&apos;At positivus, we believe that success is built on
            innovation, collaboration and relentless focus on delivering
            result&apos;&apos;.
          </p>
          <p className="text-slate-500 mt-4  text-base md:text-lg">
            - John Smith, Founder of positivus
          </p>
        </div>
      </div>
    </div>
  );
}
