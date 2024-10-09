import style from "./Track.module.scss";

type Props = {
  hasStartLine?: boolean;
}

const RunnerOnTrack = ({ hasStartLine=false }: Props) => {
  return (
    <div className={style.wrap}>
      {hasStartLine && <span className={style.startLine}></span>}
    </div>
  )
}

export default RunnerOnTrack;