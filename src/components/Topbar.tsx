import { useState } from "react";

export default function TopBar() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleNavState = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav>
            <div className={`topBar${isMobile ? " mobile" : ""}`} id="topBar">
                <a href="javascript:void(0);" className="icon" onClick={toggleNavState}>
                    <span className="visually-hidden">Hamburger menu</span>
                    <i className="fa fa-bars"></i>
                </a>
                <a href="https://github.com/kattisA/forkfolio/">Original repo</a>
            </div>
        </nav>
    );
}
