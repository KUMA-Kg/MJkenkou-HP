import React from 'react';

const Hero = ({ cfg }) => {
    return (
        <section id="main-visual">
            <img src={cfg.hero.image} alt="Main Visual" />
            <div className="main-v-tagline">
                <h1 dangerouslySetInnerHTML={{ __html: cfg.hero.headlineHtml }} />
            </div>
            <div className="sc-down">
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
