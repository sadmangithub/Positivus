import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="custom-container">
      <div className="flex flex-col items-center md:items-start mt-10 mb-20 gap-4">
        <p className="text-[30px] md:text-[60px] font-bold rounded w-fit">
          Pricing
        </p>
        <p className="font-normal text-sm max-w-[300px] md:max-w-[420px] pl-5 md:pl-0">
          Elevate your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group flex flex-col border border-b-4 px-10 py-10 rounded-3xl hover:bg-black transition duration-300">
          <p className="text-[25px] font-bold group-hover:text-white">
            Basic Plan
          </p>
          <div className="flex mt-4">
            <p className="font-bold text-[40px] group-hover:text-white">$500</p>
            <div className="text-black text-base pl-4 mt-5 mb-10 group-hover:text-white">
              /month
            </div>
          </div>
          <button className="bg-white text-black transition duration-300 group-hover:bg-[#B9FF66] group-hover:text-black font-base border-2 text-bold text-center p-3 rounded-xl mt-4">
            Get Started
          </button>
          <button className="bg-white transition duration-300 text-black group-hover:bg-black group-hover:text-white text-base border-2 text-center p-3 rounded-xl mt-4">
            Request a quote
          </button>
          <div className="border border-b border-black mt-8"></div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Website Optimization
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={36}
                height={32}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Social media setup and management [1 platform]
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Monthly progress report
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Email support
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Basic competitor analysis
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Initial SEO audit
            </p>
          </div>
        </div>
        <div className="group flex flex-col border border-b-4 px-10 py-10 rounded-3xl hover:bg-black transition duration-300">
          <p className="text-[25px] font-bold group-hover:text-white">
            Pro Plan
          </p>
          <div className="flex mt-4">
            <p className="font-bold text-[40px] group-hover:text-white">
              $1000
            </p>
            <div className="text-black text-base pl-4 mt-5 mb-10 group-hover:text-white">
              /month
            </div>
          </div>
          <button className="bg-white transition duration-300 text-black group-hover:bg-[#B9FF66] group-hover:text-black font-base border-2 text-bold text-center p-3 rounded-xl mt-4">
            Get Started
          </button>
          <button className="bg-white transition duration-300 text-black group-hover:bg-black group-hover:text-white text-base border-2 text-center p-3 rounded-xl mt-4">
            Request a quote
          </button>
          <div className="border border-b border-black mt-8"></div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Include all from the basic plan
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={36}
                height={32}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Social media setup and management [up to 3 platform]
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              PPC and campaign management
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Email and phone support
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              On page SEO improvements
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Monthly content recommendations
            </p>
          </div>
        </div>
        <div className="group flex flex-col border border-b-4 px-10 py-10 rounded-3xl hover:bg-black transition duration-300">
          <p className="text-[25px] font-bold group-hover:text-white">
            Elite Plan
          </p>
          <div className="flex mt-4">
            <p className="font-bold text-[40px] group-hover:text-white">
              $2000
            </p>
            <div className="text-black text-base pl-4 mt-5 mb-10 group-hover:text-white">
              /month
            </div>
          </div>
          <button className="bg-white transition duration-400 text-black group-hover:bg-[#B9FF66] group-hover:text-black  font-base border-2 text-bold text-center p-3 rounded-xl mt-4">
            Get Started
          </button>
          <button className="bg-white transition duration-400 text-black group-hover:bg-black group-hover:text-white text-base border-2 text-center p-3 rounded-xl mt-4">
            Request a quote
          </button>
          <div className="border border-b border-black mt-8"></div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Include all from the Pro plan
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Website design and development
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Comprehensive SEO strategy
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={29}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Social media setup and management [up to 5 platform]
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={27}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              Content amrketing strategy and implementation
            </p>
          </div>
          <div className="flex mt-8">
            <div>
              <Image
                src="/Pricing/Check.JPG"
                alt="check"
                width={25}
                height={28}
                className="rounded-xl"
              />
            </div>
            <p className="text-base pl-2 group-hover:text-white">
              In depth analytics and reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
