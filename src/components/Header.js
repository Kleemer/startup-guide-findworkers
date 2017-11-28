import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Header extends Component {
    render() {
        const userId = localStorage.getItem(GC_USER_ID)        
        return (
            <div className="hero-head">
                <nav className="navbar">
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/search">Search</Link>
                    {
                        userId ?
                        <div className="navbar-end">                        
                            <a className='navbar-item' onClick={() => {
                                    localStorage.removeItem(GC_USER_ID)
                                    localStorage.removeItem(GC_AUTH_TOKEN)
                                    this.props.history.push('/')
                                }
                            }>
                            logout</a>
                        </div>
                        :
                        <div className="navbar-end">                        
                                <Link className="navbar-item" to="/login">Login</Link>
                                <Link className="navbar-item" to="/signup">Signup</Link>
                        </div>
                    }
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;