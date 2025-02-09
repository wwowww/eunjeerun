
import GaugeImage from '@/components/atoms/GaugeImage/GaugeImage';
import AboutSlide from '@/components/molecules/AboutSlide/AboutSlide';
import style from "./AboutModalContent.module.scss";

const AboutModalContent = () => {
  return (
    <div className={style.wrap}>
      <div className={style.screen}>
        <GaugeImage />
        <div className={style.centerImage}>
          <img src="/images/about_eunjee_center.webp" alt="" loading="lazy" />
        </div>
      </div>
      <div className={style.slide}>
        <AboutSlide />
      </div>
    </div>
  )
}

export default AboutModalContent;