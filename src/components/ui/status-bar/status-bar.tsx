import classNames from 'classnames';
import React from 'react';
import { Icon, IconProps } from '../icon';

import './status-bar.scss';

export interface StatusBarProps {
    url: string;
    className: string;
    icon: IconProps;
}

export const StatusBar = ({ className, url, icon }) => {


    const containerClassName = classNames('ama-status-bar-container', 'w-100 d-flex align-items-center justify-content-center', className)
    const infoContainerClassName = classNames('status-bar-content', 'w-100 d-flex align-items-center justify-content-between my-0 mx-auto');

    return (
        <div className={containerClassName}>
            <div className={infoContainerClassName}>

                <button className='d-flex align-items-center justify-content-center py-10 px-16'>
                    <Icon className='me-8' ariaHidden={true} icon="ama-arrow-left" />
                    <p className='w-100 m-0'>Voltar ao início</p>
                </button>

                <div className='info-container py-8 m-0 d-flex align-items-center justify-content-center'>
                    <div className='info-content me-24'>
                        <p className='m-0'>Pontos da carta de condução</p>
                        <span className='m-0'>15 pontos</span>
                    </div>
                    <Icon ariaHidden={true} icon="ama-badge" />
                </div>
            </div>
        </div>
    )
}