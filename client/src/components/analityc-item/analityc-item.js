import React from 'react';

export default function AnalyticItem({ count, title, icon }) {
    return (
        <>
            <div>{title}</div>
            <div>{count}</div>
            <hr />

        </>
    )
}