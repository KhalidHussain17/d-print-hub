"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  button: string;
  link: string;
};

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      image: "/slider/s1.jpeg",
      title: "4 Hrs Express Delivery",
      subtitle: "Get your products delivered in just 4 hours.",
      button: "Order in 4 Hours",
      link: "/contact",
    },
      {
          image: "/slider/s2.jpeg",
          title: "Premium Printing Solutions",
          subtitle: "High-quality prints for business & branding.",
          button: "Explore Printing",
          link: "/#services",   
      },

    {
      image: "/slider/s6.jpeg",
      title: "Design. Print. Deliver.",
      subtitle: "Everything under one roof.",
      button: "Start Your Project",
      link: "/contact",
    },
    {
      image: "/slider/s5.jpeg",
      title: "ACP Boards & Signage",
      subtitle: "Bold, durable & eye-catching brand visibility.",
      button: "View Signage Work",
      link: "/projects",
    },
    {
      image: "/slider/s10.jpeg",
      title: "Professional Branding Work",
      subtitle: "From logo to large-scale installations.",
      button: "View Our Work",
      link: "/projects",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-[520px] md:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow">
                  {slide.subtitle}
                </p>

                <a
                  href={slide.link}
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3
                    bg-red-600 text-white
                    rounded-lg
                    font-semibold
                    shadow-lg
                    transition
                    hover:bg-red-700
                    hover:scale-105
                  "
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
