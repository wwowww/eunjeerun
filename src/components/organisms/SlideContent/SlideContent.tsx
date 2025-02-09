import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { lazy, Suspense } from 'react';
import Background from '@components/molecules/Background/Background';
import style from './SlideContent.module.scss';

const Home = lazy(() => import('@/components/templates/Home/Home'));
const About = lazy(() => import('@/components/templates/About/About'));
const Skills = lazy(() => import('@/components/templates/Skills/Skills'));
const Portfolio = lazy(() => import('@/components/templates/Portfolio/Portfolio'));
const Goal = lazy(() => import('@/components/templates/Goal/Goal'));

interface SlideContentProps {
  setActiveIndex: (index: number) => void;
  openContentModal: (contentType: string) => void;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  activeIndex: number;
  allowTouchMove?: boolean;
  setImageDirection: (direction: string) => void;
}

const SlideContent = ({ setActiveIndex, openContentModal, swiperRef, activeIndex, allowTouchMove, setImageDirection }: SlideContentProps) => {
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
      onSlideChange={(swiper) => {
        setImageDirection(swiper.activeIndex < activeIndex ? 'reverse' : 'normal');
        setActiveIndex(swiper.activeIndex)
      }}
      initialSlide={activeIndex}
      allowTouchMove={allowTouchMove}
      className={style.slide}
      speed={500}
    >
      {
        slides.map((slide, index) => (
          <Suspense fallback={<Background />}>
            <SwiperSlide key={index + "slide key"}>{slide}</SwiperSlide>
          </Suspense>
        ))
      }
    </Swiper>
  );
};

export default SlideContent;
