import Background from '../../molecules/Background/Background';
import style from "./Home.module.scss";

type HomeProps = {
  openModal: () => void;
}

const Home = ({openModal}: HomeProps) => {
  return (
    <>
      <Background hasStartLine hasGradient>
        <ul className={style.itemWrap}>
          <li className={style.sun}></li>
          <li className={style.cloud_1}></li>
          <li className={style.cloud_2}></li>
          <li className={style.cloud_3}></li>
          <li className={style.cloud_4}></li>
          <li className={style.cloud_5}></li>
          <li className={style.cloud_6}></li>  
        </ul>
        <div className={style.modal}>
          <button onClick={openModal}>Open Modal</button>
        </div>
      </Background>
    </>
  )
}

export default Home;