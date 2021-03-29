import React from 'react';

const Date = () => {
    return (
        <div className='row top'>
            {/*{TODO => take DATE from JSON bannerData}*/}
            <p className='font-weight-bold font-italic d-flex align-items-center mr-1 date'>03</p>
            <div>
                <p className='dash mb-0'>сентября</p>
                <p>воскресенье</p>
            </div>
        </div>
    );
};

export default Date;