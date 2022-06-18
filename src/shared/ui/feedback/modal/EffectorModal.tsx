import { useStore } from 'effector-react';
import { FC } from 'react';
import ModalContainer from './ModalContainer';
import { ModalController } from './model';

interface EffectorModalProps {
  View: FC;
  modal: ModalController;
}

export const EffectorModal = ({
  View,
  modal,
}: EffectorModalProps) => {
  return function EffectorModalWrapper() {
    const { open } = useStore(modal.$modal);
    return (
      <ModalContainer open={open} onClose={modal.close}>
        <View />
      </ModalContainer>
    );
  };
};
