import React from 'react';

const Button = props => {
    return (
            <button className='btnBig' onClick={() => {
                props.changePage('fullInfo', props.guide)
            }}>Подробнее
            </button>
    );
};

export default Button;