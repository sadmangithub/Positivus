import Image from "next/image";

export default function Contact() {
  return (
    <div className="custom-container px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-15 mt-10">
        <span className="bg-[#B9FF66] text-black font-bold text-2xl sm:text-3xl px-2 py-1 rounded w-max">
          Contact Us
        </span>
        <p className="text-sm sm:text-md text-black max-w-full sm:max-w-[260px] sm:text-left">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-[#F3F3F3] p-10 md:p-0 rounded-2xl mb-8">
        <form className="space-y-4 flex-1 max-w-full md:max-w-md w-full md:p-10">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="red"
                name="color"
                value="red"
                className="w-4 h-4 text-green-600 bg-white"
              />
              <label htmlFor="red" className="ml-2 text-black text-sm">
                Say Hi
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="green"
                name="color"
                value="green"
                className="w-4 h-4 text-green-600 bg-white border-gray-300"
              />
              <label htmlFor="green" className="ml-2 text-black text-sm">
                Get a Quote
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border bg-white border-black rounded-xl focus:outline-none"
              placeholder="Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mt-7"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-xl shadow-sm focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mt-7"
            >
              Message*
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border bg-white border-black rounded-xl shadow-sm focus:outline-none"
              placeholder="Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 rounded-md hover:bg-slate-900 bg-black text-white font-medium transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-10 md:mt-0 md:justify-end items-center max-w-full md:max-w-[300px]">
          <Image
            src="/contact.PNG"
            alt="Contact"
            width={200}
            height={200}
            className="w-fit h-auto max-w-[450px] max-h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
