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
                <div className='col-12 col-lg-8'>

                    <div className='d-flex justify-content-between wrapExcursion'>
                        <div className='mt-2 picCenterSmall'>
                            <Image id={id}/>
                        </div>
                        <div className='ml-sm-4 mb-2'>
                            <Description id={id}/>
                        </div>
                    </div>
                </div>

                <div className='col-6 offset-sm-1 col-sm-6 offset-md-3 col-md-4 offset-lg-0 col-lg-2'>
                    <div className='container'>
                        <DateOfExcursion id={id}/>
                    </div>
                    <div className={`${other.bottom}`}>
                        <Guide guide={guide} id={id}/>
                    </div>
                </div>

                <div className='col-6 col-sm-5 col-md-5 col-lg-2 heightExcursion'>
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