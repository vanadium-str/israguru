import React from 'react';

const Button = props => {
    return (
            <button className='btnBig' onClick={() => {
                props.changePage('fullInfo')
            }}>Подробнее
            </button>
    );
};

export default Button;