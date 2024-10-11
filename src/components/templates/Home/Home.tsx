import { range } from 'lodash';
import Background from '../../molecules/Background/Background';
import style from "./Home.module.scss";

type HomeProps = {
  openModal: () => void;
}

const Home = ({openModal}: HomeProps) => {
  const totalClouds = 6;

  return (
    <Background hasStartLine hasGradient>
      <ul className={style.itemWrap}>
        <li className={style.sun}></li>
        {range(1, totalClouds + 1).map((i) => (
          <li key={i} className={style[`cloud_${i}`]}></li>
        ))}
      </ul>
      <div className={style.modal}>
        <strong className={style.title}>Start</strong>
        <button onClick={openModal} className={style.openModalButton}>
          <img src="/src/assets/images/startman.gif" alt="" className={style.startMan} />
          <img src="/src/assets/images/click.png" alt="" className={style.speechBubble} />
        </button>
      </div>
    </Background>
  )
}

export default Home;