/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';

export interface RichTextProps {
  /** String of html code */
  codeHtml: string;

  /** Css classes to rich text */
  className?: string;
}

export const RichText = ({ codeHtml, className }: RichTextProps) => {
  const cssRichText = classNames('ama-rich-text', className);
  return <div className={cssRichText} dangerouslySetInnerHTML={{ __html: codeHtml }} />;
};
