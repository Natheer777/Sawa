import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Import Swiper core styles

import './Header.css';

export default function Header() {
  // Uncomment if using translation
  // const [t] = useTranslation();

  const swiperRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current !== null) {
        const nextButton = document.querySelector('.swiper-button-next');
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="Main-img container">
        <Swiper
          ref={swiperRef}
          dir='ltr'
          spaceBetween={30}
          effect={'fade'}
          autoplay={true}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          onAutoplay={{ delay: 10000 }} 
          className="mySwiper"
        >
          <SwiperSlide className='img1'></SwiperSlide>
          <SwiperSlide className='img2'></SwiperSlide>
          <SwiperSlide className='img3'></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
