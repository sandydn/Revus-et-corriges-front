import React, { Component } from 'react';
import './Menu.css'
import { NavLink } from 'react-router-dom';

export class Menu extends Component {
render() {
    return (
        <div >

            <ul className="menuCss" >
                <li> <a Target="_blank"  href="https://revusetcorriges.net/la-revue/" >   LA REVUE   </a>  </li>
                <li Target="_blank" > <a href="https://revusetcorriges.net/la-revue/" >   BOUTIQUE   </a></li>      
                <li Target="_blank" > <a href="https://revusetcorriges.net/la-revue/" >   QUI SOMMES-NOUS ? </a> </li>
                <li Target="_blank" > <a href="https://revusetcorriges.net/la-revue/" >   LA REVUE EN LIGNE </a> </li>
                <li Target="_blank" > <a href="https://revusetcorriges.net/la-revue/" >   CALENDRIER </a> </li>
                <li Target="_blank" > <a href="https://revusetcorriges.net/la-revue/" >   CONTACT+ </a> </li>
            </ul>

        </div>
        )
    }
}

export default Menu;

