import React, { Component } from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.div`
margin: 0 auto;
display: flex;
align-items: center;`

const HomeStyle = styled.div`
display: flex; 
flex-direction: row;`

const TopBar = styled.div`
background-color: #2659DA;
height: 7vh;
width: 100vw;`


class HomePage extends Component {

    render() {

        return (
            <div>
                <TopBar ></TopBar>
                <HomeStyle >
                    <div>
                        <NavBar />
                    </div>
                    <Button>
                        <Link to="/map"><button> Show My Location </button></Link>
                    </Button>
                </HomeStyle>
            </div>
        );
    }
}

export default HomePage;