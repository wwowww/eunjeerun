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
              <img src="/images/i.png" alt="" />
            </li>
            <li>
              <img src="/images/luv.png" alt="" />
            </li>
            <li>
              <img src="/images/e.png" alt="" />
            </li>
            <li>
              <img src="/images/j.png" alt="" />
            </li>
          </ul>
        </button>
        </ConfettiHoverEffect>
      </div>
    </Background>
  )
}

export default Goal;