import React, {useContext} from 'react';
import Popup from "reactjs-popup";
import styled from "styled-components";
import {IsraGuruContext} from "../../utils/Context";
import {cities} from "../../utils/constants";

const StyledPopup = styled(Popup)`
  &-content {
    width: 60%;
  }
`;

const ModalCity = () => {
    const {setCity, city} = useContext(IsraGuruContext);
    return (
        <StyledPopup
            trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Тель Авив Яффо' value={city}/>}
            position="bottom right"
            on='hover'
        >
            <div className='d-flex justify-content-center'>
                <div className='popupHeader d-flex justify-content-end'>
                    <h3 className='font-weight-bold mt-4 mr-5'>Топ популярных направлений</h3>
                </div>
                <div className='popupList'>
                    <ul className='mt-4'>
                        {cities.map((item, key)=>
                            <li key={key} className='cursor mb-2' value={city} onClick={()=>{setCity(item)}}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </StyledPopup>
    );
};

export default ModalCity;