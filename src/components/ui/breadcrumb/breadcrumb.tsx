
import React, { useEffect, useState } from 'react'
import { Icon } from '../icon';
import './breadcrumb.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';



interface CrumbItems {
    url: string,
    name: string
}

export interface BreadCrumbProps {
    /** Add classes to the BreadCrumb component */
    className?: string;

    /** Set an array pages in breadcrumb */
    breadcrumbs: Array<CrumbItems>;
    /** Get selected crumb */
    crumbSelectedUrl: string;
}

export const BreadCrumb = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {


    // [] Do all verifies will be use for all components
    // [] Verify screen size and return different object (if is mobile, tablet or desktop)
    // [] Get crumb url and name build link
    // [] Test component in storybook


    const cssBreadCrumb = classNames('ama-breadcrumb', className, 'd-flex align-items-center justify-content-start');


    return (
        <div className={cssBreadCrumb}>
            {breadcrumbs.map((page, index) => {

                const isSelected = page.url === crumbSelectedUrl ? 'selected' : '';

                const linkClassNames = classNames('item', isSelected, 'py-8', 'px-0');
                const iconContainerClassNames = classNames('icon-container', 'd-flex align-items-center justify-content-center mx-8');

                const isAtualLink = index === breadcrumbs.length - 1;

                return (
                    <>
                        <Link
                            link={page.url}
                            key={uuidv4()}
                            className={linkClassNames}
                        >
                            {page.name}
                        </Link>
                        {!isAtualLink &&
                            (
                                <span className={iconContainerClassNames}>
                                    <Icon className='icon-style' icon='ama-chevron-right' />
                                </span>
                            )
                        }
                    </>
                )
            })}
        </div>
    )
}