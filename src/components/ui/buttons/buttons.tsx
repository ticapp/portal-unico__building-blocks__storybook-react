import React, { ReactNode } from 'react';
import './buttons.scss';
import classNames from 'classnames';
import { Button as BsButton, ButtonProps as BsButtonProps } from 'react-bootstrap';
import { Icon } from '../../../components/ui';
export interface ButtonProps extends BsButtonProps {
  /** Add classes to the Buttons component */
  className?: string;

  /** Inner childs of the component to be rendered */
  children?: ReactNode;

  /** Name/id of icon */
  iconName?: string;

  /**Icon direction */
  iconDirection?: 'right' | 'left' | 'none';
}

export const Button = ({ className, children, iconName = '', iconDirection = 'none', ...props }: ButtonProps) => {
  const cssButtons = classNames('ama-buttons', className, 'd-flex align-items-center', iconDirection === 'right' ? 'justify-content-between' : '');
  return (
    <BsButton className={cssButtons} {...props}>
      {iconDirection === 'left' ? <Icon icon={iconName} className='me-8' ariaHidden='true' /> : ''}
      {children}
      {iconDirection === 'right' ? <Icon icon={iconName} className='ms-8' ariaHidden='true' /> : ''}
    </BsButton>
  );
};
