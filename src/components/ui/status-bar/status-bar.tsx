import classNames from 'classnames';
import React from 'react';
import { useWindowSize } from '../../hooks';
import { Icon } from '../icon';
import { Link } from '../link';
import { ResponsiveWrapper } from '../responsive-wrapper';

import './status-bar.scss';

export interface StatusBarProps {
  url: string;
  className?: string;
  backButtonText: string;
  title?: string;
  subtitle?: string;
  icon?: string;
}

export interface StatusBarPropsMobile {
  url: string;
  backButtonText: string;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
}

const StatusBarMobile = ({ className, url, icon, backButtonText, title, subtitle }: StatusBarPropsMobile) => {
  const containerClassName = classNames(
    'ama-status-bar-container-mobile',
    'w-100 px-16 d-flex align-items-center justify-content-center',
    className
  );
  const infoContainerClassName = classNames(
    'status-bar-content-mobile',
    'w-100 d-flex align-items-center justify-content-between my-0 mx-auto'
  );

  return (
    <div className={containerClassName}>
      <div className={infoContainerClassName}>
        <Link title={backButtonText} link={url} className="redirect d-flex align-items-center justify-content-center pl-16 py-8">
          <Icon className="me-8" ariaHidden icon="ama-arrow-left" />
        </Link>

        <div className="info-container py-8 pe-12 m-0 d-flex align-items-center justify-content-center">
          <div className="info-content me-24">
            {title && <p className="m-0">{title}</p>}
            {subtitle && <span className="m-0">{subtitle}</span>}
          </div>
          {icon && <Icon ariaHidden icon={icon} />}
        </div>
      </div>
    </div>
  );
};

const StatusBarDesktop = ({ className, url, icon, backButtonText, title, subtitle }: StatusBarProps) => {
  const containerClassName = classNames('ama-status-bar-container', 'w-100 d-flex align-items-center justify-content-center', className);
  const infoContainerClassName = classNames('status-bar-content', 'w-100 d-flex align-items-center justify-content-between my-0 mx-auto');

  return (
    <div className={containerClassName}>
      <div className={infoContainerClassName}>
        <Link link={url} className="redirect d-flex align-items-center justify-content-center py-10 px-16">
          <Icon className="me-8" ariaHidden icon="ama-arrow-left" />
          <p className="w-100 m-0">{backButtonText}</p>
        </Link>

        <div className="info-container py-8 m-0 d-flex align-items-center justify-content-center">
          <div className="info-content me-24">
            {title && <p className="m-0">{title}</p>}
            {subtitle && <span className="m-0">{subtitle}</span>}
          </div>
          {icon && <Icon ariaHidden icon={icon} />}
        </div>
      </div>
    </div>
  );
};

export const StatusBar = (props: StatusBarProps) => {
  const { width } = useWindowSize();

  return (
    <>
      <ResponsiveWrapper condition={width >= 768}>
        <StatusBarDesktop {...props} />
      </ResponsiveWrapper>

      <ResponsiveWrapper condition={width < 768}>
        <StatusBarMobile {...props} />
      </ResponsiveWrapper>
    </>
  );
};
