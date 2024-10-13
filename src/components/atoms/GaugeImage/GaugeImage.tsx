import style from "./GaugeImage.module.scss";

const GaugeImage = () => {
  return (
    <div className={style.topImage}>
      <img src="/src/assets/images/eunjee_front_small.png" alt="" />
      <img src="/src/assets/images/about_heart_gauge.png" alt="" />
    </div>
  )
}

export default GaugeImage;