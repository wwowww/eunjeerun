import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Home from '@/components/templates/Home/Home';
import About from '@/components/templates/About/About';
import Skills from '@/components/templates/Skills/Skills';
import Portfolio from '@/components/templates/Portfolio/Portfolio';
import Goal from '@/components/templates/Goal/Goal';
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
      speed={500}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index + "slide key"}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideContent;
