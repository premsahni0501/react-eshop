import React from 'react';

import { Nav, Atag, Button, Span, Div, ULOL, LI, Htag, Image } from '../elements/index';

import shoppingBag from '../assets/images/icons/shopping_bag.svg';
import navToggle from '../assets/images/icons/nav_toggle.svg';
import searchIcon from '../assets/images/icons/search.svg';

const Navbar = (props) => {
    return <Nav className="navbar navbar-expand-lg navbar-light">
        <Div className="container-fluid">
            <Button className="navbar-toggler" type="button">
                <Span className="navbar-toggler-icon"></Span>
            </Button>
            <ULOL type="ul" className="navbar-nav navlinks-left">
                <LI className="nav-item">
                    <Button className="btn btn-dark active" type="button">
                        <Image src={navToggle} alt="nav-toggle"/>
                    </Button>
                </LI>
                <LI className="nav-item">
                    <Button className="btn btn-link" type="button">
                        <Image src={searchIcon} alt="search"/>
                    </Button>
                </LI>
            </ULOL>
            <Atag className="navbar-brand" href="#">
                <Htag htype={2} className="m-0">minim</Htag>
            </Atag>
            <ULOL type="ul" className="navbar-nav navlinks-right">
                <LI className="nav-item">
                    <Atag className="nav-link" href="#">Account</Atag>
                </LI>
                <LI className="nav-item">
                    <Atag className="nav-link" href="#">
                        <Image src={shoppingBag} alt="cart"/>
                        <Span className="badge badge-primary">4</Span>
                    </Atag>
                </LI>
            </ULOL>
        </Div>
    </Nav>;
}
export default Navbar;