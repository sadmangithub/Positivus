"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
];

export default function Testimonials() {
  return (
    <div className="custom-container py-12">
      <div className="flex flex-col items-center md:items-start sm:flex-row gap-4 sm:gap-8 mb-12">
        <span className="bg-[#B9FF66] text-black font-bold text-2xl sm:text-3xl px-3 py-1 rounded sm:self-start w-max">
          Testimonials
        </span>
        <p className="text-sm sm:text-md text-black max-w-full sm:max-w-[500px] sm:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-black py-12 rounded-4xl relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1.5}
          navigation
          centeredSlides={true}
          pagination={{
            clickable: true,
            renderBullet: (_index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          speed={1000}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 2,
            },
          }}
          className="testimonial"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-[17px] mb-16 border border-[#B9FF66] rounded-3xl bg-black py-6">
                <div className="text-center max-w-[500px] mx-auto px-4">
                  <p className="text-base sm:text-md md:text-lg text-white">
                    {slide.description}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-[17px] text-[#B9FF66]">{slide.name}</h3>
                  <p className="text-gray-300">{slide.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
