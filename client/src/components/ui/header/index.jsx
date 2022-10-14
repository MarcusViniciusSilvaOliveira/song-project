import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { NavBar } from './styles';

const Header = () => {
    return (
        <NavBar>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/songs">List Songs</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/register">Register Song</Link>
            </Nav.Item>
        </NavBar>
    );
}

export default Header;