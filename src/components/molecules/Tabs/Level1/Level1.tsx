import SkillBook from "../../../atoms/SkillBook/SkillBook";
import SkillBox from "../../../atoms/SkillBox/SkillBox";
import style from "../Level2/Level2.module.scss";

const Level1 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 1" description="Beginner Skills" filter="#4763ff" />
      <div className={style.boxWrap}>
        <SkillBox
          image="/src/assets/images/html.png" title="HTML" description="description" 
        />
        <SkillBox
          image="/src/assets/images/css.png" title="CSS" description="description" 
        />
        <SkillBox
          image="/src/assets/images/js.png" title="Javascript/JQuery" description="description" 
        />
        <SkillBox
          image="/src/assets/images/psai.png" title="Photoshop/illustrator" description="description" 
        />
      </div>
      <div className={style.skillPoint}>
        Skill point <span>7</span>
      </div>
    </div>
  )
}

export default Level1;