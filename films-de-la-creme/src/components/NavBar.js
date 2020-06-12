import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css'



class NavBar extends React.Component {
    render() {
        return (
            <div className="home">
                <nav>
                    <ul>
                        <a href="/"><li >HOME</li></a>
                        <a href='/movies'><li>MOVIES</li></a>
                        <li>TV SHOWS</li>
                        <li id="logo">
                            <a to="/">
                                <img src={require("../img/food-and-restaurant.png")} alt="" />
                            </a>
                        </li>
                        <li>SEARCH</li>
                        <li>PROFILE</li>
                        <li id="last">LOG OUT</li>
                    </ul>
                </nav>
            </div >
        )
    }
}

export default NavBar