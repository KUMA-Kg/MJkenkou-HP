import React from 'react';
import SectionTitle from './SectionTitle';

const Business = ({ cfg }) => {
    return (
        <section id="business" className="bg-yellow">
            <SectionTitle jp={cfg.business.title} en="BUSINESS" />
            <div className="column">
                {cfg.business.items.map((item, index) => (
                    <div className="flex-box" key={index}>
                        <figure>
                            <img src={item.image} alt={item.title} />
                        </figure>
                        <div className="business-text">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}

                <div className="more-btn">
                    <a href="#business">もっとみる</a>
                </div>
            </div>
        </section>
    );
};

export default Business;
