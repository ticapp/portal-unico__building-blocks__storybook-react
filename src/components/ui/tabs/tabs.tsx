import React, { ReactNode, useMemo } from 'react';
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
  const tabsId = useMemo(() => props.id || uuidv4(), [props.id]);

  const cssTabs = classNames('ama-tabs', className);

  const renderTab = (tab) => {
    return tab?.map((content, index) => {
      const tabId = `${tabsId}-bstab-${index}`;

      return (
        <BsTab
          id={tabId}
          key={tabId}
          eventKey={content.keyTab}
          title={content.label}
          disabled={content.disabled ? content.disabled : false}
        >
          {content.children}
        </BsTab>
      );
    });
  };

  return (
    <BsTabs id={tabsId} className={cssTabs} {...props}>
      {renderTab(tabsName)}
    </BsTabs>
  );
};
