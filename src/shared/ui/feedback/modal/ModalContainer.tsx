import { ReactNode } from 'react';
import Modal from './Modal';

interface ModalContainerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalContainer = ({ open, children, onClose }: ModalContainerProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default ModalContainer;
