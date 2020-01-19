import React from 'react';
import Image from 'react-bootstrap/Image'
import './styles/Badge.css';
import logo from '../images/badge-header.svg';
import foto from '../images/svgexport-1.svg';

class Badge extends React.Component {
    render() {
        return <div className = "Badge">  
        <div className="Badge__header">
            <img src={logo} alt="Logo" />
        </div>           


        <div className = "Badge__section-name">
            <Image 
            className="Badge__avatar "
            src={foto} 
            alt="Foto"
            thumbnail />                        
            <h1>
                {this.props.firstName} <br /> {this.props.lastName}
            </h1>
        </div>

        <div className = "Badge__section-info">
            <p>{this.props.Tittle}</p>
            <p>{this.props.Date}</p>
        </div>        
        <div className="Badge__footer">
            <p>{this.props.footer}</p>
        </div>
        </div> 
        
    }  
}

export default Badge;