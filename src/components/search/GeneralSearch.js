import React, {useContext} from 'react';
import SearchFromSelection from "./SearchFromSelection";
import {excursions} from "../../utils/constants";
import {IsraGuruContext} from "../../utils/сontext";
import {guideInfo} from "../../json/guideInfo";

const GeneralSearch = () => {
    const {keyword, search, language} = useContext(IsraGuruContext);
    const inputKeyword = excursions.filter(k=>guideInfo[k[1].guide].name.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || guideInfo[k[1].guide].surname.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || k[1].city.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()));
    if (search) {
        return (
            <SearchFromSelection data={inputKeyword}/>
        )
    }
    // if(!language){
    //     return (
    //         <div>
    //             {console.log('Lan')}
    //             <SearchFromSelection data={excursions}/>
    //         </div>
    //     )
    // }
    else {
        return (
            <div>
                {console.log('default')}
                <SearchFromSelection data={excursions}/>
            </div>
        );
    }
};

export default GeneralSearch;