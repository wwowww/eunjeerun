import GaugeImage from "@/components/atoms/GaugeImage/GaugeImage";
import PortfolioSlide from "@/components/molecules/PortfolioSlide/PortfolioSlide";
import style from "./PortfolioModalContent.module.scss";

const PortfolioModalContent = () => {
  return (
    <div className={style.wrap}>
      <div className={style.screen}>
        <GaugeImage />
        <div className={style.centerImage}>
          <img src="/images/notebook.webp" alt="" />
        </div>
      </div>
      <div className={style.slide}>
        <PortfolioSlide />
      </div>
    </div>
  )
}

export default PortfolioModalContent;