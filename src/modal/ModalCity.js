import React from 'react';
import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  &-content {
    width: 60%;
  }
`;

const ModalCity = () => {
    return (
        <StyledPopup
            trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Тель Авив Яффо'/>}
            position="bottom right"
            on='hover'
        >
            <div className='d-flex justify-content-center'>
                <div className='popupHeader d-flex justify-content-end'>
                    <h3 className='font-weight-bold mt-4 mr-5'>Топ популярных направлений</h3>
                </div>
                <div className='popupList'>
                    <ul className='mt-4'>
                        <li className='cursor mb-2'>Иерусалим</li>
                        <li className='cursor mb-2'>Тель-Авив</li>
                        <li className='cursor mb-2'>Кейсария</li>
                        <li className='cursor mb-2'>Хайфа</li>
                        <li className='cursor mb-2'>Эйлат</li>
                        <li className='cursor mb-2'>Акко</li>
                        <li className='cursor mb-2'>Цфат</li>
                    </ul>
                </div>
            </div>
        </StyledPopup>
    );
};

export default ModalCity;