import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

export default Header;
