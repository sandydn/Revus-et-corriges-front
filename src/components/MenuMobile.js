import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class MenuMobile extends Component {
    render() {
        return (
            <div id="wrap" >
                        <nav className="nav">
                         <a href="#wrap" id="open" alt="menu"> </a>
                         <a href="/" id="close" alt="fermer menu">×</a>
                         
                         <li className='liResponsive'><a className='shadowBox'  href="https://revusetcorriges.net/la-revue/"  id='close' >LA REVUE </a></li>
                         <li className='liResponsive'><a className='shadowBox' href="https://revusetcorriges.net/boutique/sabonner/" id='close' >BOUTIQUE </a></li>      
                         <li className='liResponsive'><a className='shadowBox' href="https://revusetcorriges.net/qui-sommes-nous/" id='close' >QUI SOMMES-NOUS ? </a></li>
                         <li className='liResponsive'><a className='shadowBox' href="https://revusetcorriges.net/revue-en-ligne/" id='close' >LA REVUE EN LIGNE </a></li>
                         <li className='liResponsive'><NavLink exact to="/" activeClassName="selected" className='shadowBox' id='close'>CALENDRIER</NavLink> </li>
                         <li className='liResponsive'><a className='shadowBox' href="https://revusetcorriges.net/contact/nous-contacter/" id='close' >CONTACT+ </a></li>
                        </nav>
            </div>
        )
    }
}

export default MenuMobile
