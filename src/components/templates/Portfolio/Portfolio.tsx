import PixelTitle from "../../atoms/PixelTitle/PixelTitle";
import Background from "../../molecules/Background/Background";
import style from "./Portfolio.module.scss";

type PortfolioProps = {
  openModal: () => void;
}

const Portfolio = ({openModal}: PortfolioProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
      <PixelTitle>Portfolio</PixelTitle>
        <button onClick={openModal} className={style.button}>
          <img src="/images/brick.png" alt="" />
        </button>
      </div>
    </Background>
  )
}

export default Portfolio;