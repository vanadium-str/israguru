import React from 'react';

const Image = (props) => {
    return (
        <img src={props.img} alt='picture'  width='160' height='160'/>
    );
};

export default Image;