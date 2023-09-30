import React from 'react'
import "./movie.css"
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
    const [currentmovie, setdata] = useState();
    const { id } = useParams();
    useEffect(() => {
        getdata()
        window.scrollTo(0, 0)
    }, []);
    const getdata = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(data => setdata(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {

                <div className='moviecont'>
                    <img className="movieimg" src={`https://image.tmdb.org/t/p/original${currentmovie && currentmovie.backdrop_path}`} alt="" />
                    <div className="about">
                        <div className='tg'>
                            <div className='datafl'>
                                <span className="naam">{currentmovie?.title}</span>
                                <span className="datagrp">
                                    <span className='dataavg'>{currentmovie?.vote_average}</span>
                                    <img src={Star} alt="star" className="star" />
                                </span>
                            </div>
                            <span className="tagline">{currentmovie?.tagline}</span>
                        </div>
                        <span className="over">{currentmovie?.overview}</span>
                        <div className="more">
                            <div className="genre">
                                <div className="gg">
                                    <p>GENRE : </p>
                                    {currentmovie?.genres?.map(g => {
                                        return (

                                            <div>

                                                <span>{g?.name}</span>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="submore">
                                <span className="release">Release Date : {currentmovie?.release_date}</span>
                                <span className="status">Status : {currentmovie?.status}</span>
                                <span className="status">Runtime : {currentmovie?.runtime} mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {console.log(currentmovie)}
        </div>
    )
}

export default Moviedata;
