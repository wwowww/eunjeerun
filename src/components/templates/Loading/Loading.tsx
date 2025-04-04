import { useEffect, useState } from "react";
import { range } from 'lodash';
import TypingText from "@/components/atoms/TypingText/TypingText";
import style from "./Loading.module.scss";

const Loading = () => {
  const totalBars = 25;
  const [activeBars, setActiveBars] = useState<number>(0);

  useEffect(() => {
    if (activeBars < totalBars) {
      const timer = setTimeout(() => {
        setActiveBars((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [activeBars]);

  return (
    <div className={style.wrap}>
      <div className={style.window}>
        <div className={style.header}>
          <label>Eunjee Run Update</label>
          <ul className={style.button}>
            {range(0, 3)?.map((i: number) => (
              <li key={i + "list key"}></li>
            ))}
          </ul>
        </div>
        <div className={style.contents}>
          <img src="/images/window-loading.webp" alt="" />
          <TypingText text="Please wait for a moment..." frame={90} />
          <ul className={style.installBar}>
            {range(0, totalBars)?.map((i: number) => (
              <li key={i + "bar key"} className={i < activeBars ? style.active : ''}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Loading;