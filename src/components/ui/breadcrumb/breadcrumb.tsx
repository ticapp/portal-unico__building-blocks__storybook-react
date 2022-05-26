
import React, { useRef, useState } from 'react'
import { Icon } from '../icon';
import './breadcrumb.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';
import { useOutsideElementClick, useWindowSize } from '../../hooks';



interface CrumbItems {
    url: string,
    name: string
}

export interface BreadCrumbProps {
    /** Add classes to the breadCrumb component */
    className?: string;
    /** Set an array pages in breadcrumb with name and url */
    breadcrumbs: Array<CrumbItems>;
    /** Get selected crumb url*/
    crumbSelectedUrl: string;
}

const BreadCrumbDesktop = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {
    const cssBreadCrumbDesktop = classNames('ama-breadcrumb-desktop', className);

    return (
        <nav className={cssBreadCrumbDesktop} aria-label="Breadcrumb">
            <ol className="d-flex align-items-center justify-content-start p-0 m-0">
                {breadcrumbs.map((page, index) => {

                    const isSelected = page.url === crumbSelectedUrl ? 'selected' : '';

                    const linkClassNames = classNames('items', isSelected, 'py-8', 'px-0');
                    const iconContainerClassNames = classNames('icon-container', 'd-flex align-items-center justify-content-center mx-8');

                    const isAtualLink = index === breadcrumbs.length - 1;

                    return (
                        <>
                            <li className="d-flex align-items-center justify-content-center">

                                <Link
                                    link={page.url}
                                    key={uuidv4()}
                                    aria-label={isSelected && 'page'}
                                    className={linkClassNames}
                                >
                                    {page.name}
                                </Link>
                                {!isAtualLink &&
                                    (
                                        <span
                                            key={uuidv4()}
                                            className={iconContainerClassNames}
                                        >
                                            <Icon className='icon-style' icon='ama-chevron-right' />
                                        </span>
                                    )
                                }
                            </li>

                        </>
                    )
                })}
            </ol>

        </nav>
    )
}

const BreadCrumbMobile = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {
    const historyCrumbRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);


    const cssBreadCrumbMobile = classNames('ama-breadcrumb-mobile', className, 'd-flex align-items-start justify-content-center flex-column');
    const cssBreadCrumbTableHistoryButton = classNames('history-button', 'd-flex align-items-center justify-content-center');
    const cssHistoryContainer = classNames('history-container', 'd-flex align-items-start justify-content-center flex-column mt-8 p-32');

    const setIsOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const closeBreadCrumbHistory = () => {
        setIsOpen(false);
    }

    const selectedCrumb = breadcrumbs.find(crumb => crumb.url === crumbSelectedUrl);

    useOutsideElementClick(historyCrumbRef, () => closeBreadCrumbHistory());

    return (
        <div className={cssBreadCrumbMobile}>
            <p className='title mb-8'>Você está aqui:</p>

            <button
                aria-expanded={isOpen}
                className={cssBreadCrumbTableHistoryButton}
                onClick={setIsOpenHandler}
                aria-haspopup="true"
                aria-label='Open Breadcrumb'
            >
                <Icon className='icon-style' icon="ama-chevron-left" /> {selectedCrumb?.name}
            </button>

            {isOpen && (
                <nav
                    ref={historyCrumbRef}
                    className={cssHistoryContainer}
                    aria-label="Breadcrumb"
                >
                    <ol>
                        {breadcrumbs.map((page) => {

                            const isSelected = page.url === crumbSelectedUrl ? 'selected' : '';

                            const linkClassNames = classNames('items', isSelected);

                            return (
                                <li key={uuidv4()} >
                                    <Link
                                        className={linkClassNames}
                                        aria-current={isSelected && 'page'}
                                        link={page.url}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ol>
                </nav>
            )}
        </div>
    )
}

export const BreadCrumb = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {

    const { width } = useWindowSize();

    if (width >= 1366) {
        return <BreadCrumbDesktop className={className} breadcrumbs={breadcrumbs} crumbSelectedUrl={crumbSelectedUrl} />
    }
    else {
        return <BreadCrumbMobile className={className} breadcrumbs={breadcrumbs} crumbSelectedUrl={crumbSelectedUrl} />
    }

}