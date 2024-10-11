import { ReactNode } from 'react';
import style from './Modal.module.scss';
import { range } from 'lodash';

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
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={style.header}>
            <h2 className={style.modalTitle}>{title}</h2>
            <ul className={style.button}>
              {range(0, 3)?.map((i: number) => (
                <li key={i + "list key"}  onClick={i === 2 ? onClose : undefined}></li>
              ))}
            </ul>
          </div>
        )}
        <div className={style.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;