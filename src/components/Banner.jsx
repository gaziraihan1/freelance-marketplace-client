import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        fetch('/banner.json')
        .then(res => res.json())
        .then(json => setSliderData(json))
    }, [])
    return (
        <div>
             <div className="w-full">
      {
        sliderData.length > 0 && <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-[600px]"
      >
        {sliderData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={`h-full w-full flex flex-col lg:flex-row items-center px-6 md:px-20 py-8 md:py-24 ${slide.bgClass} rounded`}>
              <div className="lg:max-w-[420px] xl:max-w-2xl">
                <h1 className="text-2xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="md:text-lg mb-6">{slide.subtitle}</p>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-4xl shadow hover:bg-blue-700 cursor-pointer transition">
                  {slide.buttonText}
                </button>
              </div>
              <div className="flex-1 text-center">
                <img src={slide.image} alt="" className='h-full'/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      }
    </div>
        </div>
    );
};

export default Banner;
