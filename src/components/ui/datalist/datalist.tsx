import React from 'react';

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


    return (
        <>
            <div className='datalist-container d-flex align-items-center justify-content-start flex-column § m-0'>
                <h5 className='d-flex mb-32'>{title}</h5>

                <dl className='items-container'>
                    {data && data.map(item => {
                        return (
                            <div className='items-content'>
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