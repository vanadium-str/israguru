import {excursionData} from "../json/excursionData";

export const levels = [
    'Турист (Обзорная экскурсия)','Местный (Тематическая экскурсия)','Гуру (Специальная экскурсия)'
];
export const cities = [
    'Иерусалим', 'Тель-Авив','Кейсария', 'Хайфа', 'Эйлат', 'Акко', 'Цфат'
];
export const homePage = 'home';
export const fullInfo = 'full_info';
export const guidePath = 'guide_info';
export const signUpEvent = 'sign_up_info';
export const paymentPage = 'payment';
export const paymentSuccessful = 'payment_successful';

export const currencyURL = 'http://data.fixer.io/api';
export const key = 'key_here';

export const time = (time)=>{
    if(time===1 || time===21){
        return 'час';
    }
    if(time===2||time===3||time===4||time===22||time===23||time===24){
        return 'часа';
    }
    return 'часов';
}

export const optionsDay ={
    weekday: 'long'};
export const months = ['января','февраля',
    'марта','апреля','мая','июня','июля',
    'августа','сентября','октября','ноября','декабря'];

export function getDayExcursion(date) {
    return new Intl.DateTimeFormat('ru-RU', optionsDay).format(date);
}
export function getMonthExcursion(date) {
    return months[date.getMonth()];
}
export function findByDate (dateOfExcursion, start, end) {
    const date = new Date(dateOfExcursion).getTime();
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    if(date >= startDate && date <= endDate){
        return 1;
    }else return console.log('not found');
}

export const excursions = Object.entries(excursionData);
