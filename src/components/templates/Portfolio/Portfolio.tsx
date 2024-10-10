import Background from "../../molecules/Background/Background";
import style from "./Portfolio.module.scss";

type PortfolioProps = {
  openModal: () => void;
}

const Portfolio = ({openModal}: PortfolioProps) => {
  return (
    <Background>
      <div className={style.modal}>
        <button onClick={openModal}>Open Modal</button>
      </div>
    </Background>
  )
}

export default Portfolio;