import { ReactNode } from "react";
import style from "./PixelTitle.module.scss";

type PixelTitleProps = {
  children: ReactNode | string;
}

const PixelTitle = ({ children }: PixelTitleProps) => {
  return (
    <strong className={style.title}>{children}</strong>
  )
}

export default PixelTitle;