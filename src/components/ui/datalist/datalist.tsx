import classNames from 'classnames';
import React from 'react';
import { useWindowSize } from '../../hooks';

import './datalist.scss';


interface DataListValues {
    label: string;
    value: string;
}

export interface DatalistProps {
    // Add title to the component
    title: string;
    // Add all data to describe list
    data: Array<DataListValues>;
}

export const Datalist = ({ title, data }: DatalistProps) => {

    const { width } = useWindowSize();


    return (
        <>
            <div className='datalist-container d-flex align-items-center justify-content-start flex-column m-0'>
                <h5 className='d-flex mb-32'>{title}</h5>

                <dl className='items-container'>
                    {data && data.map((item, index) => {

                        const itemsclassName = classNames('items-content', width <= 360 && 'mobile');

                        return (
                            <div className={itemsclassName}>
                                <dt>{item.label}</dt>
                                <dd>{item.value}</dd>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </>
    )
}