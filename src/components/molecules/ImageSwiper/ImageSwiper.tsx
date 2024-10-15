import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules'; 
import 'swiper/css';
import style from "./ImageSwiper.module.scss";

type ImageSwiperProps = {
  onSwiperRef: any;
  controlSwiper: any;
  images: string[];
}

const ImageSwiper = ({ onSwiperRef, controlSwiper, images }: ImageSwiperProps) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        onSwiperRef.current = swiper;
        if (controlSwiper) controlSwiper.controller.control = swiper;
      }}
      slidesPerView={1}
      loop={true}
      modules={[Controller]}
      className={style.imageSwiper}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index + "key"}>
          <img src={`/src/assets/images/${item}`} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
