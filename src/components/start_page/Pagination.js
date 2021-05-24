import React, {useContext, useState} from 'react';
import pagination from '../../css_modules/pagination.module.css';
import Excursion from "./Excursion";
import sign from "../../css_modules/signupEvent.module.css";
import {IsraGuruContext} from "../../utils/сontext";

function Pagination ({data, RenderComponent, pageLimit, dataLimit})  {
    const {currentPage, setCurrentPage} = useContext(IsraGuruContext);
    function goToNextPage() {
        setCurrentPage((page) => page<pageLimit? page + 1:pageLimit);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    // The changePage function will be called
    // when the user clicks on any page number and
    // it will change the current page to the page
    // number that was clicked by the user
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((data, key) => start + key + 1);
    };

    return (
        <div>

            <div>
            {getPaginatedData().map((excursion) => (
                <RenderComponent
                    key={excursion[0]}
                    id={excursion[0]}
                    guide={excursion[1].guide}
                    size={data.length}
                />
            ))}
            </div>

            <div className='d-flex justify-content-center mb-3'>

                {/* previous button */}
                {data.length>dataLimit?<button
                    onClick={goToPreviousPage}
                    className={`${pagination.pagination} ${currentPage === 1 ? 'disabled' : ''}`}>
                    &lt;&lt;
                </button>
                    : <div></div>}

                {/* show page numbers */}
                {data.length>dataLimit?getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`${pagination.pagination} ${currentPage === item ? 'active' : ''}`}>
                        <span>{item}</span>
                    </button>
                ))
                    :<div></div>}

                {/* next button */}
                {data.length>dataLimit?<button
                    onClick={goToNextPage}
                    className={`${pagination.pagination} ${currentPage >= pageLimit ? 'disabled' : ''}`}>
                    &gt;&gt;
                </button>
                    :<div></div>}

            </div>
        </div>);
};

export default Pagination;