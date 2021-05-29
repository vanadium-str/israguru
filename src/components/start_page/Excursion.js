import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import ButtonMore from "../excursionBlock/ButtonMore";
import other from "../../css_modules/other.module.css";
import styled from "styled-components";

const StyledExcursion = styled.div`
  min-height: ${props => 70 / props.size}vh
`;
const Excursion = ({id, guide, size}) => {
    return (
        <StyledExcursion className='container-fluid' size={size}>

            <div className='row shadow mb-3'>
                <div className='col-8'>

                    <div className='d-flex justify-content-between'>
                        <div className='mt-2'>
                            <Image id={id}/>
                        </div>
                        <div className='ml-4 mb-2'>
                            <Description id={id}/>
                        </div>
                    </div>
                </div>

                <div className='col-2'>
                    <div className='container'>
                        <DateOfExcursion id={id}/>
                    </div>
                    <div className={`${other.bottom}`}>
                        <Guide guide={guide} id={id}/>
                    </div>
                </div>

                <div className='col-2'>
                    <Info id={id}/>
                    <div className={`${other.bottom}`}>
                        <ButtonMore guide={guide} id={id}/>
                    </div>
                </div>

            </div>
        </StyledExcursion>
    );
};

export default Excursion;