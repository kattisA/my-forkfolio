import React from "react";
import logo from "../assets/logo/logo_64x64.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <a href="index.html" className="logo">
                <picture>
                    <img src={logo} alt="fork, spoon and knife logo" />
                </picture>
                <h1 className="title">Forkfolio</h1>
            </a>
        </header>
    );
};

export default Header;
