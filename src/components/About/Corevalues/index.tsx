import Image from "next/image";
export default function Core() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] sm:items-center justify-center text-[24px] md:text-[30px] font-semibold rounded px-2 w-fit">
          Core Values
        </p>
        <p className="font-normal sm:items-center text-sm max-w-[200px]">
          At the core of everything we do are our core values
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="flex flex-col p-10 rounded-3xl border border-b-4 border-black">
          <p className="font-semibold text-[20px] lg:text-[25px] mb-7">
            Client Success First
          </p>
          <div className="border-t border-black pt-2 pb-6 text-sm sm:text-base"></div>
          <p className="text-sm font-normal max-w-[800px] lg:max-w-[400px]">
            {" "}
            We are dedicated to achieving measurable results for our clients.
            Each strategy is tailored to meet unique business goals and drive
            long-term success.
          </p>
        </div>
        <div className="grid grid-cols-2 p-10 rounded-3xl border border-b-4 border-black">
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] lg:text-[25px] mb-7">
              Innovation
            </p>
            <div className="border-t border-black pt-2 pb-6 text-sm sm:text-base"></div>
            <p className="text-sm font-normal max-w-[500px] lg:max-w-[150px]">
              {" "}
              We constantly strive to stay ahead of industry trends
            </p>
          </div>
          <div>
            <Image
              src="/Aboutus/Innovation.png"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 p-10 rounded-3xl border border-b-4 border-black">
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] lg:text-[25px] mb-7">
              Collaboration
            </p>
            <div className="border-t border-black pt-2 pb-6 text-sm sm:text-base"></div>
            <p className="text-sm font-normal max-w-[400px] lg:max-w-[150px]">
              {" "}
              We believe in the power of teamwork and partnership
            </p>
          </div>
          <div>
            <Image
              src="/Aboutus/Collaboration.png"
              alt="Star"
              width={200}
              height={200}
              className="w-fit h-auto pl-4"
            />
          </div>
        </div>
        <div className="flex flex-col p-10 rounded-3xl border border-b-4 border-black">
          <p className="font-semibold text-[20px] lg:text-[25px] mb-7">
            Transparency
          </p>
          <div className="border-t border-black pt-2 pb-6 text-sm sm:text-base"></div>
          <p className="text-sm font-normal max-w-[600px] lg:max-w-[400px]">
            {" "}
            Open and honest communication is key to our success we keep our
            clients informed every step of the way to ensure trust and clarity
          </p>
        </div>
      </div>
    </div>
  );
}
