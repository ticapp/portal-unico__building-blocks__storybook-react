import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../../../../components/ui';

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export const BasicModal: Story<ModalProps> = () => {
  const args = {
    className: '',
    show: true,
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
        variant: 'outline-brand-green-main'
      },
      {
        label: 'Confirmar',
        size: 'auto',
        variant: 'brand-green-main'
      }
    ],
    size: 'sm'
  } as ModalProps;
  return (
    <>
      <div>Modal</div>
      <Modal {...args} />
    </>
  );
};

BasicModal.storyName = 'Modal';
