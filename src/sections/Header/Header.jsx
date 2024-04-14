
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




import "./Header.css";
import { useTranslation } from "react-i18next";

// import { MdSystemSecurityUpdateGood } from "react-icons/md";

export default function Header() {
  const [t] = useTranslation();
  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className=" left">{t("Header-h")}</h1>
          <h4 className=" right">{t("Header-p")}</h4>
        </div>
        <div className="Main-img container">

       

        <Swiper
        dir='ltr'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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