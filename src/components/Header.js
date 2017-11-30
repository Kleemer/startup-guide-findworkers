import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/search">Search</Link>
                        <Link className="navbar-item" to="/add">Add profile</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);