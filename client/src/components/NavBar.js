import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <Navigation>
            <NavList>
                <NavItem>
                    <Link to="/">Editor</Link>
                </NavItem>
                <NavItem>
                    <Link to="/geomap">GeoMap</Link>
                </NavItem>
                <NavItem>
                    <Link to="/manage">Manage Maps</Link>
                </NavItem>
            </NavList>
        </Navigation>
    );
}

export default NavBar;

const Navigation = styled.div` 
width: 100%;
height: 50px;

`;

const NavList = styled.ul` 
display: flex;
flex-direction: row;
`;

const NavItem = styled.li` 
margin-right: 25px;
list-style: none;

`