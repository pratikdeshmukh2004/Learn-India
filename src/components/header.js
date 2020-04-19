import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar style={{borderTopStyle: "solid", borderTopColor: "yellow"}} fixed="top" color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Learn-India</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
