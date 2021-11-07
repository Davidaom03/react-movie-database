import React from "react";
import { Image, Text } from "./Thumb.styles";

const Thumb = ({image, movieName, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb' />
        <Text >{movieName}</Text>
    </div>
);

export default Thumb;