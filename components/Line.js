import React from 'react';

export default function Line({ title, children, onMinus, onPlus }) {
    return (
        <div style={{ padding: '10px' }}>
            <h3>{title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {children}
            </div>
        </div>
    )
}