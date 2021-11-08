import React from "react";
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import Grid from '../components/Grid/gridIndex';
import Spinner from '../components/Spinner/spinnerIndex';
import BreadCrumb from "./BreadCrumb/breadCrumbIndex";
import MovieInfo from "./MovieInfo/movieInfoIndex";
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../images/no_image.jpg'
import { render } from "@testing-library/react";

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    
    if(loading) return <Spinner />

    if(error) return <div>Something went wrong . . .</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </>
    );
    
};

export default Movie;