
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
    /** Add classes to the BreadCrumb component */
    className?: string;

    /** Set an array pages in breadcrumb */
    breadcrumbs: Array<CrumbItems>;
    /** Get selected crumb */
    crumbSelectedUrl: string;
}

const BreadCrumbDesktop = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {
    const cssBreadCrumbDesktop = classNames('ama-breadcrumb-desktop', className, 'd-flex align-items-center justify-content-start');

    return (
        <div className={cssBreadCrumbDesktop}>
            {breadcrumbs.map((page, index) => {

                const isSelected = page.url === crumbSelectedUrl ? 'selected' : '';

                const linkClassNames = classNames('items', isSelected, 'py-8', 'px-0');
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
                                <span key={uuidv4()} className={iconContainerClassNames}>
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

const BreadCrumbMobile = ({ className, breadcrumbs, crumbSelectedUrl }: BreadCrumbProps) => {
    const historyCrumbRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);


    const cssBreadCrumbMobile = classNames('ama-breadcrumb-mobile', className, 'd-flex align-items-start justify-content-center flex-column');
    const cssBreadCrumbTableHistoryButton = classNames('history-button', 'd-flex align-items-center justify-content-center');
    const cssHistoryContainer = classNames('history-container', 'd-flex align-items-start justify-content-center flex-column mt-8 p-32');

    const setIsOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    useOutsideElementClick(historyCrumbRef, () => setIsOpenHandler());

    return (
        <div className={cssBreadCrumbMobile}>
            <p className='title mb-8'>Você está aqui:</p>

            <button className={cssBreadCrumbTableHistoryButton} onClick={setIsOpenHandler}>
                <Icon className='icon-style ' icon="ama-chevron-left" /> Histórico de infrações
            </button>

            {isOpen && (
                <div ref={historyCrumbRef} className={cssHistoryContainer}>
                    <ul>
                        {breadcrumbs.map((page) => {

                            return (
                                <li key={uuidv4()}>
                                    <Link className='items' link={page.url}>
                                        {page.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
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