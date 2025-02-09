import { ReactNode } from "react";
import style from "./PixelTitle.module.scss";

type PixelTitleProps = {
  children: ReactNode | string;
}

const PixelTitle = ({ children }: PixelTitleProps) => {
  return (
    <h2 className={style.title}>{children}</h2>
  )
}

export default PixelTitle;