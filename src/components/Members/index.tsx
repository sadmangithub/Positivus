import Image from "next/image";
import Link from "next/link";
const Members = [
  {
    Image: "/Members/John.png",
    Name: "John Smith",
    title: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    Image: "/Members/Jane.png",
    Name: "Jane Doe",
    title: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    Image: "/Members/Michael.png",
    Name: "Michael Brown",
    title: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    Image: "/Members/Emily.png",
    Name: "Emily Johnson",
    title: "PPC Manager ",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    Image: "/Members/Brian.png",
    Name: "Brian Williams",
    title: "Social Media specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    Image: "/Members/Sarah.png",
    Name: "Sarah Kim",
    title: "Content creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
export default function TeamSection() {
  return (
    <div className="custom-container py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {Members.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-3xl p-4 border-black border-b-4 hover:shadow-lg transition relative"
          >
            <div className="flex items-start space-x-4 pt-2">
              <div>
                <Image
                  src={member.Image}
                  alt={member.Name}
                  width={150}
                  height={150}
                  className="w-fit h-auto"
                />
              </div>

              <div className="flex-1 text-left mt-10">
                <h3 className="font-semibold text-lg leading-tight">
                  {member.Name}
                </h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>

              <Link href="#" className="absolute top-3 right-3">
                <Image
                  src="/Members/icon.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            <div className="mt-4">
              <hr className="my-2 border-black" />
              <p className="text-sm text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <button className="bg-black hover:bg-slate-900 transition duration-300 text-white px-6 py-3 rounded-xl text-[13px] md:text-[18px] cursor-pointer">
          See all team
        </button>
      </div>
    </div>
  );
}
