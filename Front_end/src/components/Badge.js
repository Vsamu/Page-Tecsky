import React from 'react';

import './styles/Badge.css';
import logo from '../images/badge-header.svg';
import foto from '../images/svgexport-1.svg';

class Badge extends React.Component {
    render() {
        return <div className = "Badge"> 
            <div className = "Badge__header">
                <img src={logo} alt="logo_prueba"/>   
            </div>       

        <div className = "Badge__section-name">
            <img 
            className="Badge__avatar"
            src = {foto} alt = "foto"
            />
            <h1>
                {this.props.FirstName} <br /> {this.props.LastName}
            </h1>                         
        </div>

        <div className = "Badge__section-info">
            <p>{this.props.otro}    </p>
            <p>@{this.props.insta}</p>
        </div>

        <div className = "Badge__footer">
            #firmeee
        </div>
        </div> 
        
    }  
}

export default Badge;