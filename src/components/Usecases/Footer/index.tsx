import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="custom-container mt-10">
      <footer className="text-white md:px-20 py-10 bg-[#191A23] rounded-t-4xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Logo2.png"
              alt="Positivus Logo"
              width={120}
              height={40}
              className="h-6 w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 text-3xl]">
            <Link href="/" className="underline hover:text-gray-300">
              About us
            </Link>
            <Link href="/" className="underline hover:text-gray-300">
              Services
            </Link>
            <Link href="/" className="underline hover:text-gray-300">
              Use Cases
            </Link>
            <Link href="/" className="underline hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/" className="underline hover:text-gray-300">
              Blog
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end gap-3">
            <Image
              src="/Footer/linkedin.png"
              alt="Linkedin"
              width={40}
              height={40}
              className="w-auto h-6"
              priority
            />
            <Image
              src="/Footer/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="w-auto h-6"
              priority
            />
            <Image
              src="/Footer/twitter.png"
              alt="Twitter"
              width={40}
              height={40}
              className="w-auto h-6"
              priority
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-[#B9FF66] px-2 text-black rounded">
                Contact us:
              </span>
            </h2>
            <div className="space-y-4 text-sm">
              <p className="font-semibold">Email: info@positivus.com</p>
              <p className="font-semibold">Phone: 555-567-8901</p>
              <div>
                <p className="font-semibold">Address:</p>
                <p>1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-4 lg:mt-0">
            <div className="bg-[#292A32] rounded-xl w-full sm:w-[100%] md:w-[90%] lg:w-[80%] p-4 flex items-center justify-center">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500 bg-transparent text-white rounded-md px-4 py-2 w-fit sm:w-full text-sm focus:outline-none focus:ring-0 focus:ring-white"
                />
                <button className="bg-[#B9FF66] text-black font-medium py-2 px-2 rounded-md text-sm w-fit sm:w-full cursor-pointer hover:bg-lime-300">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row text-center md:text-left gap-8">
          <p>© 2025 Positivus. All Rights Reserved.</p>
          <p className="underline">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
