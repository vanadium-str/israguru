import React, {useContext} from 'react';
import SearchFromSelection from "./SearchFromSelection";
import {BubbleSort, compareDates, excursions} from "../../utils/constants";
import {IsraGuruContext} from "../../utils/сontext";
import {guideInfo} from "../../json/guideInfo";

const GeneralSearch = () => {
    const {keyword, search, startDate} = useContext(IsraGuruContext);
    const currentExcursions = excursions.filter(k=>compareDates(k[1].date,startDate));
    BubbleSort(currentExcursions);
    const inputKeyword = currentExcursions.filter(k=>guideInfo[k[1].guide].name.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || guideInfo[k[1].guide].surname.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
        || k[1].city.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()));
    if (search) {
        return (
            <SearchFromSelection data={inputKeyword}/>
        )
    }
    else {
        return (
            <div>
                <SearchFromSelection data={currentExcursions}/>
            </div>
        );
    }
};

export default GeneralSearch;