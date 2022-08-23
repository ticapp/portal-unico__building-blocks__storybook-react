import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ActionsButtonsProps, Modal, ModalProps, Button } from '../../../../components/ui';

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export const BasicModal: Story<ModalProps> = () => {
  const [modalShow, setModalShow] = React.useState(true);

  const args = {
    className: '',
    show: modalShow,
    children: (
      <>
        <h1 className="h4-bold mb-16">Este é o exemplo de uma modal média com um grande título de duas linhas de texto</h1>
        <p className="text-big-normal mb-16">
          Erat diam maecenas nibh at ipsum libero ac. Amet convallis blandit at luctus feugiat Erat diam maecenas nibh at ipsum libero ac.
          Amet convallis blandit at luctus feugiat
        </p>
        <p className="text-big-normal">
          Erat diam maecenas nibh at ipsum libero ac. Amet convallis blandit at luctus feugiat Erat diam maecenas nibh at ipsum libero ac.
          Amet convallis blandit at luctus feugiat
        </p>
      </>
    ),
    actionButtons: [
      {
        label: 'Cancelar',
        size: 'auto',
        variant: 'outline-brand-green-main',
        onClickActionButton: () => {
          setModalShow(false);
          console.log('Button Cancel');
        }
      },
      {
        label: 'Confirmar',
        size: 'auto',
        variant: 'brand-green-main',
        onClickActionButton: () => {
          setModalShow(false);
          console.log('Button Confirmed');
        }
      }
    ] as ActionsButtonsProps[],
    size: 'sm',
    onClose: () => {
      setModalShow(false);
      console.log('X closed modal');
    }
  } as ModalProps;
  return (
    <>
      <h2>Modal</h2>
      <Button variant="brand-green-main" onClick={() => setModalShow(true)}>
        Open Modal
      </Button>
      <Modal {...args} />
    </>
  );
};

BasicModal.storyName = 'Modal';
