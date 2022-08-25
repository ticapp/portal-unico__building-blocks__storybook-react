import classNames from 'classnames';
import React, { ReactNode, useId } from 'react';
import { Tab as BsTab, TabProps as BsTabProps, Tabs as BsTabs, TabsProps as BsTabsProps } from 'react-bootstrap';
import './tabs.scss';

export interface TabsProps extends BsTabsProps {
  /** Add classes to the Tabs component */
  className?: string;
}

export interface TabProps extends BsTabProps {
  /** Tabs Names */
  tabsName: Array<{ label: string; children: ReactNode; keyTab: string; disabled: boolean }>;
}

export const Tabs = ({ className, tabsName, ...props }: TabsProps & TabProps) => {
  const cssTabs = classNames('ama-tabs', className);

  const renderTab = (tab) => {
    return tab?.map((content) => {
      return (
        <BsTab key={useId()} eventKey={content.keyTab} title={content.label} disabled={content.disabled ? content.disabled : false}>
          {content.children}
        </BsTab>
      );
    });
  };

  return (
    <BsTabs className={cssTabs} {...props}>
      {renderTab(tabsName)}
    </BsTabs>
  );
};
