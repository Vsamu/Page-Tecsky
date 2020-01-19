import React from 'react'
import foto from '../images/svgexport-1.svg'
import Image from 'react-bootstrap/Image'
import logo from '../images/badge-header.svg';


class BadgesList extends React.Component {         
    render() {
        return (            
            <ul className="list-unylsted">                                        
                {this.props.Badges.map((badge) => {                    
                    return( 
                        <li key={badge.id}>
                            <div className = "Badge">  
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
                                    {badge.firstName} <br /> {badge.lastName}
                                    </h1>
                                </div>

                                <div className = "Badge__section-info">
                                    <p>{badge.jobTitle}</p>
                                    <p>{badge.email}</p>
                                </div>        

                                 <div className="Badge__footer">
                                    <p>{this.props.footer}</p>
                                </div>
                            </div>                             
                        </li>
                    )                                
                })}
            </ul>
        )
    }
}

export default BadgesList