import {BrowserRouter, Route, Routes, useSearchParams} from "react-router-dom";
import {Navbar} from "./Navbar";
import styles from './Test.module.css'
import React, {useEffect, useState} from "react";

function PokemonsPage(): JSX.Element {
    const [pokemons, setPokemons] = useState([]);
    const [searchParams] = useSearchParams();
    console.log({searchParams: Number(searchParams.get("limit"))})
    const limit = Number(searchParams.get("limit")) || 10;
    const offset = Number(searchParams.get("offset")) || 0;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
    }, [limit, offset]);

    return <div>{JSON.stringify(pokemons)}</div>
}


export function Routing(): JSX.Element {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<div className="animated"/>}/>
                <Route path="/projects" element={<div className={`animated ${styles.fromModule}`}/>}/>
                <Route path="/features" element={<div className={`animated specialElem`}/>}/>
                <Route path="/about" element={<PokemonsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
