import SkillBook from "../../../atoms/SkillBook/SkillBook";
import SkillBox from "../../../atoms/SkillBox/SkillBox";
import style from "./Level2.module.scss";

const Level2 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 2" description="Frontend Skills" filter="#ff3a3a" imageFilter="sepia(90%)" />
      <div className={style.boxWrap}>
        <SkillBox
          frame="Typescript" frameColor="#4b84f8" title="Typescript" description="description" 
        />
        <SkillBox
          frame="React" frameColor="#b4cdff" title="React" description="description"
          fontSize={22} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="NextJS" frameColor="#8f9ebc" title="NextJS" description="description"
          fontSize={19} fontColor="#fff" shadowSize={0.2}
        />
        <SkillBox
          frame="Vue" frameColor="#9effc1" title="Vue" description="description"
          fontSize={24} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="SCSS" frameColor="#f6c1fe" title="SCSS" description="description" 
          fontSize={24} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="Git" frameColor="#fedbc1" title="Git" description="description" 
          fontSize={24} fontColor="#000" shadowSize={0.2}
        />
      </div>
      <div className={style.skillPoint}>
        Skill point <span>7</span>
      </div>
    </div>
  )
}

export default Level2;