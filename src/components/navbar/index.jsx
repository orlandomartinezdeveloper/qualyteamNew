import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as ReactstrapNavbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import Logo from '../../img/qualyteamLogo.png';
import './index.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <ReactstrapNavbar color="light" light expand="md">
            <NavbarBrand><img src={Logo} className="navbar__logo" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink>
                            <Link to="/" className="navbar__link"><i class="fas fa-home"></i>Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/list" className="navbar__link"><i class="fas fa-clipboard-list"></i> Master List</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </ReactstrapNavbar>
    );
}