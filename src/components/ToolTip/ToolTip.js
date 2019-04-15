import React from "react"

export const toolTip = props => (
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
        Left click to add <br />
        Right click to remove
    </div>
)