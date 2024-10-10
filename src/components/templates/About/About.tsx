import Background from "../../molecules/Background/Background";
import style from "./About.module.scss";


type AboutProps = {
  openModal: () => void;
}

const About = ({openModal}: AboutProps) => {
  return (
    <Background>
      <div className={style.modal}>
        <button onClick={openModal}>Open Modal</button>
      </div>
    </Background>
  )
}

export default About;