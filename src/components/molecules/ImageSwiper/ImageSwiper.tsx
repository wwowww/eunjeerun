import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import 'swiper/css';
import style from "./ImageSwiper.module.scss";

type ImageSwiperProps = {
  onSwiperRef: any;
  controlSwiper: any;
  info: {
    image: string;
    link: string;
  }[];
}

const ImageSwiper = ({ onSwiperRef, controlSwiper, info }: ImageSwiperProps) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        onSwiperRef.current = swiper;
        if (controlSwiper) controlSwiper.controller.control = swiper;
      }}
      slidesPerView={1}
      loop={true}
      modules={[Controller]}
      allowTouchMove={false}
      className={style.imageSwiper}
    >
      {info.map((item, index) => (
        <SwiperSlide key={index} className={style.imageSlide}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={`/images/portfolio/${item.image}`} alt="" loading="lazy" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
