import React from 'react'
import {Link} from "react-router-dom"
import "../../pages/home/home.css"
import Star from "./star.png";
import { useEffect, useState } from 'react';
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
const Card = ({movie}) => {
    const [isload,setload]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setload(false)
        },1000)
    },[]);

  return (
    isload ?
    <div className="subcon">
       <SkeletonTheme color="red" highlightColor='#444'>
        <Skeleton height={300} duration={2}>
        </Skeleton>
       </SkeletonTheme>
    </div>
    :
    <div>
                    {
                        <Link to={`/movie/${movie.id}` }className="linkhai">
                        
                        <div className="subcon">
                                <img className="pic" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                <span className="name">{movie.title}</span>
                                <div className="grpp">
                                    <span className='avg'>{movie.vote_average}</span>
                                    <img src={Star} alt="star" className="star" />
                                </div>
                                <span className='hido'>{movie.overview}</span>
                            </div>
                        
                    </Link>
                    }
                </div>
  )
}

export default Card;
