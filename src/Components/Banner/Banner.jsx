import React from "react";
// import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Big Discount",
    subtitle: "On Our Products",
    offer: "40%",
    description: "Explore our premium gadgets with expert support.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Limited Offer",
    offer: "30%",
    description: "Grab the hottest deals before they are gone.",
    image: "https://i.ibb.co.com/Xx5SN5SF/High-end-wireless-headphones-p.jpg",
  },
  {
    id: 3,
    title: "New Arrival",
    subtitle: "Latest Collection",
    offer: "25%",
    description: "Discover the newest tech products today.",
    image: "https://i.ibb.co.com/3yqdFKHG/High-end-smart-watch-product-s.jpg",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-12 py-20">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-600">
                    Special Offer
                  </span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-7xl font-black italic uppercase bg-primary px-6 py-2 -rotate-2 inline-block">
                    {slide.title}
                  </h1>
                  <br />
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase bg-black text-white px-6 py-2 rotate-1 inline-block mt-2">
                    {slide.subtitle}
                  </h2>
                </div>

                {/* Offer Circle */}
                <div className="flex items-center gap-6 mt-8">
                  <div className="w-28 h-28 bg-primary rounded-full flex flex-col items-center justify-center border-8 border-white shadow-xl rotate-12 hover:scale-110 transition">
                    <span className="text-3xl font-black leading-none">
                      {slide.offer}
                    </span>
                    <span className="text-sm font-bold uppercase">Off</span>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-600 font-medium">
                      {slide.description}
                    </p>
                    <button className="mt-4 bg-black text-white hover:bg-primary hover:text-black rounded-none px-8 font-bold">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary rounded-full  blur-xl opacity-30 animate-pulse" />

                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] border-8 border-white shadow-2xl">
                  <img
                    src={slide.image}
                    alt="Product"
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-6 right-10 flex gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
