import Background from '../../molecules/Background/Background';
import style from "./Home.module.scss";

const Home = () => {
  return (
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
    </Background>
  )
}

export default Home;