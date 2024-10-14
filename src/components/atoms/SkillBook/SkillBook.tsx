import style from "./SkillBook.module.scss";

type SkillBookProps = {
  title: string;
  description: string;
  filter?: string;
}

const SkillBook = ({ title, description, filter }: SkillBookProps) => {
  return (
    <div className={style.wrap}>
      <div className={style.skillBook} style={{filter: `drop-shadow(-1px 1px 9px ${filter})`}}>
        <span>{title}</span>
        <img src="/src/assets/images/cover.png" alt="" />
      </div>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default SkillBook;