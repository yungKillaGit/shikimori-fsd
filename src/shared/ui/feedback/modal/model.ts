import {
  createEvent,
  createStore,
  sample,
  Event,
  Store,
} from 'effector';

export interface ModalStore {
  open: boolean;
  name: string;
}

export interface ModalFactoryConfig {
  name: string;
}

export interface ModalController {
  open: Event<void>;
  close: Event<void>;
  $modal: Store<ModalStore>;
}

export const createModal = (name: string): ModalController => {
  const modalOpened = createEvent();
  const modalClosed = createEvent();

  const $modal = createStore<ModalStore>({
    open: false,
    name,
  });

  sample({
    clock: modalOpened,
    source: $modal,
    fn: (modal) => {
      return {
        ...modal,
        open: true,
      };
    },
    target: $modal,
  });

  sample({
    clock: modalClosed,
    source: $modal,
    fn: (modal) => {
      return {
        ...modal,
        open: false,
      };
    },
    target: $modal,
  });

  return {
    open: modalOpened,
    close: modalClosed,
    $modal,
  };
};
