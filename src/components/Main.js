import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand: "Ford",
            logo: "/logo192.png" 
        };
    }
    change() {
        this.setState({
            brand: 'co con cu',
            logo: '/nuocmam.jpg'
        });
    };
    render() {
        return (
            <div>
                <h1>My Car</h1>
                <h6>{this.state.brand}</h6>
                <button onClick={()=>this.change()}>abc hihi</button>
                <img src='nuocmam.jpg' />
            </div>
        );
    }
}

export default Car;