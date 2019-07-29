import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

import MenuMobile from './MenuMobile'
import SearchBar from './SearchBar'

import RC from '../pictures/RC.png'
import './css/Menu.css'


export class Menu extends Component {

state = {
}

getStyle = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration'
    }
    await axios
    .get(pathApi)
    .then(results => {
        const exactDeco = results.data[0]
        this.setState({hoverStyle:exactDeco.textcolor})
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
            <div className="containerlogo">
             <img src={RC} alt="logo revus et corrigés" className='logo'/>
           </div>
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

export default Menu

