import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

export const NavBar = styled(Nav)`
    background-color: #282f2f4f;
    box-shadow: 0px 2px 10px #1f2123;
    height: 80px;
    display: flex;
    align-content: center;
    text-align: center;
    .nav-item{
        display: flex;
        margin: 10px;
        width: 200px;
        height: 40px;
        align-items: center;
    }
    a{
        width: 60%;
        transition: 0.5s;
        color:#959595;
        text-decoration: none;
        :hover{
            color:#c8c8c8;
            font-size:17px
        }
    }
`