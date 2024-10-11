import PixelTitle from "../../atoms/PixelTitle/PixelTitle";
import Background from "../../molecules/Background/Background";
import style from "./About.module.scss";


type AboutProps = {
  openModal: () => void;
}

const About = ({openModal}: AboutProps) => {
  return (
    <Background>
      <div className={style.about}>
        <button onClick={openModal} className={style.button}>
          <PixelTitle>About Me</PixelTitle>
        </button>
      </div>
    </Background>
  )
}

export default About;