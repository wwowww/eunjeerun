import { ReactNode } from 'react';
import style from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const modalClass = `${style.modal} ${isOpen ? style.open : style.close}`;
  // if (!isOpen) return null;

  return (
    <div className={modalClass} onClick={onClose}>
      <div className={style.modalContent}>
        {title && <h2 className={style.modalTitle}>{title}</h2>}
        <div className={style.modalBody}>{children}</div>
        <button className={style.closeButton} onClick={onClose}>x</button>
      </div>
    </div>
  );
};

export default Modal;