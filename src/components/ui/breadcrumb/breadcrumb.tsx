
import React, { useRef, useState } from 'react'
import { Icon } from '../icon';
import './breadcrumb.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';
import { useOutsideElementClick, usePathname, useWindowSize } from '../../hooks';

interface CrumbItems {
    url: string,
    name: string
}

interface CommonBreadCrumbProps {
    className?: string;
    breadcrumbs: Array<CrumbItems>;
    navAriaLabel: string;
}

interface BreadCrumbDesktopProps extends CommonBreadCrumbProps {
    linkAriaLabel: string;
}

interface BreadCrumbMobileProps extends CommonBreadCrumbProps {
    buttonAriaLabel: string;
    ariaHasPopUp: boolean;
    breadCrumbMobileTitle: string;
}

export interface BreadCrumbProps {
    /** Add classes to the breadCrumb component */
    className?: string;
    /** Set an array pages in breadcrumb with name and url */
    breadcrumbs: Array<CrumbItems>;
    //** Set nav arial label */
    navAriaLabel: string;
    //** Set button aria label in Mobile Breadcrumb */
    buttonAriaLabel: string;
    //** Set link aria label in Desktop Breadcrumb*/
    linkAriaLabel: string;
    //** Set if aria has popup in Mobile Breadcrumb */
    ariaHasPopUp: boolean;
    // ** Set Breadcrumb Mobile Title*/
    breadCrumbMobileTitle: string;
}

const BreadCrumbDesktop = ({ className, breadcrumbs, navAriaLabel, linkAriaLabel }: BreadCrumbDesktopProps) => {
    const cssBreadCrumbDesktop = classNames('ama-breadcrumb-desktop', className);

    const crumbSelectedUrl = usePathname();

    return (
        <nav className={cssBreadCrumbDesktop} aria-label={navAriaLabel}>
            <ol className="d-flex align-items-center justify-content-start p-0 m-0">
                {breadcrumbs.map((page, index) => {

                    const isSelected = page.url === crumbSelectedUrl ? 'selected' : '';

                    const linkClassNames = classNames('items', isSelected, 'py-8', 'px-0');
                    const iconContainerClassNames = classNames('icon-container', 'd-flex align-items-center justify-content-center mx-8');

                    const isAtualLink = index === breadcrumbs.length - 1;

                    return (
                        <li key={uuidv4()} className="d-flex align-items-center justify-content-center">

                            <Link
                                link={page.url}
                                aria-label={linkAriaLabel}
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
                        </li>
                    )
                })}
            </ol>

        </nav>
    )
}

const BreadCrumbMobile = ({ className, breadcrumbs, navAriaLabel, buttonAriaLabel, ariaHasPopUp, breadCrumbMobileTitle }: BreadCrumbMobileProps) => {
    const historyCrumbRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const crumbSelectedUrl = usePathname();

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
            <p className='title mb-8'>{breadCrumbMobileTitle}</p>

            <button
                type='button'
                aria-expanded={isOpen}
                className={cssBreadCrumbTableHistoryButton}
                onClick={setIsOpenHandler}
                aria-haspopup={ariaHasPopUp}
                aria-label={buttonAriaLabel}
            >
                <Icon className='icon-style me-8' icon="ama-chevron-left" ariaHidden={true} /> {selectedCrumb?.name}
            </button>

            {isOpen && (
                <nav
                    ref={historyCrumbRef}
                    className={cssHistoryContainer}
                    aria-label={navAriaLabel}
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

export const BreadCrumb = ({ className, breadcrumbs, navAriaLabel, buttonAriaLabel, ariaHasPopUp, linkAriaLabel, breadCrumbMobileTitle }: BreadCrumbProps) => {

    const { width } = useWindowSize();


    if (width >= 1366) {
        return <BreadCrumbDesktop className={className} breadcrumbs={breadcrumbs} navAriaLabel={navAriaLabel} linkAriaLabel={linkAriaLabel} />
    }
    else {
        return <BreadCrumbMobile className={className} breadcrumbs={breadcrumbs} navAriaLabel={navAriaLabel} buttonAriaLabel={buttonAriaLabel} ariaHasPopUp={ariaHasPopUp} breadCrumbMobileTitle={breadCrumbMobileTitle} />
    }

}