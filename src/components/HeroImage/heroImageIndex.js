import React, {useState} from "react";
import {Wrapper, Content, Text} from './heroImageStyle';

const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content >
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;