import OptionBar from "../../atoms/optionBar/optionBar";
import style from "./HomeModalContent.module.scss";

const HomeModalContent = () => {
  const option = ["File", "Edit", "Search"];
  
  return (
    <div className={style.wrap}>
      <OptionBar options={option} />
      <div className={style.description}>
        <p>
          만나뵙게 되어 반갑습니다! <br/><br/>
        </p>
        <p>
          좋은 개발자가 되기 위해
          오늘도 달리는 권은지입니다. <br/>
        </p>
        <p>
          꿈을 향해 멈추지 않고 달려가고 싶다는
        작은 생각에서 만들게된 웹페이지입니다. <br/><br/>
        </p>
        <p>
          2019년에 JQuery를 사용해 만든 프로젝트를
          2024년에는 Pnpm, React, Vite를 사용해 업그레이드 하였습니다! <br />
        </p>
        <p>
          키보드 방향키와 하단 페이지네이션으로
          이동이 가능한 웹 페이지입니다.  <br/><br/>
        </p>
        <p>
          자, 이제 은지런의 세계로 떠나볼까요?
        </p>
      </div>
    </div>
  )
}

export default HomeModalContent;