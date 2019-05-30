import React, { Component } from 'react';
import './Menu.css'
import { NavLink } from 'react-router-dom';

export class Menu extends Component {
render() {
    return (
        <div >

            <ul className="menuCss" >
                <li><a href="https://revusetcorriges.net/la-revue/" >LA REVUE </a></li>
                <li><a href="https://revusetcorriges.net/boutique/sabonner/" >BOUTIQUE </a></li>      
                <li><a href="https://revusetcorriges.net/qui-sommes-nous/" >QUI SOMMES-NOUS ? </a></li>
                <li><a href="https://revusetcorriges.net/revue-en-ligne/" >LA REVUE EN LIGNE </a></li>
                <li><NavLink exact to="/" activeClassName="selected">CALENDRIER</NavLink> </li>
                <li><a href="https://revusetcorriges.net/contact/nous-contacter/" >CONTACT+ </a></li>
            </ul>

        </div>
        )
    }
}

export default Menu;

