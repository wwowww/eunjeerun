import { ReactNode } from "react";
import style from "./Background.module.scss";

type Props = {
  children?: ReactNode;
  hasStartLine?: boolean;
}

const Background = ({ children, hasStartLine=false }: Props) => {
  return (
    <div className={style.wrap}>
      <div className={style.homeSlide}>
        {children}
      </div>
      <div className={style.trackWrap}>
        {hasStartLine && <span className={style.startLine}></span>}
      </div>
    </div>
  )
}

export default Background;