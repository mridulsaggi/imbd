import React from 'react'
import "../../pages/home/home.css"
import Card from "../cards/card"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzcwNjJkNjFjZmQzMTIyYTM0N2Y2MDQxYTAzOCIsInN1YiI6IjY0YjJkZGIxMzc4MDYyMDExYzhiMDFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWnGbIeMup4FKfxeU2cQJLLgArfF4h0LPsP82NIjHpk'
    }
}
const Movielist = () => {
    const [movies, setmovielist] = useState([]);
    const { type } = useParams();
    useEffect(() => {
        getdata("popular");
    }, [])
    useEffect(() => {
        getdata();
    }, [type]);
    const getdata = () => (
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}`, options)
            .then(response => response.json())
            .then(data => setmovielist(data.results))
            .catch(err => console.error(err))
    );
    return (
        <div>
            <div className="title">
                <h1>{(type ? type : "popular").toUpperCase()}</h1>
            </div>
            <div className='container'>{
                movies.map(movie => (
                    <Card movie={movie}/>
                ))
            }
            </div>
        </div>
    )
}

export default Movielist
