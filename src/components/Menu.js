import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import SearchBar from './SearchBar';
import MenuMobile from './MenuMobile';

import './css/Menu.css'
import RC from '../pictures/RC.png'


export class Menu extends Component {
state = {

}

getStyle = async () => {
    await axios
    .get("http://localhost:4000/a4/decoration")
    .then(results => {
        const exactDeco = results.data[0]
        this.setState({hoverStyle:exactDeco.textcolor})
        console.log(this.state)
        })
}

handleHoverIn = (e) =>{
    const hover = document.getElementById(e.target.id)
    if(hover){
        hover.style.boxShadow = `0px -12px ${this.state.hoverStyle} inset`
    }
}

handleHoverOff = (e) => {
    const hover = document.getElementById(e.target.id)
    if(hover){
        hover.style.boxShadow = `0px 0px inset`
    }
}

componentDidMount = () =>{
    this.getStyle()
}

render() {
    return (
        
        <div className='responsiveDisplay' >
            <MenuMobile/>
           <img src={RC} alt="logo revus et corrigés" className='logo'/>
            <ul className="menuCss" >
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/la-revue/" id='linkOne' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>LA REVUE </a></li>

                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/boutique/sabonner/" id='linkTwo' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>BOUTIQUE </a></li>      

                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/qui-sommes-nous/" id='linkThree' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>QUI SOMMES-NOUS ? </a></li>

                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/revue-en-ligne/" id='linkFour' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>LA REVUE EN LIGNE </a></li>

                <li className='liDesckop'><NavLink className='aLinkRC' exact to="/" id='linkFive' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>CALENDRIER</NavLink> </li>

                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/contact/nous-contacter/" id='linkSix' 
                onMouseEnter={this.handleHoverIn} 
                onMouseLeave={this.handleHoverOff}>CONTACT+ </a></li>
                
                <SearchBar search={this.props.search}/>
            </ul>

        </div>
        )
    }
}

export default Menu;

