import React from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Main from "./start_page/Main";

const ViewStartPage = ({data}) => {
    return (
        <div>
            <Header/>
            {data.map((excursion) => {
                return (
                    <Main
                        key={excursion[0]}
                        id={excursion[0]}
                        guide={excursion[1].guide}
                        size={data.length}
                    />
                );
            })}
            <Footer/>
        </div>
    );
};

export default ViewStartPage;