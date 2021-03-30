import React from 'react';
import GuideAbout from "./GuideAbout";
import {guideInfo} from "../../json/guideInfo";

const Index = (props) => {
    return (
        <div className='container-fluid themeBack'>
            <div className='row'>
                <div className='col-3'>
                    {/*TODO => Take src from JSON*/}
                    <img className='rounded-circle w-100 mt-5 ml-5'
                         src={guideInfo.find(item=>item.id===props.guide).imgGuide} alt='guide'/>
                </div>
                <div className='col-9 mt-5 d-flex justify-content-end'>
                    {guideInfo.filter(k=>k.id===props.guide).map((data, key) => {
                        return (
                            <GuideAbout
                                key={key}
                                name={data.name}
                                surname={data.surname}
                                description={data.description}
                                id={data.id}
                                img={data.imgGuide}
                                cities={data.cities}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Index;