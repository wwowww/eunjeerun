
import style from "./optionBar.module.scss";

type optionBarProps = {
  options: string[];
}

const OptionBar = ({ options }: optionBarProps) => {
  return (
    <ul className={style.optionBar}>
      {options.map((option, index) => (
        <li key={index + "key"}>{option}</li>
      ))}
    </ul>
  )
}

export default OptionBar;