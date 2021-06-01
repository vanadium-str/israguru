import React from 'react';
import Excursion from "./Excursion";
import ErrorSearch from "../error/ErrorSearch";
import Pagination from "./Pagination";


const ExcursionPage = ({data}) => {
    return (
        <div>
            {data.length ?
                <Pagination
                    data={data}
                    RenderComponent={Excursion}
                    pageLimit={Math.round(data.length / 3)}
                    dataLimit={3}
                />
                : <ErrorSearch/>}
        </div>
    );
};

export default ExcursionPage;