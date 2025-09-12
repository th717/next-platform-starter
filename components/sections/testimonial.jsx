'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = ({ 
  testimonials = [],
  className = ""
}) => {
  // Default testimonials
  const defaultTestimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.",
      author: {
        name: "Cameron Williamson",
        title: "CEO, Stripe",
        avatar: "/images/placeholders/placeholder.webp"
      }
    },
    {
      id: 2,
      quote: "This product has completely transformed our workflow. The quality and attention to detail is outstanding. Highly recommended!",
      author: {
        name: "Sarah Johnson",
        title: "Product Manager, Google",
        avatar: "/images/placeholders/placeholder.webp"
      }
    },
    {
      id: 3,
      quote: "Exceptional service and amazing results. Our team has seen incredible improvements since implementing this solution.",
      author: {
        name: "Michael Chen",
        title: "CTO, Microsoft",
        avatar: "/images/placeholders/placeholder.webp"
      }
    },
    {
      id: 4,
      quote: "Outstanding quality and customer support. This has exceeded all our expectations and delivered beyond what we hoped for.",
      author: {
        name: "Emily Davis",
        title: "Founder, StartupXYZ",
        avatar: "/images/placeholders/placeholder.webp"
      }
    }
  ];

  const testimonialItems = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className={`w-full bg-white py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonialItems.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-900 p-8 md:p-12 relative overflow-hidden">
                {/* Large Quote Icon */}
                <div className="absolute bottom-4 right-4 text-purple-400 opacity-20">
                  <svg 
                    width="120" 
                    height="80" 
                    viewBox="0 0 120 80" 
                    fill="currentColor"
                    className="transform rotate-12"
                  >
                    <path d="M20 20c0-11.046-8.954-20-20-20v20h20v20h20V20H20zM80 20c0-11.046-8.954-20-20-20v20h20v20h20V20H80z" />
                  </svg>
                </div>
                
                {/* Quote Text */}
                <div className="relative z-10 mb-8">
                  <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author Information */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-500 flex-shrink-0">
                    <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {testimonial.author.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        {/* Pagination Only - Hidden on Mobile */}
        <div className="hidden sm:flex justify-center items-center mt-6 sm:mt-8">
          <div className="testimonial-pagination flex space-x-2"></div>
        </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #6b7280;
          opacity: 0.5;
          margin: 0 4px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #8b5cf6;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
