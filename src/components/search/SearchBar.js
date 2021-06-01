import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/сontext";

const SearchBar = () => {
    const {keyword, setKeyword, setSearch, setCurrentPage, setShowStartPage} = useContext(IsraGuruContext);

    return (
        <div>
            <input className='w-100'
                   type='search'
                   placeholder='Название, гид, другое'
                   value={keyword}
                   onChange={(e)=>{
                       setKeyword(e.target.value);
                       setSearch(true);
                       setCurrentPage(1);
                       setShowStartPage(false);
                   }}
            />
        </div>
    );
};

export default SearchBar;