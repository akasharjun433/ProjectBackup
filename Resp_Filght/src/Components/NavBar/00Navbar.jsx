import React, { Component } from 'react'
import "./00NavbarStyles.css"
import {Link} from "react-router-dom"
import { Menuitems } from '../Menuitems/01Menuitems'
class Navbar extends Component{
    state = {clicked: false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div>
            <nav className="NavbarItems">
            <h1 ><Link to="/" className="navbar-logo">
        WanderLust!
      </Link></h1> 

                <div className='menu-icons' onClick=
                {this.handleClick}>
                    <i 
                    className={this.state.clicked ? "fas fa-times" :
                "fas fa-bars"}></i>
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active" :
            "nav-menu"}>

                    {Menuitems.map((item, index)=>{
                        return(
                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i class={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                        )
                    })}
                </ul>
            </nav>
            </div>
        )
    }
}

export default Navbar;