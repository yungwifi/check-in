import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
background-color: #2659DA;
height: 93vh;
width: 19vw;
display: flex;
justify-content: center;
flex-direction: column;`

const LinkStyle = styled.div`
a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: #FFDF41;
}`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer >
                    <LinkStyle >
                        <Link to="/"><h3> Home </h3></Link>
                    </LinkStyle>
                    <LinkStyle >
                        <Link to="/map"><h3> Map </h3></Link>
                    </LinkStyle>
                </NavContainer>
            </div>
        );
    }
}

export default NavBar;