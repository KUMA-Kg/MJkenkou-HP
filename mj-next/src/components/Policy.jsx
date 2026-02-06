import React from 'react';
import SectionTitle from './SectionTitle';

const Policy = ({ cfg }) => {
    // Use config pattern if available or fallback (we will generate it)
    // Request: "hemp pattern background, texture only, faint white"
    const bgStyle = {
        backgroundImage: `url('${cfg.policy.bgPattern}')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px', // Adjust size as needed
        backgroundColor: '#ffffff', // "Nearly white"
        // To make it faint, we might rely on the image itself being faint gray/white.
    };

    return (
        <section id="policy" style={bgStyle}>
            <SectionTitle jp="エムジェイ建工の想い" en="POLICY" />
            <div className="column">
                <ul className="flex-box">
                    <li>{cfg.policy.body}</li>
                </ul>
                <div className="more-btn">
                    <a href="#policy">もっと知る</a>
                </div>
            </div>
        </section>
    );
};

export default Policy;
