import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Controller } from 'swiper/modules';
import ImageSwiper from "../ImageSwiper/ImageSwiper";
import { imageSlideInfo, textSlideInfo } from "../../../mocks/info";
import 'swiper/css';
import 'swiper/css/effect-fade';
import style from "./PortfolioSlide.module.scss";

const PortfolioSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef<any>(null);
  const imageSwiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };
  
  return (
    <>
      <ImageSwiper 
        onSwiperRef={imageSwiperRef} 
        controlSwiper={swiperRef.current} 
        info={imageSlideInfo} 
      />
      <div className={style.wrap}>
        <div className={style.grid}>
          <div className={style.icon}>
            <img src="/images/eunjee_front.png" alt="" />
            <img src="/images/about_arrow.png" alt="" />
          </div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (imageSwiperRef.current) swiperRef.current.controller.control = imageSwiperRef.current;
            }}
            slidesPerView={1}
            effect="fade"
            loop={true}
            modules={[EffectFade, Controller]}
            className={style.mySwiper}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)} 
          >
            {textSlideInfo.map((info, index) => (
              <SwiperSlide className={style.slide} key={index + "slide info key"}>
                <h3>{info.title}</h3>
                <ul>
                  {info.contents.map((item, idx) => (
                    <li key={idx + "list key"}>
                      <strong>{item.subTitle}</strong>:{' '}
                      {!["Link", "링크"].some(link => item.subTitle.includes(link)) ? (
                        <>{item.description}</>
                      ) : (
                        <a href={item.description} target="_blank">클릭 시, {item.subTitle}로 이동됩니다.</a>
                      )}
                    </li>
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={style.pagination}>
            {`(${currentIndex} / ${textSlideInfo.length})`}
          </div>
          <div className={style.button}>
            <button onClick={handlePrev}>
              {`< Prev`}
            </button>
            <button onClick={handleNext}>
              {`Next >`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSlide;
