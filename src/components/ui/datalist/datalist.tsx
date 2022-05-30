import React from 'react';
// import { useWindowSize } from '../../hooks';
// import { v4 as uuidv4 } from 'uuid';

import './datalist.scss';
import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames';


interface DataListValues {
    label: string;
    value: string;
}

export interface DatalistProps {
    // Add title to the component
    title: string;
    // Add all data to describe list
    data: Array<DataListValues>;
    // Set classNames in the component
    className?: string;
}

export const Datalist = ({ title, data, className }: DatalistProps) => {

    const itemsClassName = classNames('items-content mb-16 mb-sm-24');
    const datalistClassName = classNames('datalist-container py-32 px-24 px-sm-32 py-sm-48', className)

    return (
        <>
            <Container className={datalistClassName}>


                <Row>
                    <Col className='d-flex mb-32' xs={12} >
                        <h2 className='w-100 text-start'>{title}</h2>
                    </Col>
                </Row>
                    <dl className='row'>

                        {data && data.map(item => {


                            return (
                                <Col xs={12} sm={5} className={itemsClassName}>
                                    <dt className='mb-8'> {item.label}</dt>
                                    <dd className='mb-0'>{item.value}</dd>
                                </Col>
                            )
                        })}
                    </dl>
            </Container>
        </>
    )
}