import style from "./SkillBook.module.scss";

type SkillBookProps = {
  title: string;
  description: string;
  filter?: string;
  imageFilter?: string;
}

const SkillBook = ({ title, description, filter, imageFilter }: SkillBookProps) => {
  return (
    <div className={style.wrap}>
      <div className={style.skillBook} style={{ filter: `drop-shadow(-1px 1px 9px ${filter})` }}>
        <span>{title}</span>
        <img src="/images/cover.webp" alt="" style={{ filter: `${imageFilter}` }} />
      </div>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default SkillBook;