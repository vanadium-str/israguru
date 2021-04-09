import './App.css';
import React, {useState} from 'react';
import {IsraGuruContext} from "./utils/Context";
import StartPage from "./components/StartPage";

const App = () => {

    const [displayPage, setDisplayPage] = useState('');
    const [idGuide, setIdGuide] = useState('');
    const [idExcursion, setIdExcursion] = useState('');
    const [level, setLevel] = useState('');

    const changePage = (page, guide, id) => {
        setDisplayPage(page);
        setIdGuide(guide);
        setIdExcursion(id);
    }

        return (
            <IsraGuruContext.Provider value={
                {changePage, level, setLevel, displayPage, idGuide, idExcursion}
            }>
                <StartPage/>
            </IsraGuruContext.Provider>
        )
}

export default App;