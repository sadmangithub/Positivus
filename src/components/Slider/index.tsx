import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Slider() {
  const logos = [
    "/amazon.png",
    "/dribbble.png",
    "/Hubspot.png",
    "/Notion.png",
    "/Netflix.png",
    "/Zoom.png",
    "/Notion.png",
  ];
  return (
    <div className="custom-container">
      <div className="w-full mb-10 mt-8">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          speed={2000}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={0}
          className="ourclient"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={logo}
                  alt={"${index + 1}"}
                  width={50}
                  height={50}
                  className="w-22 h-22 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
