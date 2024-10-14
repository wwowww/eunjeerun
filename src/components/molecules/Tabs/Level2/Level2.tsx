import SkillBook from "../../../atoms/SkillBook/SkillBook";
import SkillBox from "../../../atoms/SkillBox/SkillBox";
import style from "./Level2.module.scss";

const Level2 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 2" description="Frontend Skills" filter="#ff3a3a" />
      <div className={style.boxWrap}>
        <SkillBox
          frame="Typescript" frameColor="#3178C6" title="Typescript" description="description" 
        />
        <SkillBox
          frame="Typescript" frameColor="#3178C6" title="제목" description="description" 
        />
        <SkillBox
          frame="Typescript" frameColor="#3178C6" title="제목" description="description" 
        />
      </div>
      <div className={style.skillPoint}>
        Skill point <span>7</span>
      </div>
    </div>
  )
}

export default Level2;