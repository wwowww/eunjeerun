import SkillBook from "@/components/atoms/SkillBook/SkillBook";
import SkillBox from "@/components/atoms/SkillBox/SkillBox";
import style from "./Level2.module.scss";

const Level2 = () => {
  return (
    <div className={style.wrap}>
      <SkillBook title="Level 2" description="Frontend Skills" filter="#ff3a3a" imageFilter="sepia(90%)" />
      <div className={style.boxWrap}>
        <SkillBox
          frame="Typescript" frameColor="#4b84f8" title="Typescript" description="Typescript를 사용하여 코딩할 수 있습니다. 프로젝트에서 주로 Typescript를 사용합니다."
        />
        <SkillBox
          frame="React" frameColor="#b4cdff" title="React" description="React를 사용하여 프로젝트를 진행한 경험이 다수 있으며, React 버전업 경험이 있습니다."
          fontSize={22} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="NextJS" frameColor="#8f9ebc" title="NextJS" description="NextJS를 사용해 Router처리를 하며, NextJS 버전업 경험이 있습니다."
          fontSize={19} fontColor="#fff" shadowSize={0.2}
        />
        <SkillBox
          frame="Vue" frameColor="#9effc1" title="Vue" description="Vue를 활용해 프로젝트를 진행한 경험이 있으며, Vue2 -> NuxtJS로 마이그레이션 해본 경험이 있습니다."
          fontSize={24} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="SCSS" frameColor="#f6c1fe" title="SCSS" description="SCSS를 주로 사용하며, 이외에도 Tailwind, Module CSS를 사용할 수 있습니다."
          fontSize={24} fontColor="#000" shadowSize={0.2}
        />
        <SkillBox
          frame="Git" frameColor="#fedbc1" title="Git" description="Github을 이용해 형상관리를 하고 있습니다. Bitbucket도 사용해본 경험이 있습니다."
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