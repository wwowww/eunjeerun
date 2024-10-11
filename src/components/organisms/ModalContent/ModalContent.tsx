import { ReactNode } from "react";
import HomeModalContent from "../HomeModalContent/HomeModalContent";

type ModalContentProps = {
  contentType: ReactNode;
}

const ModalContent = ({ contentType }: ModalContentProps) => {
  switch (contentType) {
    case 'home':
      return <HomeModalContent />;
    case 'about':
      return <p>About modal</p>;
    case 'skills':
      return <p>Skills modal</p>;
    case 'portfolio':
      return <p>Portfolio modal</p>;
    case 'goal':
      return <p>Goal modal</p>;
    default:
      return <></>;
  }
};

export default ModalContent;