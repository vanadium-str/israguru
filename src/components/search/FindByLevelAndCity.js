import React, {useContext} from 'react';
import ErrorSearch from "../error/ErrorSearch";
import ViewStartPage from "../ViewStartPage";
import {IsraGuruContext} from "../../utils/сontext";
import {findByDate, excursionData} from "../../utils/constants";

const FindByLevelAndCity = () => {
    const {level, city, startDate, endDate, language} = useContext(IsraGuruContext);
    let selectedByLanguage = excursionData.filter(k=>k[1].language.includes(language));
    let selectedByDate = selectedByLanguage.filter(k=>findByDate(k[1].date, startDate, endDate));// по дате
    let selectedCity = selectedByLanguage.filter(k=>k[1].city.includes(city));//по городу
    let selectedLevel = selectedByLanguage.filter(k =>k[1].level.includes(level));//по уровню
    let selectedByCityAndLevel = selectedCity.filter(k=>k[1].level.includes(level));//по городу и уровню
    let selectedByCityLevelDate = selectedByCityAndLevel.filter(k=>findByDate(k[1].date, startDate, endDate));//выбрано все
    let selectedByCityAndDate = selectedCity.filter(k=>findByDate(k[1].date, startDate, endDate));//по городу и дате
    let selectedByLevelAndDate = selectedLevel.filter(k=>findByDate(k[1].date, startDate, endDate));//по уровню и дате
    console.log(selectedByDate.length);
    //по умолчанию
    if (city === '' && level === ''&& startDate === endDate) {
        console.log('1');
        return (
            <ViewStartPage data={excursionData}/>
        );
    }
    //если выбраны только даты !!!!
    if(selectedByDate.length && !city && !level){
        console.log('2');
        return (
            <ViewStartPage data={selectedByDate}/>
        );
    }
    //если выбран только уровень not important !!!!!
    if (selectedLevel.length && !city && !selectedByDate.length) {
        console.log('3');
        return (
            <ViewStartPage data={selectedLevel}/>
        );
    }
    //если выбран только город not important !!!!
    if (selectedCity.length && !level && !selectedByDate.length) {
        console.log('4');
        return (
            <ViewStartPage data={selectedCity}/>
        );
    }
    //если выбран город и уровень, но не выбраны даты
    if(selectedByCityAndLevel.length && !selectedByDate.length){
        console.log('5');
        return (
            <ViewStartPage data={selectedByCityAndLevel}/>
        );
    }
    //если выбраны даты и город
    if(selectedByCityAndDate.length && !level){
        console.log('6');
        return (
            <ViewStartPage data={selectedByCityAndDate}/>
        );
    }

    //если выбраны даты и уровень
    if(selectedByLevelAndDate.length && !city){
        console.log('7');
        return (
            <ViewStartPage data={selectedByLevelAndDate}/>
        );
    }

    //если выбраны даты, уровень и город
    if(selectedByCityLevelDate.length){
        console.log('8');
        return (
            <ViewStartPage data={selectedByCityLevelDate}/>
        );
    }

    return (
        <ViewStartPage data={0}/>
    );
}

export default FindByLevelAndCity;