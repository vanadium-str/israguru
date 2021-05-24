import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {excursionData} from "../../json/excursionData";

const Gallery = ({id}) => {
    return (
        <Carousel interval={1500}>
            {
                excursionData[id].img.map(item=>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="Slide"
                            height='250'
                        />
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
};

export default Gallery;