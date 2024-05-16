import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import "./Header.css";

export default function Header() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const nextButton = swiperRef.current.swiper.navigation.nextEl;
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
          dir="ltr"
          spaceBetween={30}
          effect={"fade"}
          autoplay={{ delay: 10000 }}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
      
          <SwiperSlide className="img1"></SwiperSlide>
          <SwiperSlide className="img2"></SwiperSlide>
          <SwiperSlide className="img3"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
