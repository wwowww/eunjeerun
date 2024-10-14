import PixelTitle from "../../atoms/PixelTitle/PixelTitle";
import Background from "../../molecules/Background/Background";
import ConfettiHoverEffect from "../../molecules/ConfettiHoverEffect/ConfettiHoverEffect";
import style from "./Goal.module.scss";


type GoalProps = {
  openModal: () => void;
}

const Goal = ({openModal}: GoalProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
      <PixelTitle>Goal</PixelTitle>
      <ConfettiHoverEffect>
        <button onClick={openModal}>
          <ul className={style.listWrap}>
            <li>
              <img src="/src/assets/images/i.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/images/luv.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/images/e.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/images/j.png" alt="" />
            </li>
          </ul>
        </button>
        </ConfettiHoverEffect>
      </div>
    </Background>
  )
}

export default Goal;