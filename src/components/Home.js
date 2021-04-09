import React from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Main from "./start_page/Main";
import {bannerData} from "../json/bannerData";

const Home = ({level}) => {
    const obj = Object.entries(bannerData);
    let res = obj.find(k => k[1].level === level);
    if (level === '' || !res)
        return (
            <div>
                <Header/>
                {Object.entries(bannerData).map((data) => {
                    return (
                        <Main
                            key={data[0]}
                            id={data[0]}
                            guide={data[1].guide}
                        />
                    );
                })}
                <Footer/>
            </div>);
    else return (
        <div>
            <Header/>
            {obj.filter(k => k[1].level === level).map((data) => {
                return (
                    <Main
                        key={data[0]}
                        id={data[0]}
                        guide={data[1].guide}
                    />
                );
            })}
            <Footer/>
        </div>
    );
}
export default Home;