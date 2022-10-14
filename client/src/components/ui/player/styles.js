import styled from "styled-components";

export const Div = styled.div`
    box-shadow: 0 0 22px 6px #00d05a4f; 
    padding: 15px;
    position: absolute;
    bottom: 30px;
    width: 100%;
    background-color:#00000080;
    text-align:center;
    
    display: flex;
    align-content: center;
    justify-content: center;

    .card-body{
        color: #e1f2ff;
    }
    .card{
        display: flex;
        align-items: center;
        background-color: #0000007d;
        padding: 15px;
        box-shadow: 5px 5px 8px #00000091;
    }
    .card-img-top{
        margin: 0px 100px;
        width: 150px;
        box-shadow: 1px 1px 10px 5px #383c3996;
    }

    h2{
        :hover{
            cursor: pointer;
        }
    }
`

export const AudioDiv = styled.div`
    width: 450px;
    audio{
        width: 100%;
        height: 30px;
        opacity: 0.7;
        background-color:white;
    }
`

export const ButtonsDiv = styled.div`
    font-size: 50px;
    color: white;
    svg{
        transition:0.15s;
        :hover{
            cursor: pointer;
            border-radius: 50%;
            box-shadow: 0 0 12px 6px #6ee6cd3d; 
            background-color: #6ee6cd3d;
        }
    }
`