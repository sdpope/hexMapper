import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <Navigation>
            <NavList>
                <NavItem>
                    <GoTo to="/">Editor</GoTo>
                </NavItem>
                <NavItem>
                    <GoTo to="/geomap">GeoMap</GoTo>
                </NavItem>
                <NavItem>
                    <GoTo to="/manage">Manage Maps</GoTo>
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

const GoTo = styled(NavLink)` 
text-decoration: none;
color: black;
&:active {
    font-weight: bold;
}


`;