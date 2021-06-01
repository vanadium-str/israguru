import './App.css';
import React, {useState} from 'react';
import {IsraGuruContext} from "./utils/сontext";
import SwitchPage from "./components/SwitchPage";
import StartPage from "./components/StartPage";

const App = () => {

    const [idGuide, setIdGuide] = useState('');
    const [idExcursion, setIdExcursion] = useState('');
    const [level, setLevel] = useState('');
    const [city, setCity] = useState('');
    const [keyword, setKeyword] = useState('');
    const [search, setSearch] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [language, setLanguage] = useState('');
    const [position, setPosition] = useState({
        latitude: 32.049,
        longitude: 34.757,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [showStartPage, setShowStartPage] = useState(true);

    return (
        <IsraGuruContext.Provider value={
            {
                idGuide, idExcursion,
                level, setLevel,
                city, setCity,
                keyword, setKeyword,
                search, setSearch,
                startDate, setStartDate,
                endDate, setEndDate,
                language, setLanguage,
                position, setPosition,
                currentPage, setCurrentPage,
                showModalWindow, setShowModalWindow,
                showStartPage, setShowStartPage
            }
        }>
            <SwitchPage/>
        </IsraGuruContext.Provider>
    )
}

export default App;