import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './AboutSlide.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade'; 

const AboutSlide = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className={style.wrap}>
      <div className={style.grid}>
        <div className={style.icon}>
          <img src="/src/static/images/eunjee_front.png" alt="" />
          <img src="/src/static/images/about_arrow.png" alt="" />
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          loop={true}
          className={style.mySwiper}
        >
          <SwiperSlide className={style.slide}>
            <h3>Profile</h3>
            <ul>
              <li><strong>Birth</strong>: 1994년 01월 16일</li>
              <li><strong>Phone</strong>: 010-3572-1662</li>
              <li><strong>Email</strong>: <a href="mailto:passby_time@naver.com">passby_time@naver.com</a></li>
              <li><strong>Blog</strong>: <a href="https://velog.io/@wwowww" target="_blank">클릭 시 개인 블로그로 이동</a>합니다.</li>
              <li><strong>Address</strong>: 경기도 수원시 거주</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <h3>Experience</h3>
            <ul>
              <li><strong>2022~2024</strong> 위메이드 - 프론트엔드</li>
              <li><strong>2021~2022</strong> AplusX - 프론트엔드</li>
              <li><strong>2020</strong> 웹접근성QA 계약직</li>
              <li><strong>2020</strong> 코드스쿼드 프론트엔드 과정</li>
              <li><strong>2019</strong> 윈드디자인(폐업) - 퍼블리셔</li>
              <li><strong>2018</strong> 하이미디어 아카데미 웹퍼블리싱 과정</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <h3>Favorite things</h3>
            <ul>
              <li><strong>운동</strong>: 수영과 헬스를 꾸준히 하고 있어요. 철인 3종 경기를 목표로 가끔 런닝도 하고 있습니다. 실제로도 달리고 있습니다.</li>
              <li><strong>게임</strong>: 1등하는 것을 좋아해서 빠지면 몰두해서 합니다.</li>
              <li><strong>생각</strong>: 긍정적인 생각을 하려 노력해요. 마음을 다스리는 명상도 좋아합니다.</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
              <h3>What can i do?</h3>
              <ul>
                <li>Vue2에서 Vue3 + Nuxt로, React17에서 React18로 버전 업그레이드하며 마이그레이션한 경험이 있습니다.</li>
                <li>각각 관리되던 프로젝트들을 Turborepo를 Pnpm과 사용하여 다양한 프로젝트들을 한 번에 관리할 수 있게한 경험이 있습니다.</li>
                <li>nuxt/i18n, next-i18을 활용해 다국어 처리해본 경험이 있습니다.</li>
                <li>Lighthouse, http2, gzip을 통해 최적화하고 빌드 속도, 페이지 속도를 개선한 경험이 있습니다. <a href="https://www.notion.so/kwoneunjee/Lighthouse-http2-gzip-437a5015263049bfa4f86f3ef80d0689?pvs=4" target='_blank'>정리 링크</a></li>
                <li>Javascript, Typescript, React, NextJS, SCSS를 사용하여 편하게 코딩할 수 있습니다.</li>
              </ul>
          </SwiperSlide>
        </Swiper>

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
  );
};

export default AboutSlide;
