import React from 'react';

const Guide = props => {
    return (
        <div className='row bottom'>
            <img className='mr-1 h-25 w-25 rounded-circle' src='https://i.imgur.com/ehJcD5r.jpg'
                 alt='guide'/>
            <div>
                <p className='small mb-0'>Ваш гид:</p>
                <p className='cursor' onClick={() => {
                    props.changePage('guideInfo')
                }}>{props.name} {props.surname}</p>
            </div>
        </div>
    );
};

export default Guide;