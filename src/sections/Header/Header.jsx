
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Pagination, Navigation } from 'swiper/modules';




import "./Header.css";
// import { useTranslation } from "react-i18next";

// import { MdSystemSecurityUpdateGood } from "react-icons/md";

export default function Header() {
  // const [t] = useTranslation();
  return (
    <>
      <div className="container">
 
        <div className="Main-img container">

       
        <Swiper
        dir='ltr'
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='img1'></SwiperSlide>
        <SwiperSlide className='img2'></SwiperSlide>
        <SwiperSlide className='img3'></SwiperSlide>
      </Swiper>


        </div>
      </div>
    </>
  );
}
