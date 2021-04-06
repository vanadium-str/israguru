import Popup from "reactjs-popup";

const ModalLevel = () => (
    <Popup
        trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Местный'/>}
        position="bottom right"
        on='hover'
    >
        <div className='container'>
        <div className='d-flex justify-content-center'>
            <div className='popupHeader d-flex justify-content-end'>
            <h3 className='font-weight-bold mt-4'>Уровень сложности материала</h3>
        </div>
            <div>
                <ul className='popupList pt-4'>
                    <li className='cursor mb-2'>Показать <b>все</b></li>
                    <li className='cursor mb-2'><b>Турист</b> (Обзорная экскурсия)</li>
                    <li className='cursor mb-2'><b>Местный</b> (Тематическая экскурсия)</li>
                    <li className='cursor'><b>Гуру</b> (Специальная экскурсия)</li>
                </ul>
            </div>
        </div>
        </div>
    </Popup>
);

export default ModalLevel;