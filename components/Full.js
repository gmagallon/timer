import React from 'react';

export default React.memo(function Full({ children, style, centered, ...props }) {
    return (
        <div {...props} style={{ ...style, width: '100%', height: '100%', ...(centered ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}) }}>
            {children}
        </div>
    )
});