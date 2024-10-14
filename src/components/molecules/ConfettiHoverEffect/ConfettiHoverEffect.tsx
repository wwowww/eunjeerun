import confetti from 'canvas-confetti';
import { ReactNode } from 'react';

type ConfettiHoverEffectProps = {
  children: ReactNode;
}

const ConfettiHoverEffect = ({ children }: ConfettiHoverEffectProps) => {
  const handleMouseEnter = () => {
    confetti({
      origin: {
        x: 0,
        y: 0.5,
      },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
    });

    confetti({
      origin: {
        x: 1,
        y: 0.5,
      },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
    });

    confetti({
      origin: {
        x: 0.5,
        y: 0.5,
      },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
    });
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
};

export default ConfettiHoverEffect;