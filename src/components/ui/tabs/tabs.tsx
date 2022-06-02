import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Tab as BsTab, Tabs as BsTabs, TabsProps as BsTabsProps, TabProps as BsTabProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
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
        <BsTab eventKey={content.keyTab} title={content.label} disabled={content.disabled ? content.disabled : false} key={uuidv4()}>
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
