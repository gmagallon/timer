import React from 'react';

export default React.memo(function Centered({ children, style, ...props }) {
    return (
        <div {...props} style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center'}} data-selector="centered">
            {children}
        </div>
    )
});