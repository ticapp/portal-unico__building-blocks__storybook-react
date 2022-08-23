import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
}

export const Modal = ({ className, children, actionButtons, onClose, ...props }: ModalProps) => {
  const cssTabs = classNames('ama-modal', className);
  const { width } = useWindowSize();

  return (
    <BsModal className={cssTabs} {...props} centered>
      <BsModalHeader className="border-0 justify-content-end px-40 pt-40 pb-16">
        <Button className="ama-modal-header-btn-close p-0" onClick={onClose}>
          <Icon icon="ama-close" size="lg" />
        </Button>
      </BsModalHeader>
      <BsModalBody className="px-40 pb-40 pt-0">
        <Container className="p-0">
          {children}
          <Row className="justify-content-end mt-40 flex-column-reverse flex-md-row">
            {actionButtons.map((element, index) => {
              return (
                <Col xs={12} md={element.size} className={index > 0 ? `ms-md-24 mb-24 mb-md-0` : ''} key={uuidv4()}>
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
