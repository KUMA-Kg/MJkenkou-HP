"use client";
import React, { useState } from 'react';

const Header = ({ cfg }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={isMenuOpen ? 'is-opened' : ''}>
            <header id="header">
                <div className="head-logo">
                    <a href="#">
                        <img src={cfg.brand.logoPath} alt={cfg.brand.companyName} />
                    </a>
                </div>
                <div className="header-action">
                    <ul>
                        <li className="header-tel">
                            <a href={cfg.brand.telLink}><span>tel.</span>{cfg.brand.tel}</a>
                        </li>
                        <li className="header-contact">
                            <a href="#contact">お問い合わせ</a>
                        </li>
                    </ul>
                </div>
                <div className="gnav-trigger">
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="menu-body">
                    <nav id="gnav">
                        <ul id="gnav-menu">
                            <li><a href="#policy" onClick={toggleMenu}><span>{cfg.policy.title}</span>POLICY</a></li>
                            <li><a href="#company" onClick={toggleMenu}><span>会社情報</span>COMPANY</a></li>
                            <li><a href="#business" onClick={toggleMenu}><span>{cfg.business.title}</span>BUSINESS</a></li>
                            <li><a href="#recruit" onClick={toggleMenu}><span>{cfg.recruit.title}</span>RECRUIT</a></li>
                            <li><a href="#contact" onClick={toggleMenu}><span>お問い合わせ</span>CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
