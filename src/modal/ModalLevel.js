import Popup from "reactjs-popup";
import {useContext} from "react";
import {IsraGuruContext} from "../utils/Context";

const ModalLevel = () => {
    const {setLevel, level} = useContext(IsraGuruContext);
    return (
    <Popup
        trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Местный' value={level}/>}
        position="bottom right"
        on='hover'
    >

        <div className='d-flex justify-content-center'>
            <div className='popupHeader d-flex justify-content-end'>
                <h3 className='font-weight-bold mt-4'>Уровень сложности материала</h3>
            </div>
            <div className='popupList'>
                <ul className='mt-4'>
                    <li className='cursor mb-2' value={level} onClick={()=>{setLevel('Все')}}>Показать <b>все</b></li>
                    <li className='cursor mb-2' value={level} onClick={()=>{setLevel('Турист (Обзорная экскурсия)')}}><b>Турист</b> (Обзорная экскурсия)</li>
                    <li className='cursor mb-2' value={level} onClick={()=>{setLevel('Местный (Тематическая экскурсия)')}}><b>Местный</b> (Тематическая экскурсия)</li>
                    <li className='cursor' value={level} onClick={()=>{setLevel('Гуру (Специальная экскурсия)')}}><b>Гуру</b> (Специальная экскурсия)</li>
                </ul>
            </div>
        </div>
    </Popup>
    );
};

export default ModalLevel;