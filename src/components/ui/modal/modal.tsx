import classNames from 'classnames';
import React, { ReactNode, useRef, useId } from 'react';
import {
  Modal as BsModal,
  ModalProps as BsModalProps,
  ModalHeader as BsModalHeader,
  ModalBody as BsModalBody,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Button } from '../buttons';
import { Icon } from '../icon';
import './modal.scss';
import { useWindowSize } from '../../hooks/use-window-size/use-window-size';
import { useModalContainerLogic } from '../../hooks/use-modal-container-logic/use-modal-container-logic';

export interface ActionsButtonsProps {
  variant: string;
  label: string | ReactNode;
  size?: boolean | 'auto' | number | { span: boolean | 'auto' | number; offset: number; order: 'first' | 'last' | number };
  onClickActionButton: () => void;
}

export interface ModalProps extends BsModalProps {
  /** Add classes to the Modal component */
  className?: string;
  /** Inner childs of the component to be rendered */
  children?: ReactNode;
  /** Action Buttons */
  actionButtons: ActionsButtonsProps[];
  /** Modal size */
  size: 'sm' | 'lg';
  /** On close button action */
  onClose: () => void;

  /** responsive status */
  isMobile?: boolean;
}

export const Modal = ({ isMobile, className, children, actionButtons, onClose, ...props }: ModalProps) => {
  const cssTabs = classNames('ama-modal', className);
  const { width } = useWindowSize(isMobile);
  const modalBodyRef = useRef(null);
  const { isContainerBig } = useModalContainerLogic(modalBodyRef);

  return (
    <BsModal className={cssTabs} {...props} centered>
      <BsModalHeader className="border-0 justify-content-end px-40 pt-40 pb-16">
        <Button variant="link" className="p-0" onClick={onClose}>
          <Icon icon="ama-close" size="lg" />
        </Button>
      </BsModalHeader>
      <BsModalBody className={`${isContainerBig ? 'pb-0' : 'pb-40'} px-40 pt-0 d-flex`} ref={modalBodyRef}>
        <Container className="p-0 m-auto">
          {children}
          <Row
            className={`${
              isContainerBig ? 'sticky-bottom bg-neutral-white pb-40' : ''
            } justify-content-end mt-40 flex-column-reverse flex-md-row`}
          >
            {actionButtons &&
              actionButtons.map((element, index) => {
                return (
                  <Col xs={12} md={element.size} className={index > 0 ? `ms-md-24 mb-24 mb-md-0` : ''} key={useId()}>
                    <Button
                      onClick={element.onClickActionButton}
                      variant={element.variant}
                      className={width < 768 ? 'w-100 justify-content-center' : ''}
                    >
                      {element.label}
                    </Button>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </BsModalBody>
    </BsModal>
  );
};
