import PixelTitle from "@/components/atoms/PixelTitle/PixelTitle";
import Background from "@/components/molecules/Background/Background";
import style from "./Portfolio.module.scss";

type PortfolioProps = {
  openModal: () => void;
}

const Portfolio = ({ openModal }: PortfolioProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
        <PixelTitle>Portfolio</PixelTitle>
        <button onClick={openModal} className={style.button} aria-label="포트폴리오 설명 Modal 열기">
          <img src="/images/brick.webp" alt="" loading="lazy" />
        </button>
      </div>
    </Background>
  )
}

export default Portfolio;