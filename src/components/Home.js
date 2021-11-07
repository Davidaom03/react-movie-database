import React, { useState, useEffect } from "react";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
//Image
import NoImage from '../images/no_image.jpg'
//components
import HeroImage from "./HeroImage/heroImageIndex";
import Grid from '../components/Grid/gridIndex';
import Image from '../components/Thumb/thumbIndex';

import { nanoid } from 'nanoid';
import Thumb from "../components/Thumb/thumbIndex";

 const Home = () => {
    const {state, loading, error} = useHomeFetch();

    return (
        <>
            {state.results[0] ? (
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                            title={state.results[0].original_title}
                            text={state.results[0].overview}
                /> 
               )   : null}
               <Grid header='Popular Movies'>
                   {state.results.map(movie => (
                        <Thumb
                            key={nanoid()}
                            clickable
                            image={
                                movie.poster_path ? 
                                    IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                                    : NoImage 
                            }
                            movieId={movie.Id}
                            />
                   ))}
               </Grid>
        </>
    );
}

export default Home;