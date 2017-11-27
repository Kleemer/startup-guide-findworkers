import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div class="hero-head">
                <nav class="navbar">
                <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                    {
                        true ?
                        <a class="navbar-item">
                            <Link to="/login">login</Link>
                        </a>
                        :
                        <a class="navbar-item">
                            <Link to="/signup">signup</Link>
                        </a>
                    }
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default Header;