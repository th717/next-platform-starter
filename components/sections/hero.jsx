'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ReactPlayer from "react-player";

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
    <section className={`relative w-full h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] overflow-hidden bg-gray-50 sm:h-[calc(100vh-100px)] sm:min-h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] md:min-h-[calc(100vh-120px)] ${className}`}>
      <div className="relative w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-10">
            <ReactPlayer
              key="hero-video"
              src="https://www.youtube.com/watch?v=Fxmki30wSLg"
              playing
              loop
              muted
              controls={false}
              width="105%"
              height="150%"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1800px] min-h-[600px] object-cover pointer-events-none z-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)'}}>
                Discover Amazing Products
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto px-4 sm:px-0 drop-shadow-xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.5)'}}>
                Find the perfect items for your lifestyle and elevate your everyday experience
              </p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white border-2 border-white text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group drop-shadow-lg"
                style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)'}}
              >
                <span className="relative z-10">Shop All</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;