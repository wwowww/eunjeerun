import Background from "../../molecules/Background/Background";
import style from "./Skills.module.scss";

type SkillsProps = {
  openModal: () => void;
}

const Skills = ({openModal}: SkillsProps) => {
  return (
    <Background>
      <div className={style.modal}>
        <button onClick={openModal}>Open Modal</button>
      </div>
    </Background>
  )
}

export default Skills;