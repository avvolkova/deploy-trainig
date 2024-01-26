import React from 'react';
import './Quote.scss';

export function Quote({isMolodets}: { isMolodets: boolean }) {
    return (

        <div className="cartoon">
            <div className="bubble b r hb">{!isMolodets ? 'Нажми туды ↓↓↓' : 'Оч молодец!'}</div>
        </div>
    );
};
