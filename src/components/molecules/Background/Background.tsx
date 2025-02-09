import { ReactNode } from "react";
import style from "./Background.module.scss";

type Props = {
  children?: ReactNode;
  hasStartLine?: boolean;
  hasGradient?: boolean;
}

const Background = ({ children, hasStartLine = false, hasGradient }: Props) => {
  return (
    <section className={style.wrap}>
      <div className={`${style.homeSlide} ${hasGradient ? style.gradient : ""}`}>
        {children}
      </div>
      <div className={style.trackWrap}>
        {hasStartLine && <span className={style.startLine}></span>}
      </div>
    </section>
  )
}

export default Background;