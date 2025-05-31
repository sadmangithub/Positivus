import Image from "next/image";
export default function Allsuccess() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row mt-25 mb-20 gap-8">
        <p className="bg-[#B9FF66] sm:items-center text-[24px] md:text-[30px] font-semibold rounded px-1 w-fit">
          Explore More insights
        </p>
        <p className="font-normal sm:items-center text-sm max-w-[400px]">
          Discover expert tips,strategies, and Stories to keep you ahead in the
          digital landscape
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border border-black rounded-2xl p-10 mb-20">
        <div className="p-6 border-b border-black lg:border-b-0 lg:border-r">
          <p className="font-semibold text-[20px]">
            10 SEO Myths You need to stop Believing
          </p>
          <p className="mt-4 w-[250px]">
            The text in the image addresses common misconceptions about Search
            Engine Optimization (SEO). It questions the idea that keyword
            stuffing and meta tags are the sole keys to ranking well in search
            engine results. Instead, it suggests that there are other factors
            that truly drive results in SEO.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Article
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-b-0 lg:border-r">
          <p className="font-semibold text-[20px]">
            Maximizing ROI with Social Media Advertising
          </p>
          <p className="mt-4 w-[250px]">
            Social media ads are more than just boosted posts. Explore proven
            strategies for crafting campaigns that engage audiences and deliver
            measurable returns.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Article
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="font-semibold text-[20px]">
            How Content Makrketing Fuels Long-Term Growths
          </p>
          <p className="mt-4 w-[250px]">
            Content is vital for sustainable business growth, serving as the
            foundation for building trust and driving conversions. Blogs,
            videos, and other content forms can help achieve this.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Article
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-r border-t lg:border-b-0">
          <p className="font-semibold text-[20px] mt-10">
            The Art of A/B Testing: Perfecting Your Campaigns
          </p>
          <p className="mt-4 w-[250px]">
            From headlines to call-to-actions, small tweaks can make a big
            difference. Learn how to use A/B testing to refine your marketing
            strategies.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Articles
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-black lg:border-r lg:border-t lg:border-b-0">
          <p className="font-semibold text-[20px] mt-10">
            Understanding Google&apos;s Latest Algorithm Update
          </p>
          <p className="mt-4 w-[250px]">
            Search rankings change constantly—stay ahead by learning about the
            latest Google update and its impact on your SEO strategy.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Article
            </p>
          </div>
        </div>

        <div className="p-6 border-black lg:border-t  w-full">
          <p className="font-semibold text-[20px] mt-10">
            5 Ways AI is Changing Digital Marketing
          </p>
          <p className="mt-4 w-[250px]">
            Learn more Artificial intelligence is transforming the way we
            target, analyze, and engage audiences. Discover how to leverage AI
            to stay competitive.
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <Image
              src="/Learn/BlackArrow.png"
              alt="Arrow Icon"
              width={35}
              height={40}
            />
            <p className="font-normal mt-1 hover:underline cursor-pointer">
              Read Article
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
