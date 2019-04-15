import React from "react";

export const gridToolTip = props => (
    <div
        {...props}
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,
            zIndex: 2000,
            ...props.style
        }}>
        L'Click to remove
    </div>
)