import React from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Excursion from "./start_page/Excursion";
import ErrorSearch from "./error/ErrorSearch";

const ViewStartPage = ({data}) => {
    return (
        <div>
            <Header/>
            {data.length ?data.map((excursion) => {
                return (
                    <Excursion
                        key={excursion[0]}
                        id={excursion[0]}
                        guide={excursion[1].guide}
                        size={data.length}
                    />
                );
            }):<ErrorSearch/>}
            <Footer/>
        </div>
    );
};

export default ViewStartPage;