import { useState } from "react";
import Runner from "../../atoms/Runner/Runner";
import TypingText from "../../atoms/TypingText/TypingText";
import style from "./Loading.module.scss";

const Loading = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  setTimeout(() => {
    setIsShow(false)
  }, 5000);

  return (
    isShow && (
      <div className={style.wrap}>
        <Runner />
        <TypingText text="Please wait for a moment. Loading ..." frame={100} />
      </div>
    )
  )
}

export default Loading;