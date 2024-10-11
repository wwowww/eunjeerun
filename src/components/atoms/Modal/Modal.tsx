import { ReactNode } from 'react';
import { range } from 'lodash';
import style from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  bottomCloseButton?: boolean;
}

const Modal = ({ isOpen, onClose, title, children, bottomCloseButton=false }: ModalProps) => {
  const modalClass = `${style.modal} ${isOpen ? style.open : style.close}`;

  return (
    <div className={modalClass} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={style.header}>
            <h2 className={style.modalTitle}>{title}</h2>
            <ul className={style.button}>
              {range(0, 3)?.map((i: number) => (
                <li key={i + "list key"} onClick={i === 2 ? onClose : undefined}></li>
              ))}
            </ul>
          </div>
        )}
        <div className={`${style.modalBody} ${!bottomCloseButton ? '' : style.hasBottomCloseButton}`}>{children}</div>
        {bottomCloseButton && (
          <div className={style.buttonWrap}>
            <button onClick={onClose}>OK</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
