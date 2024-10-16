import OptionBar from "../../atoms/optionBar/optionBar";
import style from "./GoalModalContent.module.scss";

const GoalModalContent = () => {
  const option = ["Go", "Run", "Challenge"];
  
  return (
    <div className={style.wrap}>
      <OptionBar options={option} />
      <div className={style.content}>
        <p>'꿈을 향해 끝없이 달리자!'라는 아이디어에서 시작된 은지런 프로젝트!</p>
        <p>페이지를 자세히 보면 출발선은 있지만 결승선은 없습니다.</p>
        <p>앞으로도 페이지 속 캐릭터처럼 꿈을 향해 끝없이 달리는 제가 되겠습니다!!</p>
        <p>감사합니다!</p>
        <div className={style.imageWrap}>
          <img src="/src/assets/images/run/eunjee-run.gif" alt="" className={style.runner} />
          <div className={style.portal}>
            <img src="/src/assets/images/portal.webp" alt="" className={style.portal} />
          </div>
        </div>
      </div>
      <ul className={style.social}>
        <li>
          <a href="https://github.com/wwowww" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://velog.io/@wwowww" target="_blank">Blog</a>
        </li>
      </ul>
    </div>
  )
}

export default GoalModalContent;