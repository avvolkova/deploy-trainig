import React from 'react';
import './Landing.scss';
import {Quote} from "../quote/Quote";

export function Landing() {
    return (
        <>
            <div className="omg">OMG I can Deploy!!!</div>
            <div className="container">
                <img src='/img/anya.png' alt="happy anya" className="img"/>
                <blockquote className="blabla"><Quote/></blockquote>
            </div>
        </>
    );
};
