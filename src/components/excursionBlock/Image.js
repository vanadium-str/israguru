import React from 'react';
import {bannerData} from "../../json/bannerData";

const Image = ({id}) => {
    return (
        <img src={bannerData[id].img} alt='picture' width='160' height='160'/>
    );
};

export default Image;