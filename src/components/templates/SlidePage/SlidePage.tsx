import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; 
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Goal from '../Goal/Goal';

import 'swiper/css';
import style from "./SlidePage.module.scss";

const SlidePage = () => {
  const slides = [<Home />, <About />, <Skills />, <Portfolio />, <Goal />];
  const paginationList = ["START", "ABOUT", "SKILLS", "PORTFOLIO", "GOAL"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageDirection, setImageDirection] = useState<string>('normal');
  const swiperRef = useRef<SwiperType | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) swiperRef.current.slideTo(index);
    if (index < activeIndex) setImageDirection('reverse');
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const keyActions: { [key: number]: () => void } = {
      37: () => {
        swiperRef.current?.slidePrev();
        setImageDirection('reverse');
      },
      39: () => {
        swiperRef.current?.slideNext();
        setImageDirection('normal');
      },
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

  useEffect(() => {
    if (imageDirection !== 'normal') {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setImageDirection('normal');
      }, 3000);
    }
  }, [imageDirection]);

  const progressBarWidth = (activeIndex / (slides.length - 1)) * 100;

  return (
    <div className={style.wrap}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
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
      <img src={"/src/assets/images/run/eunjee-run.gif"} alt="Runner eunjee."
        className={`${style.eunjee} ${imageDirection === 'reverse' ? style.reverse : ''}`} 
      />
      <div className={style.pagination}>
        <ul>
          {paginationList.map((list, index) => (
            <li
              key={index + "pagination key"}
              className={`${activeIndex === index ? style.active : ""}`}
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