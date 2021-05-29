import React, {useContext} from 'react';
import Popup from "reactjs-popup";
import styled from "styled-components";
import {IsraGuruContext} from "../../utils/сontext";
import {cities} from "../../utils/constants";
import style from "../../css_modules/popup.module.css";

const StyledPopup = styled(Popup)`
  &-content {
    width: 60%;
  }
`;

const SelectCity = () => {
    const {setCity, city, setCurrentPage} = useContext(IsraGuruContext);

    return (
        <StyledPopup
            trigger={
                <input
                    className='w-75 d-flex flex-row cursor'
                    type='text'
                    placeholder='Тель Авив Яффо'
                    value={city}
                />}
            position="bottom right"
            on='hover'>

            <div className='d-flex justify-content-center'>
                <div className={`${style.popupHeader} d-flex justify-content-end`}>
                    <h3 className='font-weight-bold mt-4 mr-5'>
                        Топ популярных направлений
                    </h3>
                </div>

                <div className={`${style.popupList}`}>
                    <ul className='mt-4'>
                        <li className='cursor mb-2' value={city} onClick={() => {
                            setCity('');
                            setCurrentPage(1);
                        }}>
                            Показать все
                        </li>

                        {cities.map((item, key) =>
                            <li key={key} className='cursor mb-2' value={city} onClick={() => {
                                setCity(item)
                                setCurrentPage(1);
                            }}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </StyledPopup>
    );
};

export default SelectCity;