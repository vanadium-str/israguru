import React from 'react';
import FindByLevelAndCity from "./FindByLevelAndCity";
import {bannerData} from "../json/bannerData";
import ViewStartPage from "./ViewStartPage";
import ErrorSearch from "./error/ErrorSearch";

const Home = ({level, city, keyword, search}) => {
    let inputKeyword = Object.entries(bannerData).filter(k=>k[1].city.includes(keyword));
    if (search) {
        return (
            <div>
                {inputKeyword.length ? <ViewStartPage data={inputKeyword}/> : <ErrorSearch/>}
            </div>
        )
    } else {
        return (
            <div>
                <FindByLevelAndCity level={level} city={city}/>
            </div>
        );
    }
};

export default Home;