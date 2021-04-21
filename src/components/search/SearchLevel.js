import Popup from "reactjs-popup";
import {useContext} from "react";
import {IsraGuruContext} from "../../utils/Context";
import {levels} from "../../utils/constants";
import style from "../../css_modules/popup.module.css";

const SearchLevel = () => {
    const {setLevel, level} = useContext(IsraGuruContext);
    return (
    <Popup
        trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Местный' value={level}/>}
        position="bottom right"
        on='hover'
    >

        <div className='d-flex justify-content-center'>
            <div className={`${style.popupHeader} d-flex justify-content-end`}>
                <h3 className='font-weight-bold mt-4'>Уровень сложности материала</h3>
            </div>
            <div className={`${style.popupList}`}>
                <ul className='mt-4'>
                    <li className='cursor mb-2' value={level} onClick={()=>{setLevel('')}}>Показать все</li>
                    {levels.map((item, key) =>
                    <li className='cursor mb-2' value={level} onClick={()=>{setLevel(item)}}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    </Popup>
    );
};

export default SearchLevel;