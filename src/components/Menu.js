import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';
import MenuMobile from './MenuMobile';

import './css/Menu.css'
import RC from '../pictures/RC.png'


export class Menu extends Component {
render() {
    return (
        
        <div className='responsiveDisplay' >
            <MenuMobile/>
           <img src={RC} alt="logo revus et corrigés" className='logo'/>
            <ul className="menuCss" >
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/la-revue/" >LA REVUE </a></li>
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/boutique/sabonner/" >BOUTIQUE </a></li>      
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/qui-sommes-nous/" >QUI SOMMES-NOUS ? </a></li>
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/revue-en-ligne/" >LA REVUE EN LIGNE </a></li>
                <li className='liDesckop'><NavLink className='aLinkRC' exact to="/" >CALENDRIER</NavLink> </li>
                <li className='liDesckop'><a className='aLinkRC' href="https://revusetcorriges.net/contact/nous-contacter/" >CONTACT+ </a></li>
                <SearchBar/>
            </ul>

        </div>
        )
    }
}

export default Menu;

