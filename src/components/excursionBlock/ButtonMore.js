import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import button from "../../css_modules/button.module.css";
import {fullInfo} from "../../utils/constants";
import {IsraGuruContext} from "../../utils/сontext";

const ButtonMore = ({id}) => {
    const {
        setShowStartPage, setLevel,
        setCity, setKeyword, setSearch,
        setStartDate, setEndDate, setLanguage
    } = useContext(IsraGuruContext);

    return (
        <Link to={`/${fullInfo}/${id}`} className={`${button.btnBig}`} onClick={() => {
            setShowStartPage(true);
            setLevel('');
            setCity('');
            setKeyword('');
            setSearch('');
            setStartDate(new Date());
            setEndDate(new Date());
            setLanguage('');
        }}
        >Подробнее
        </Link>
    );
};

export default ButtonMore;