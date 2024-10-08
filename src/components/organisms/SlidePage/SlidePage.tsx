import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; 
import Home from '../../templates/Home/Home';

import 'swiper/css';
import style from "./SlidePage.module.scss";

const SlideContent2 = () => <div>슬라이드 내용 2</div>;
const SlideContent3 = () => <div>슬라이드 내용 3</div>;
const SlideContent4 = () => <div>슬라이드 내용 4</div>;
const SlideContent5 = () => <div>슬라이드 내용 5</div>;

const SlidePage = () => {
  const slides = [<Home />, <SlideContent2 />, <SlideContent3 />, <SlideContent4 />, <SlideContent5 />];
  const paginationList = ["START", "ABOUT", "SKILLS", "PORTFOLIO", "GOAL"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const keyActions: { [key: number]: () => void } = {
      37: () => swiperRef.current?.slidePrev(),
      39: () => swiperRef.current?.slideNext(),
    };

    const action = keyActions[event.keyCode];
    if (action) action();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const progressBarWidth = (activeIndex / (slides.length - 1)) * 100;

  return (
    <div className={style.wrap}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        initialSlide={activeIndex}
        allowTouchMove={false}
        className={style.slide}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + "slide key"}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className={style.pagination}>
        <ul>
          {paginationList.map((list, index) => (
            <li
              key={index + "pagination key"}
              className={`${style.paginationItem} ${activeIndex === index ? style.active : ""}`}
              onClick={() => handlePaginationClick(index)}
            >
              {list}
            </li>
          ))}
        </ul>
        <div className={style.progressBar}>
          <div className={style.gauge} style={{ width: `${progressBarWidth}%` }} />
        </div>
      </div>
    </div>
  )
}

export default SlidePage;