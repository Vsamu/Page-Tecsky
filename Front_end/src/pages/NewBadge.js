import React from "react";

import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import confLogo from "../images/badge-header.svg"

//import header from "../images/badge-header.svg";
class NewBadge extends React.Component {
  state = { form: {
    firstName:'',
    lastName:'',
    Tittle:'',
    Date:''
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }; 

  render() {
    return (
      <React.Fragment>        
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className=".Badges_conf-logo" src={confLogo} alt="Conf logo" />
            </div>
          </div>        
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName} 
              Tittle={this.state.form.Tittle}
              Date={this.state.form.Date}
              footer="Badge" />
            </div>
            <div className="col">
              <BadgeForm
              onChange={this.handleChange} 
              fromValues={this.state.form}/>
            </div>            
          </div>          
        </div>
      </React.Fragment>
    );
  }
}
export default NewBadge;
