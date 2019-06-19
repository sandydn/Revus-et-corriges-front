import React, { Component } from 'react'
import './MenuMobile.css'

class MenuMobile extends Component {
    render() {
        return (
            <div id="wrap" >
                
                <header class="header">
                        <nav class="nav">
                         <a href="#wrap" id="open">
                         
                         <rect fill="#FFFFFF" width="34" height="4"/>
                         <rect y="11" fill="#FFFFFF" width="34" height="4"/>
                         <rect y="23" fill="#FFFFFF" width="34" height="4"/>
                         
                         </a>
                         <a href="#" id="close">×</a>
      
      
                        </nav>
                </header>

            </div>
        )
    }
}

export default MenuMobile
