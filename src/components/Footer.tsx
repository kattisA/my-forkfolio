import React from 'react';
import logoSmall from '../assets/logo/logo_32x32.png';
import logoLarge from '../assets/logo/logo_64x64.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <a href="index.html" className="footerLogo">
                <picture>
                    <source media="(min-width: 1201px)" srcSet={logoLarge} />
                    <img src={logoSmall} alt="fork, spoon and knife logo" />
                </picture>
                <p>ForkFolio – för dig som älskar mat!</p>
            </a>

            <div className="footerLinks">
                <a href="https://github.com/kattisA/forkfolio/">Original repo</a>
            </div>
            <div className="footerLinks">
                <a href="https://github.com/kattisA/my-forkfolio">
                    <span>Nuvarande repo</span>
                </a>
            </div>
            <div className="footerLinks">
                <a href="https://github.com/kattisA">
                    <span>Min github-profil</span>
                </a>
            </div>
            <div className="footerLinks">
                <p>
                    <a href="http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fkattisa.github.io%2Fforkfolio%2Findex.html&usermedium=all&vextwarning=&warning=1">
                        <img
                            style={{ border: 0, width: '88px', height: '31px' }}
                            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                            alt="Valid CSS!"
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
