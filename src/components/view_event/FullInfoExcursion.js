import React from 'react';
import Guide from "../excursionBlock/Guide";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Info from "../excursionBlock/Info";
import {FaInfoCircle} from "react-icons/all";
import {guideInfo} from "../../json/guideInfo";

const FullInfoExcursion = (props) => {
    return (
        <div className='themeBack'>
            <div className='row'>
                <div className='col-7 offset-3'>
                    <Guide img={guideInfo.find(item=>item.id===props.guide).imgGuide}/>
                </div>
                <div className='col-2'>
                    <button className='btnBig'>Пойду</button>
                </div>
            </div>
            {/*TODO*/}
            <div className='row'>
                <div className='col-3 ml-5'>
                    <Image/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <Description/>
                    <div className='row mr-0 ml-0'>
                        <div className='col-6'>
                            <Date/>
                        </div>
                        <div className='col-6'>
                            <Info/>
                        </div>
                    </div>
                    <p>'В субботу, 4-го июля в 10 часов утра, состоится экскурсия «Побазарим» - прогулка по территории рынка\n' +
                        'Кармель (рынок не работает) и кварталу «Керем Тайманим».\n' +
                        'Это совершенно новая экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого\n' +
                        'еврейского поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.\n' +
                        'Начиная с 1-го июля утренние экскурсии будут начинаться на час раньше – в 10 утра. Жарко!\n' +
                        'Расписание — это лишь объявление о намерении, поэтому возможны изменения и дополнения. Следите за\n' +
                        'информацией и анонсами на главной странице сайта. Уточнения об окончательной дате, месте встречи и\n' +
                        'тд.\n' +
                        'В субботу, 4-го июля в 10 часов утра, состоится экскурсия «Побазарим» - прогулка по территории рынка\n' +
                        'Кармель (рынок не работает) и кварталу «Керем Тайманим».\n' +
                        'Это совершенно новая экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого\n' +
                        'еврейского поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.\n' +
                        'Начиная с 1-го июля утренние экскурсии будут начинаться на час раньше – в 10 утра. Жарко!\n' +
                        'Расписание — это лишь объявление о намерении, поэтому возможны изменения и дополнения. Следите за\n' +
                        'информацией и анонсами на главной странице сайта. Уточнения об окончательной дате, месте встречи и\n' +
                        'тд.\n'</p>
                </div>
            </div>
            <div className='row'>
                {/*TODO => Take from JSON bannerData + (image size)*/}
                <img className='col-3 ml-5' src='' alt='MAP'/>
                <div className='col-8 border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    {/*TODO =>Take from JSON bannerData*/}
                    <p className='mb-5'>Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне
                        от причала в пятницу в {props.timeFrom} TODO. Будем рады видеть вас и ваших детей (от 4-х лет)
                        и собак (от года).</p>
                    {/*TODO =>Take from JSON bannerData*/}
                    <div className='small font-italic mb-3'><FaInfoCircle/> Участникам программы МАСА и репатриантам до 1 года - 50% скидка</div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 offset-3'>
                    <Date/>
                </div>
                <div className='col-5'>
                    <Info/>
                </div>
                <div className='col-2'>
                    <button className='btnBig'>Пойду</button>
                </div>
            </div>
        </div>
    );
};

export default FullInfoExcursion;