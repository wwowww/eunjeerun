
import AboutSlide from '../../molecules/AboutSlide/AboutSlide';
import style from "./AboutModalContent.module.scss";

const AboutModalContent = () => {
  return (
    <div className={style.wrap}>
      <div className={style.screen}>
        <div className={style.topImage}>
          <img src="/src/assets/images/eunjee_front_small.png" alt="" />
          <img src="/src/assets/images/about_heart_gauge.png" alt="" />
        </div>
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