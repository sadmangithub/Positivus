export default function CaseStudies() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] sm:items-center text-[24px] md:text-[30px] font-semibold rounded px-2 w-fit">
          Our Impact In Numbers
        </p>
        <p className="font-normal sm:items-center text-sm max-w-[300px]">
          A snapshot of the milestones and achivements that drive our success
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 py-6 gap-y-6">
        <div>
          <div className="border-t border-r-2 rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl pl-5 font-bold">8+</h3>
          <p className="text-gray-600 pl-5">Years of Experience</p>
        </div>
        <div>
          <div className="border-t border-r-2 border-l-2 rounded-tr-2xl rounded-tl-2xl h-8"></div>
          <h3 className="text-3xl font-bold pl-5">50+</h3>
          <p className="text-gray-600 pl-5">Experts</p>
        </div>
        <div>
          <div className="border-t border-r-2 border-l-2 rounded-tr-2xl rounded-tl-2xl h-8"></div>
          <h3 className="text-3xl font-bold pl-5">100+</h3>
          <p className="text-gray-600 pl-5">Successful</p>
        </div>
        <div>
          <div className="border-t border-r-2 border-l-2 rounded-tr-2xl rounded-tl-2xl h-8"></div>
          <h3 className="text-3xl font-bold pl-5">20+</h3>
          <p className="text-gray-600 pl-5">Industry Awards</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="border-t border-l-2 rounded-tl-2xl h-8"></div>
          <h3 className="text-3xl font-bold pl-5">500%</h3>
          <p className="text-gray-600 pl-5">Experts</p>
        </div>
      </div>
    </div>
  );
}
