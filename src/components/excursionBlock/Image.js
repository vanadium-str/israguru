import React from 'react';
import {excursionData} from "../../json/excursionData";

const Image = ({id}) => {
    return (
        <img src={excursionData[id].img} alt='picture' width='160' height='160'/>
    );
};

export default Image;