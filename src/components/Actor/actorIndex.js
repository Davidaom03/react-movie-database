import React from "react";
import { Wrapper, Image } from './Actor.styles';
import Thumb from "../Thumb/thumbIndex";

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image 
            src={imageUrl} 
            alt='actor-thumb'
        />
        <h3>{name}</h3>
        <p>{character}</p> 
        
    </Wrapper>
);
export default Actor;