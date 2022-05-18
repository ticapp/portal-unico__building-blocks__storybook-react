import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface JumbotronProps {
  /** Add classes to the Jumbotron component */
  className?: string;

  /** Title of Jumbotron */
  jumboTitle: Array<string>;

  /**Description of title */
  description?: string;
}

export const Jumbotron = ({ className, jumboTitle, description, ...props }: JumbotronProps) => {
  const cssJumbotron = classNames('ama-jumbotron', className);

  const renderTitle = () => {
    return jumboTitle?.map((title, i) => {
      if (jumboTitle.length - 1 === i) {
        return (
          <span className='h4-bold' key={uuidv4()}>
            {title}
          </span>
        );
      } else {
        return (
          <React.Fragment key={uuidv4()}>
            <span className='h4-bold'>{title}</span>
            <br />
          </React.Fragment>
        );
      }
    });
  };

  return (
    <div className={cssJumbotron} {...props}>
      <h1 className='h4-bold'>{renderTitle()}</h1>
      {description && <p className='p-0'>{description}</p>}
    </div>
  );
};
