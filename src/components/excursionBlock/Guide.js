import React from 'react';

const Guide = props => {
    return (
        <div className='row'>
            <img className='mr-1 imgGuide rounded-circle' src={props.img}
                 alt='guide'/>
            <div>
                <p className='small mb-0'>Ваш гид:</p>
                <p className='cursor' onClick={() => {
                    props.changePage('guideInfo')
                }}>{props.name}  {props.surname}</p>
            </div>
        </div>
    );
};

export default Guide;