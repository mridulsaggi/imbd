import React from 'react'
import "./home.css"
import { useEffect, useState } from 'react';
import Star from "../../components/cards/star.png";
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Movielist from "../../components/movielist/movielist"
const Home = () => {
    const [populars, setpopmovies] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzcwNjJkNjFjZmQzMTIyYTM0N2Y2MDQxYTAzOCIsInN1YiI6IjY0YjJkZGIxMzc4MDYyMDExYzhiMDFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWnGbIeMup4FKfxeU2cQJLLgArfF4h0LPsP82NIjHpk'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(data => setpopmovies(data.results))
            .catch(err => console.error(err));
    }, [])
    // console.log(setpopmovies)
    return (
        <div>
            <div className="poster">

                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={true}
                >
                    {
                        populars.map(movie => (
                            <div className="posterimage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" classname="poster" />
                                <div className="content">
                                    <span className='title'>{movie.title}</span>
                                    <span className='date'>{movie.release_date}</span>
                                    <div className="grp">
                                        <span className='avg'>{movie.vote_average}</span>
                                        <img src={Star} alt="star" className="star" />
                                        <Link to={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}><button className="anchor">know more</button></Link>
                                    </div>
                                    <span className='descp'>{movie.overview}</span>
                                </div>
                            </div>

                        ))
                    }
                </Carousel>
                <Movielist></Movielist>
            </div>
        </div>
    )
}

export default Home;
