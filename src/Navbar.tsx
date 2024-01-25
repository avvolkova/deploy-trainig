import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";


export function Navbar() {
    const params = useLocation();

    useEffect(() => {
        console.log({params})
    }, [])

    return (
        <nav className="navbar">
            <Link to="/">Main</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/features">Features</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};
