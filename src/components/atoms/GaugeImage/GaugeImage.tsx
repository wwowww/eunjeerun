import style from "./GaugeImage.module.scss";

const GaugeImage = () => {
  return (
    <div className={style.topImage}>
      <img src="/images/eunjee_front_small.webp" alt="" loading="lazy" />
      <img src="/images/about_heart_gauge.webp" alt="" loading="lazy" />
    </div>
  )
}

export default GaugeImage;