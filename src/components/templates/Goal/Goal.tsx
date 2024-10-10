import Background from "../../molecules/Background/Background";
import style from "./Goal.module.scss";


type GoalProps = {
  openModal: () => void;
}

const Goal = ({openModal}: GoalProps) => {
  return (
    <Background>
      <div className={style.modal}>
        <button onClick={openModal}>Open Modal</button>
      </div>
    </Background>
  )
}

export default Goal;