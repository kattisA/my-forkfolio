import React from 'react';

import heroLarge4 from '../assets/hero_1_4.jpg';
import hero1920 from '../assets/hero_1920.jpg';
import hero960 from '../assets/hero_960.jpg';
import hero480 from '../assets/hero_480.jpg';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <picture>
                <source media="(min-width: 1920px)" srcSet={heroLarge4} />
                <source media="(min-width: 961px)" srcSet={hero1920} />
                <source media="(min-width: 481px)" srcSet={hero960} />
                <img src={hero480} alt="Several meals on a buffet" />
            </picture>
        </div>
    );
};

export default Hero;
