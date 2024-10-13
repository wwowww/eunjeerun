
import GaugeImage from '../../atoms/GaugeImage/GaugeImage';
import AboutSlide from '../../molecules/AboutSlide/AboutSlide';
import style from "./AboutModalContent.module.scss";

const AboutModalContent = () => {
  return (
    <div className={style.wrap}>
      <div className={style.screen}>
        <GaugeImage />
        <div className={style.centerImage}>
          <img src="/src/assets/images/about_eunjee_center.png" alt="" />
        </div>
      </div>
      <div className={style.slide}>
        <AboutSlide />
      </div>
    </div>
  )
}

export default AboutModalContent;