import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/Context";

const SearchPage = () => {
    const {keyword, setKeyword, setSearch} = useContext(IsraGuruContext);

    return (
        <div>
            <input className='w-100'
                   type='search'
                   placeholder='&#128269; Название, гид, другое'
                   value={keyword}
                   onChange={(e)=>{
                       setKeyword(e.target.value);
                       setSearch(true);
                   }}
            />
        </div>
    );
};

export default SearchPage;