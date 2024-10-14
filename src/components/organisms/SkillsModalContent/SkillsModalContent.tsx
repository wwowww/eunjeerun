import TabMenu from "../../atoms/TabMenu/TabMenu";
import Level1 from "../../molecules/Tabs/Level1/Level1";
import Level2 from "../../molecules/Tabs/Level2/Level2";

const SkillsModalContent = () => {
  const tabs = ["Level 1", "Level 2"];
  const contents = [<Level1 />,<Level2 />]
  
  return (
    <TabMenu tabs={tabs} contents={contents} initialActiveTab="Level 2" />
  )
}

export default SkillsModalContent;