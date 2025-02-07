import PixelTitle from "../../atoms/PixelTitle/PixelTitle";
import Background from "../../molecules/Background/Background";
import style from "./Skills.module.scss";

type SkillsProps = {
  openModal: () => void;
}

const Skills = ({ openModal }: SkillsProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
        <PixelTitle>Skills</PixelTitle>
        <button onClick={openModal} className={style.openModalButton} aria-label="사용 가능한 Skill 설명 Modal 열기">
          <img src="/images/book.png" alt="" />
          <img src="/images/click.png" alt="" className={style.speechBubble} />
        </button>
      </div>
    </Background>
  )
}

export default Skills;