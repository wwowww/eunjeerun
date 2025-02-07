import PixelTitle from "@/components/atoms/PixelTitle/PixelTitle";
import Background from "@/components/molecules/Background/Background";
import ConfettiHoverEffect from "@/components/molecules/ConfettiHoverEffect/ConfettiHoverEffect";
import style from "./Goal.module.scss";


type GoalProps = {
  openModal: () => void;
}

const Goal = ({ openModal }: GoalProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
        <PixelTitle>Goal</PixelTitle>
        <ConfettiHoverEffect>
          <button onClick={openModal} aria-label="포트폴리오 설명, Github 링크, Blog 링크 확인 가능한 Modal 열기">
            <ul className={style.listWrap}>
              <li>
                <img src="/images/i.webp" alt="" />
              </li>
              <li>
                <img src="/images/luv.webp" alt="" />
              </li>
              <li>
                <img src="/images/e.webp" alt="" />
              </li>
              <li>
                <img src="/images/j.webp" alt="" />
              </li>
            </ul>
          </button>
        </ConfettiHoverEffect>
      </div>
    </Background>
  )
}

export default Goal;