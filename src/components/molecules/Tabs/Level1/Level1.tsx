import SkillBook from "../../../atoms/SkillBook/SkillBook";
import SkillBox from "../../../atoms/SkillBox/SkillBox";
import style from "../Level2/Level2.module.scss";

const Level1 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 1" description="Beginner Skills" filter="#4763ff" imageFilter="grayscale(100%)" />
      <div className={style.boxWrap}>
        <SkillBox
          image="/images/html.webp" title="HTML" description="HTML의 문법을 준수하여 코딩하고 있습니다."
        />
        <SkillBox
          image="/images/css.webp" title="CSS" description="CSS로 원하는 디자인의 작업물을 만들 수 있습니다."
        />
        <SkillBox
          image="/images/js.webp" title="Javascript/JQuery" description="Javascript와 JQuery를 활용해 코딩가능합니다."
        />
        <SkillBox
          image="/images/psai.webp" title="Photoshop/illustrator" description="이 페이지의 도트 디자인을 포토샵으로 제작하였습니다. 포토샵과 일러스트를 활용해 간단한 디자인이 가능합니다. "
        />
      </div>
      <div className={style.skillPoint}>
        Skill point <span>7</span>
      </div>
    </div>
  )
}

export default Level1;