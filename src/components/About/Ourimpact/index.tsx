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
      <div className="grid md:grid-cols-2 lg:grid-cols-5">
        <div className="border-t rounded-r-xl border-black">
          <div className="flex flex-col pl-5 mt-8">
            <h1 className="text-[30px] font-bold">8+</h1>
            <p className="text-small text-slate-800">Years of Experience</p>
          </div>
        </div>
        <div className="border-t rounded-xl border-black">
          <div className="flex flex-col pl-5 mt-8">
            <h1 className="text-[30px] font-bold">50+</h1>
            <p className="text-small text-slate-800">Experts</p>
          </div>
        </div>
        <div className="border-t rounded-xl border-black">
          <div className="flex flex-col pl-5 mt-8">
            <h1 className="text-[30px] font-bold">100+</h1>
            <p className="text-small text-slate-800">Successful Campaigns</p>
          </div>
        </div>
        <div className="border-t rounded-xl border-black">
          <div className="flex flex-col pl-5 mt-8">
            <h1 className="text-[30px] font-bold">20+</h1>
            <p className="text-small text-slate-800">Industry Awards</p>
          </div>
        </div>
        <div className="border-t rounded-2xl md:rounded-l-xl border-black">
          <div className="flex flex-col pl-5 mt-8">
            <h1 className="text-[30px] font-bold">500%</h1>
            <p className="text-small text-slate-800">ROI for our clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
