import style from "./GaugeImage.module.scss";

const GaugeImage = () => {
  return (
    <div className={style.topImage}>
      <img src="/src/static/images/eunjee_front_small.png" alt="" />
      <img src="/src/static/images/about_heart_gauge.png" alt="" />
    </div>
  )
}

export default GaugeImage;