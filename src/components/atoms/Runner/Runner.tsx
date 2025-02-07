import style from "./Runner.module.scss"

interface RunnerProps {
  imageDirection: string;
}

const Runner = ({ imageDirection }: RunnerProps) => {


  return (
    <img
      decoding="async"
      src={"/images/run/eunjee-run.webp"}
      alt="Runner eunjee"
      className={`${style.eunjee} ${imageDirection === 'reverse' ? style.reverse : ''}`}
    />
  )
};


export default Runner;