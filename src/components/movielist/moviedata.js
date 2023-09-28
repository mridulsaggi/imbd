import React from 'react'
import Star from "../cards/star.png";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzcwNjJkNjFjZmQzMTIyYTM0N2Y2MDQxYTAzOCIsInN1YiI6IjY0YjJkZGIxMzc4MDYyMDExYzhiMDFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWnGbIeMup4FKfxeU2cQJLLgArfF4h0LPsP82NIjHpk'
    }
}
const Moviedata = () => {
    const [currentmovies, setdata] = useState();
    const { id } = useParams();
    useEffect(()=>{
        getdata()
        window.scrollTo(0,0)
    },[]);
    const getdata=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(data => setdata(data.results))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {/* {
                
                    <div>
                    <img className="pic" src={`https://image.tmdb.org/t/p/original${currentmovie && currentmovie.backdrop_path}`} alt="" />
                    <span className="name">{currentmovie.original_title}</span>
                    <div className="grpp">
                        <span className='avg'>{currentmovie.vote_average}</span>
                        <img src={Star} alt="star" className="star" />
                    </div>
                    <span className='hido'>{currentmovie.overview}</span>
                    </div>
                
            } */}
            {
                currentmovies.forEach(movie => {
                    
                    console.log(movie)
                })
            }
            
        </div>
    )
}

export default Moviedata;
