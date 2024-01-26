import React, {useState} from 'react';
import './Landing.scss';
import {Quote} from "../quote/Quote";

export function Landing() {
    const [isMolodets, setIsMolodets] = useState(false);

    const handleSetIsMolodets = () => setIsMolodets(!isMolodets)

    return (
        <>
            <div className="omg">OMG I can Deploy!!!</div>
            <div className="container">
                <img src='/img/anya.png' alt="happy anya" className="img"/>
                <blockquote className="blabla"><Quote isMolodets={isMolodets}/></blockquote>
                <button onClick={handleSetIsMolodets}>Аня - молодец?</button>
            </div>
        </>
    );
};
