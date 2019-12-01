import React from 'react';
import { Row } from '../pages/thing-details/styles';

export default function AnalyticItem({ count, title }) {
    return (
        <>
            <Row>
                <div>{title}</div>
                <div>{count}</div>
            </Row>
            <hr />
        </>
    )
}