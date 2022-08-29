import React, { ReactNode, useId } from 'react';
import classNames from 'classnames';

export interface JumbotronProps {
  /** Add classes to the Jumbotron component */
  className?: string;

  /** Title of Jumbotron */
  jumboTitle: Array<string>;

  /** Description of title */
  description?: string | ReactNode;
}

export const Jumbotron = ({ className, jumboTitle, description, ...props }: JumbotronProps) => {
  const cssJumbotron = classNames('ama-jumbotron', className);

  const renderTitle = () => {
    return jumboTitle?.map((title, i) => {
      if (jumboTitle.length - 1 === i) {
        return (
          <span className="h4-bold" key={useId()}>
            {title}
          </span>
        );
      }
      return (
        <React.Fragment key={useId()}>
          <span className="h4-bold">{title}</span>
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div className={cssJumbotron} {...props}>
      <h1 className="h4-bold">{renderTitle()}</h1>
      {description && React.isValidElement(description) ? description : <p className="p-0">{description}</p>}
    </div>
  );
};
