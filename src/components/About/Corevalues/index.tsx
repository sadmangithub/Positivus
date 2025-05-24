import Image from "next/image";
export default function Core() {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="flex flex-col p-10 rounded-3xl border border-b-4 border-black">
          <p className="font-semibold text-[25px] mb-7">Client Success First</p>
          <div className="border-t border-black pt-4 pb-6 text-sm sm:text-base"></div>
          <p className="text-sm font-normal max-w-[400px]">
            {" "}
            We are dedicated to achieving measurable results for our clients.
            Each strategy is tailored to meet unique business goals and drive
            long-term success.
          </p>
        </div>
        <div className="flex flex-col p-10 rounded-3xl border border-b-4 border-black">
          <p className="font-semibold text-[25px] mb-7">Innovation</p>
          {/* <div className="flex">
            <Image
              src="/Aboutus/Innovation.png"
              alt="Star"
              width={50}
              height={50}
              className="w-fit h-auto"
            />
          </div> */}
          <div className="border-t border-black pt-4 pb-6 text-sm sm:text-base"></div>
          <p className="text-sm font-normal max-w-[150px]">
            {" "}
            We constantly strive to stay ahead of industry trends
          </p>
        </div>
      </div>
    </div>
  );
}
