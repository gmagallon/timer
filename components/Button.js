import React from 'react';

export default React.memo(function Button({ children, onClick }) {
    return (
        <React.Fragment>
            <div onClick={onClick}>{children}</div>
            <style jsx>{`
                    div {
                        padding: 0.8rem;
                        border-radius: 1rem;
                        background-color: white;
                        border: solid 1px black;
                    }

                    @media only screen and (min-width: 1281px) {
                        div {
                            font-size: inherit;
                            cursor: pointer;
                        }
                    }
                    
                `}</style>
        </React.Fragment>
    )
})