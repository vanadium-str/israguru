import React from 'react';
import Header from "../start_page/Header";
import Footer from "../start_page/Footer";
import errorImg from "../../images/error.png"

const ErrorSearch = () => {
    return (
        <div>
            <Header/>
            <div className='text-center m-5'>
                <img src={errorImg} alt='error' width='20%'/>
                <h3 className=''>По Вашему запросу ничего не нашлось</h3>
            </div>
            <div className='fixed-bottom m-3'><Footer/></div>
        </div>
    );
};

export default ErrorSearch;