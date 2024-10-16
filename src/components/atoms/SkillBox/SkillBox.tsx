import style from "./SkillBox.module.scss";

type SkillBoxProps = {
  frame?: string;
  frameColor?: string;
  image?: string;
  title: string;
  description: string;
  fontColor?: string;
  fontSize?: number | string;
  shadowSize?: number;
}

const SkillBox = ({ frame, frameColor, image, title, description, fontColor="#fff", fontSize, shadowSize=1 }: SkillBoxProps) => {
  return (
    <div className={style.wrap}>
      {!image ? (
        <div className={style.frame}>
          <span className={style.name} 
            style={{
              color: fontColor, 
              fontSize: fontSize || 18,
              textShadow: shadowSize ? `-${shadowSize}px 0 #000, 0 ${shadowSize}px #000, ${shadowSize}px 0 #000, 0 -${shadowSize}px #000` : "none"
            }}>
            {frame}
          </span>
          <img src="/src/static/images/skill_frame.png" alt={frame} style={{backgroundColor: frameColor}} />
        </div>
      ): (
        <img src={image} alt="" />
      )}
      <div className={style.contents}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SkillBox;