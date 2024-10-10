import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const closeModalWithDelay = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    closeModalWithDelay,
  };
};

export default useModal;