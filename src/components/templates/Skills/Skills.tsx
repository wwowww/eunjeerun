import PixelTitle from "../../atoms/PixelTitle/PixelTitle";
import Background from "../../molecules/Background/Background";
import style from "./Skills.module.scss";

type SkillsProps = {
  openModal: () => void;
}

const Skills = ({openModal}: SkillsProps) => {
  return (
    <Background hasGradient>
      <div className={style.modal}>
        <PixelTitle>Skills</PixelTitle>
        <button onClick={openModal} className={style.openModalButton}>
          <img src="/images/book.png" alt="" />
          <img src="/images/click.png" alt="" className={style.speechBubble} />
        </button>
      </div>
    </Background>
  )
}

export default Skills;