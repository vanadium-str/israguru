import React, {useContext} from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import style from "../css_modules/button.module.css";
import {IsraGuruContext} from "../utils/сontext";
import GeneralSearch from "./search/GeneralSearch";

const StartPage = () => {
    const {showStartPage, setShowStartPage} = useContext(IsraGuruContext);
    return (
        <div>
            <Header/>
            {showStartPage ?
                <div className='back d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='startPageLogo mb-0'>IsraGuru</h1>
                    <h4 className='startPageText mb-4'>Экскурсии по Израилю</h4>
                    <button className={`${style.btnWhite}`}
                            onClick={() => {
                                setShowStartPage(false);
                            }}>
                        Вперед
                    </button>
                </div>
                : <GeneralSearch/>
            }
            <Footer/>
        </div>
    );
}

export default StartPage;