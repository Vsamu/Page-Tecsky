import React from "react";

import "./styles/BadgeNew.css";
import Simple from "../components/SimpleNavbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/badge-header.svg";
class NewBadge extends React.Component {
  state = { form: {} };

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
      <div>
        <div>
          <Simple />
        </div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                FirstName="Jose"
                LastName="Vela"
                otro="Ing Electrónico"
                insta="jvsamudio"
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewBadge;
