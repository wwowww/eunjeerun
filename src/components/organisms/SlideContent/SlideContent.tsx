// SlideContent.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Home from '../../templates/Home/Home';
import About from '../../templates/About/About';
import Skills from '../../templates/Skills/Skills';
import Portfolio from '../../templates/Portfolio/Portfolio';
import Goal from '../../templates/Goal/Goal';
import style from './SlideContent.module.scss';

interface SlideContentProps {
  setActiveIndex: (index: number) => void;
  openContentModal: (contentType: string) => void;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  activeIndex: number;
}

const SlideContent: React.FC<SlideContentProps> = ({ setActiveIndex, openContentModal, swiperRef, activeIndex }) => {
  const slides = [
    <Home openModal={() => openContentModal('home')} />,
    <About openModal={() => openContentModal('about')} />,
    <Skills openModal={() => openContentModal('skills')} />,
    <Portfolio openModal={() => openContentModal('portfolio')} />,
    <Goal openModal={() => openContentModal('goal')} />
  ];

  return (
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
  );
};

export default SlideContent;
