import { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import useModal from '@/hooks/useModal';
import SlideContent from '@/components/organisms/SlideContent/SlideContent';
import Pagination from '@/components/organisms/Pagination/Pagination';
import Modal from '@/components/atoms/Modal/Modal';
import ModalContent from '@/components/organisms/ModalContent/ModalContent';
import Runner from '@/components/atoms/Runner/Runner';
import style from './SlidePage.module.scss';
import 'swiper/css';

const SlidePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalContentType, setModalContentType] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageDirection, setImageDirection] = useState<string>('normal');
  const swiperRef = useRef<SwiperType | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const titles: { [key: string]: string } = {
    home: 'Start',
    about: 'About',
    skills: 'Skills',
    portfolio: 'Portfolio',
    goal: 'Goal',
  };

  const openContentModal = (contentType: string) => {
    setModalContentType(contentType);
    openModal();
  };

  const paginationList = ["START", "ABOUT", "SKILLS", "PORTFOLIO", "GOAL"];

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) swiperRef.current.slideTo(index);
    if (index < activeIndex) setImageDirection('reverse');
    else setImageDirection('normal');
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

  const sizeType = useMemo(() => {
    if (["about", "portfolio"].includes(modalContentType)) {
      return 'full';
    }
    return 'normal';
  }, [modalContentType])

  const progressBarWidth = (activeIndex / (paginationList.length - 1)) * 100;

  return (
    <div className={style.wrap}>
      <SlideContent
        setActiveIndex={setActiveIndex}
        openContentModal={openContentModal}
        swiperRef={swiperRef}
        activeIndex={activeIndex}
      />
      <Runner imageDirection={imageDirection} />
      <Pagination
        activeIndex={activeIndex}
        handlePaginationClick={handlePaginationClick}
        paginationList={paginationList}
        progressBarWidth={progressBarWidth}
      />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={titles[modalContentType] || 'Information'}
        bottomCloseButton={modalContentType === "home"}
        size={sizeType}
      >
        <ModalContent contentType={modalContentType} />
      </Modal>
    </div>
  );
};

export default SlidePage;
