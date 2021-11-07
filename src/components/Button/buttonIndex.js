import React from 'react';
// styled component
import { Wrapper } from './Button.styles';

const Button = ({text, callBack}) => (
    <Wrapper type="button" onClick={callBack} >
        {text}
    </Wrapper>
);

export default Button;