import { ReactNode } from "react";
import HomeModalContent from "../HomeModalContent/HomeModalContent";
import AboutModalContent from "../AboutModalContent/AboutModalContent";
import SkillsModalContent from "../SkillsModalContent/SkillsModalContent";
import PortfolioModalContent from "../PortfolioModalContent/PortfolioModalContent";
import GoalModalContent from "../GoalModalContent/GoalModalContent";

type ModalContentProps = {
  contentType: ReactNode;
}

const ModalContent = ({ contentType }: ModalContentProps) => {
  switch (contentType) {
    case 'home':
      return <HomeModalContent />;
    case 'about':
      return <AboutModalContent />;
    case 'skills':
      return <SkillsModalContent />;
    case 'portfolio':
      return <PortfolioModalContent />;
    case 'goal':
      return <GoalModalContent />;
    default:
      return <></>;
  }
};

export default ModalContent;