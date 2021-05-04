import './App.css';
import React, {useState} from 'react';
import {IsraGuruContext} from "./utils/сontext";
import SwitchPage from "./components/SwitchPage";

const App = () => {

    const [displayPage, setDisplayPage] = useState('');
    const [idGuide, setIdGuide] = useState('');
    const [idExcursion, setIdExcursion] = useState('');
    const [level, setLevel] = useState('');
    const [city, setCity] = useState('');
    const [keyword, setKeyword] = useState('');
    const [search, setSearch] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [language, setLanguage] = useState('');

    const changePage = (page, guide, id) => {
        setDisplayPage(page);
        setIdGuide(guide);
        setIdExcursion(id);
    }

    return (
        <IsraGuruContext.Provider value={
            {changePage,
                level, setLevel,
                displayPage,
                idGuide, idExcursion,
                city, setCity,
                keyword, setKeyword,
                search, setSearch,
                startDate, setStartDate,
                endDate, setEndDate,
                language, setLanguage
            }
        }>
            <SwitchPage/>
        </IsraGuruContext.Provider>
    )
}

export default App;