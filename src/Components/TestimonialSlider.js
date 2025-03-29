import React from 'react';
import { testimonials } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../testimonialSlider.css';
import { Autoplay, Pagination } from 'swiper/modules';

const TestimonialSlider = () => {
  console.log(testimonials); // Verinin iki kez yüklenip yüklenmediğini kontrol edin.

  return (
    <Swiper
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {testimonials.map((item, index) => {
        const { text, name, image, position } = item;
        return (
          <SwiperSlide key={index}>
            <div className="relative lg:mt-[34px] p-8"> {/* before:content-quote kaldırıldı */}
              <p className="text-lg text-gray-700">{text}</p>
              <div className="flex items-center mt-4">
                <img src={image} alt={name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h6 className="font-bold text-lg text-gray-900">{name}</h6>
                  <p className="text-sm text-gray-600">{position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
