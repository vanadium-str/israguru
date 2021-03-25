import React from 'react';
import GuideAbout from "./GuideAbout";
import {guideInfo} from "../../json/guideInfo";

const Index = () => {
    return (
        <div className='container-fluid themeBack'>
            <div className='row'>
                <div className='col-3'>
                    <img className='rounded-circle w-100 mt-5 ml-5'
                         src='https://i.imgur.com/ehJcD5r.jpg' alt='guide'/>
                </div>
                <div className='col-9 mt-5 d-flex justify-content-end'>
                    {guideInfo.map((data, key) => {
                        return (
                            <GuideAbout
                                key={key}
                                name={data.name}
                                surname={data.surname}
                                description={data.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Index;