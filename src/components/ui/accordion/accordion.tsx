import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Accordion as BsAccordion, AccordionProps as BsAccordionProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './accordion.scss';

export interface AccordionInfo {
  title: string;
  children: ReactNode;
}

export interface AccordionProps extends BsAccordionProps {
  /** Add classes to the Accordion component */
  className?: string;

  /** Array of info */
  accordionInfo: AccordionInfo[];
}

export const Accordion = ({ className, accordionInfo, ...props }: AccordionProps) => {
  const cssAccordion = classNames('ama-accordion', className);
  const renderItemTab = (item: AccordionInfo[]) => {
    return item?.map((content, index) => {
      return (
        <BsAccordion.Item className={item.length - 1 === index ? '' : 'mb-16'} eventKey={`tab-${index}`} key={uuidv4()}>
          <BsAccordion.Header className="text-big-bold">{content.title}</BsAccordion.Header>
          <BsAccordion.Body className="text-big-normal">
            <hr />
            {content.children}
          </BsAccordion.Body>
        </BsAccordion.Item>
      );
    });
  };
  return (
    <BsAccordion {...props} className={cssAccordion}>
      {renderItemTab(accordionInfo)}
    </BsAccordion>
  );
};
