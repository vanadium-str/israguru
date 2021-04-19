import React, {useState} from 'react';
import DatePicker from "react-datepicker";

const DatePickerExcursion = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <DatePicker
                className='w-50 mr-3'
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                className='w-50 mr-3'
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </>
    );
};

export default DatePickerExcursion;