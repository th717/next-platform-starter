'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = ({ 
  title = "Discover Amazing Products",
  subtitle = "Find the perfect items for your lifestyle and elevate your everyday experience",
  buttonText = "Shop All",
  buttonLink = "/shop",
  slides = [],
  className = ""
}) => {
  // Default hero slides with beautiful images
  const defaultSlides = [
    {
      id: 1,
      image: '/images/slider/slider-1.png',
      title: 'Premium Quality',
      subtitle: 'Discover our curated collection of premium products',
      buttonText: 'Shop Now',
      buttonLink: '/shop'
    },
    {
      id: 2,
      image: '/images/slider/slider-2.png',
      title: 'Modern Design',
      subtitle: 'Contemporary designs that fit your lifestyle',
      buttonText: 'Explore',
      buttonLink: '/collections'
    },
    {
      id: 3,
      image: '/images/slider/slider-3.png',
      title: 'Exclusive Collection',
      subtitle: 'Limited edition items you won\'t find anywhere else',
      buttonText: 'View Collection',
      buttonLink: '/exclusive'
    }
  ];

  const heroSlides = slides.length > 0 ? slides : defaultSlides;

  return (
    <section className={`relative w-full h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-hidden bg-gray-50 md:h-[calc(100vh-100px)] md:min-h-[calc(100vh-100px)] sm:h-[calc(100vh-90px)] sm:min-h-[calc(100vh-90px)] ${className}`}>
      <div className="relative w-full h-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
          }}
          pagination={{
            el: '.hero-pagination',
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          speed={1000}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          touchRatio={1}
          grabCursor={true}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-10">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 w-full max-w-6xl px-8 text-center">
                  <div className="max-w-2xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <Link 
                      href={slide.buttonLink} 
                      className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">{slide.buttonText}</span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button 
          className="hero-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border-0 outline-none cursor-pointer"
          aria-label="Previous slide"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="hero-button-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border-0 outline-none cursor-pointer"
          aria-label="Next slide"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="hero-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet-active-main]:bg-white [&_.swiper-pagination-bullet-active-prev]:bg-white/70 [&_.swiper-pagination-bullet-active-next]:bg-white/70"></div>
      </div>
    </section>
  );
};

export default Hero;