import SkillBook from "../../../atoms/SkillBook/SkillBook";
import SkillBox from "../../../atoms/SkillBox/SkillBox";
import style from "../Level2/Level2.module.scss";

const Level1 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 1" description="Beginner Skills" filter="#4763ff" imageFilter="grayscale(100%)" />
      <div className={style.boxWrap}>
        <SkillBox
          image="/images/html.png" title="HTML" description="description" 
        />
        <SkillBox
          image="/images/css.png" title="CSS" description="description" 
        />
        <SkillBox
          image="/images/js.png" title="Javascript/JQuery" description="description" 
        />
        <SkillBox
          image="/images/psai.png" title="Photoshop/illustrator" description="description" 
        />
      </div>
      <div className={style.skillPoint}>
        Skill point <span>7</span>
      </div>
    </div>
  )
}

export default Level1;