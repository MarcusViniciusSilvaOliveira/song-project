import styled, {css, keyframes } from "styled-components";
import ListGroup from 'react-bootstrap/ListGroup';

const LoopShineSongContainer = keyframes `
    0% {color: #a7f5a4;
    border-color: #85be74;
    box-shadow: 3px 3px 6px #51976a;
    font-size: 19px;}
    100% {color: #8aff85;
    border-color: #b9ffa4;
    box-shadow: 5px 5px 8px #51976a;
    font-size: 19px;}
`
const animationLoop = props =>
  css`${LoopShineSongContainer}`
;

export const Div = styled.div`
    .CardContainer{
        animation: ${props => props.isSelectedSong ? animationLoop : null} 2s linear infinite alternate;
        :hover{
            cursor: pointer;
            ${props => !props.isSelectedSong && ({
                color: '#f8feff',
                borderColor: '#7494beb0',
                boxShadow: '2px 2px 5px #4d5656',
                fontSize: '19px'
                })
            } 
        }
    }
`;

export const CardContainer = styled(ListGroup.Item)`
    margin: 10px;
    border: 1px solid;
    height: 50px;
    border-radius: 5px;
    background-color: #57575d0d;
    color: #e2e2e2;
    border-width: 1px !important;
    border-color: #ffffff14;
    box-shadow: 2px 2px 5px #232323;
    transition: 0.1s;
    strong{
        transition: 0.1s;
        font-size: 17px;
    }
`