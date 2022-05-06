import React from 'react';
import './loader.scss';
import classNames from 'classnames';

export interface LoaderProps {
  /** Add classes to the Footer component */
  classLoader?: string;

  /** Select type of spinner, if not define default will be shown */
  type?: 'spinner-two-half' | 'spinner-half' | 'dots' | 'default';
}

export const Loader = ({ classLoader, type }: LoaderProps) => {
  const cssLoader = classNames('ama-loader', classLoader);
  return (
    <div className={cssLoader}>
      {(() => {
        switch (type) {
          case 'spinner-two-half':
            return (
              <div className='ouro'>
                <span className='left'>
                  <span className='anim'></span>
                </span>
                <span className='right'>
                  <span className='anim'></span>
                </span>
              </div>
            );
          case 'spinner-half':
            return (
              <div className='ouro ouro2'>
                <span className='left'>
                  <span className='anim'></span>
                </span>
                <span className='right'>
                  <span className='anim'></span>
                </span>
              </div>
            );
          case 'dots':
            return (
              <div className='loading'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            );

          case 'default':
          default:
            return (
              <div className='ouro ouro3'>
                <span className='left'>
                  <span className='anim'></span>
                </span>
                <span className='right'>
                  <span className='anim'></span>
                </span>
              </div>
            );
        }
      })()}
    </div>
  );
};
