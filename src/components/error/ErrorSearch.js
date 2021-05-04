import React from 'react';
import Header from "../start_page/Header";
import Footer from "../start_page/Footer";
import errorImg from "../../images/error.png"
import styled from "styled-components";

const StyledError = styled.div`
  min-height: 70vh
`;
const ErrorSearch = () => {
    return (
        <StyledError>
            <div className='text-center m-5'>
            <img src={errorImg} alt='error' width='30%'/>
            <h3 className=''>По Вашему запросу ничего не нашлось</h3>
            </div>
        </StyledError>
    );
};

export default ErrorSearch;