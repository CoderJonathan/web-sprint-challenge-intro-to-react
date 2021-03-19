// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledList = styled.div `
        
display: flex;
flex-direction: column;
text-shadow: 2px 2px 5px white;
margin: 1px auto;
width: 15%;

h2:hover, p:hover {
transform: scale(1.2);
transition: all 2s ease-in-out;
border: black 2px solid;
cursor: pointer;
}`

const Character = (prop) => {
    return(
        <div>
        <StyledList>
            <h2>{prop.character.name}</h2>
            <p>Height: {prop.character.height}</p>
            <p>Gender: {prop.character.gender}</p>
            <p>Mass: {prop.character.mass}</p>
        </StyledList>   
        </div>
    );
}

export default Character 