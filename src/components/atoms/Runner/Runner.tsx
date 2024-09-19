import { useEffect, useState } from "react";

type Props = {
  speed?: number;
}

const Runner = ({speed = 100}: Props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const number = setInterval(() => {
      (count < 10) ? setCount(count + 1) : setCount(1)
    }, speed);

    return () => clearInterval(number);
  });

  return (
    <img src={"src/assets/images/run/run_" + count + ".gif"} alt="Runner eunjee." />
  ) 
};
  

export default Runner;