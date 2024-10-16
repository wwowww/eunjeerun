import style from "./Runner.module.scss"

interface RunnerProps {
  imageDirection: string;
}

const Runner = ({ imageDirection }: RunnerProps) => {
  

  return (
    <img
      src={"/images/run/eunjee-run.gif"}
      alt="Runner eunjee"
      className={`${style.eunjee} ${imageDirection === 'reverse' ? style.reverse : ''}`}
    />
  ) 
};
  

export default Runner;