import { useState, ReactNode } from "react";
import style from "./TabMenu.module.scss";

type TabMenuProps = {
  tabs: string[];
  contents: ReactNode[];
  initialActiveTab?: string;
}

const TabMenu = ({ tabs, contents, initialActiveTab }: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab || tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.wrap}>
      <div className={style.buttons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? style.active : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={style.contents}>
        {contents[tabs.indexOf(activeTab)]}
      </div>
    </div>
  )
}

export default TabMenu;