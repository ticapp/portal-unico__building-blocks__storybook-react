import React, { ReactNode } from 'react';
import './buttons.scss';
import classNames from 'classnames';
import { Button, ButtonProps } from 'react-bootstrap';
import { Icon } from '../../../components/ui';

export interface ButtonsProps extends ButtonProps {
  /** Add classes to the Buttons component */
  className?: string;

  /** Inner childs of the component to be rendered */
  children?: ReactNode;

  /** Name/id of icon */
  iconName?: string;

  /**Icon direction */
  iconDirection?: 'right' | 'left' | 'none';
}

export const Buttons = ({ className, children, iconName = '', iconDirection = 'none', ...props }: ButtonsProps) => {
  const cssButtons = classNames('ama-buttons', className, 'd-flex align-items-center', iconDirection === 'right' ? 'justify-content-between' : '');
  return (
    <Button className={cssButtons} {...props}>
      {iconDirection === 'left' ? <Icon icon={iconName} className='me-8' /> : ''}
      {children}
      {iconDirection === 'right' ? <Icon icon={iconName} className='ms-8' /> : ''}
    </Button>
  );
};
