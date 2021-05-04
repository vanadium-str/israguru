import React, {useContext} from 'react';
import FindByLevelAndCity from "./search/FindByLevelAndCity";
import {bannerData} from "../json/bannerData";
import ViewStartPage from "./ViewStartPage";
import ErrorSearch from "./error/ErrorSearch";
import {excursionData, findByDate} from "../utils/constants";
import {IsraGuruContext} from "../utils/сontext";
import {guideInfo} from "../json/guideInfo";

const Home = () => {
    const {keyword, search, language} = useContext(IsraGuruContext);
    const inputKeyword = excursionData.filter(k=>guideInfo[k[1].guide].name.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || guideInfo[k[1].guide].surname.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || k[1].city.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()));
    if (search) {
        return (
                <ViewStartPage data={inputKeyword}/>
        )
    }
    if(!language){
        return (
            <div>
                {console.log('Lan')}
                <FindByLevelAndCity/>
            </div>
        )
    }
    else {
        return (
            <div>
                {console.log('default')}
                <FindByLevelAndCity/>
            </div>
        );
    }
};

export default Home;