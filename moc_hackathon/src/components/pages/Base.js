import React, { Children } from 'react';

const Base = ({Children}) => {
    return (
        <div>
        <header className='header'>
            This is my header
        </header>
        <div>
            <h1>
                {Children}
            </h1>
        </div>

        <footer className='footer'>
            This is my footer
        </footer>
        </div>
    );
};

export default Base;