import React from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Excursion from "./start_page/Excursion";
import ErrorSearch from "./error/ErrorSearch";
import Pagination from "./start_page/Pagination";


const StartPage = ({data}) => {
    return (
        <div>
            <Header/>
            {data.length ?
                <Pagination
                    data={data}
                    RenderComponent={Excursion}
                    pageLimit={Math.round(data.length / 3)}
                    dataLimit={3}
                />
                : <ErrorSearch/>}
            <Footer/>
        </div>
    );
};

export default StartPage;