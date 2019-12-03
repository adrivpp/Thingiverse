import React from 'react';
import { Row } from '../pages/thing-details/styles';

export default function AnalyticItem({ count, title }) {
    return (
        <>
            <Row>
                <p>{title}</p>
                <p>{count}</p>
            </Row>
            <hr />
        </>
    )
}