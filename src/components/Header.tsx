import React from "react";
import logo from "../assets/logo/logo_64x64.png";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <picture>
                    <img src={logo} alt="fork, spoon and knife logo" />
                </picture>
                <h1 className="title">Forkfolio</h1>
            </Link>
        </header>
    );
};

export default Header;
