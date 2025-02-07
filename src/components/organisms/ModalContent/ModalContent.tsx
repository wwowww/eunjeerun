import { ReactNode } from "react";
import HomeModalContent from "@/components/organisms/HomeModalContent/HomeModalContent";
import AboutModalContent from "@/components/organisms/AboutModalContent/AboutModalContent";
import SkillsModalContent from "@/components/organisms/SkillsModalContent/SkillsModalContent";
import PortfolioModalContent from "@/components/organisms/PortfolioModalContent/PortfolioModalContent";
import GoalModalContent from "@/components/organisms/GoalModalContent/GoalModalContent";

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