"use client";
import React from 'react';

const Footer = ({ cfg }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer">
            <div className="column secondary" id="contact">
                <h2><span>お問い合わせ</span>CONTACT</h2>
                <ul className="footer-action font-osw">
                    <li>
                        <a href={cfg.brand.telLink}><span>tel.</span>{cfg.brand.tel}</a>
                    </li>
                </ul>
            </div>

            <div className="column">
                <div style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>{cfg.brand.companyName}</h3>
                    <p>{cfg.brand.address}</p>
                </div>
                <div className="footer-map">
                    <iframe
                        src={cfg.about.mapEmbedUrl} // Using map URL from About config (based on plan logic)
                        loading="lazy"></iframe>
                </div>
                <div id="pageTop" onClick={scrollToTop}>
                    ↑
                </div>
                <nav>
                    <ul className="flex-box">
                        <li><a href="#policy">{cfg.policy.title}</a></li>
                        <li><a href="#company">会社概要</a></li>
                        <li><a href="#business">{cfg.business.title}</a></li>
                        <li><a href="#recruit">{cfg.recruit.title}</a></li>
                        <li><a href="#contact">お問い合わせ</a></li>
                    </ul>
                </nav>
            </div>

            <div className="footer-logo">
                <img src={cfg.brand.logoPath} alt={cfg.brand.companyName} />
            </div>

            <small>© {cfg.brand.companyName}</small>
        </footer>
    );
};

export default Footer;
