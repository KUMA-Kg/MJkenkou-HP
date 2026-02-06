"use client";
import React from 'react';

const Recruit = ({ cfg }) => {
    return (
        <section id="recruit" style={{
            backgroundImage: `url(${cfg.policy.bgPattern})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px',
            backgroundColor: '#ffffff',
            color: '#333' // Base color dark
        }}>
            {/* Removed the dark overlay figure/image to follow "hemp pattern background" request literally,
                or if user meant "behind the image" it would be different,
                but "arranged hemp pattern in background, limitingly close to white"
                implies the whole section bg.
                The prompt says: "Recruit section text is too thin... arrange hemp pattern in background".
                If I keep the image but change text, the image is still dark overlay.
                The user found "text too thin" (faint), likely due to white-on-dark.
                I will SWITCH to the "Hemp Pattern" design for Recruit as well, dropping the overlay image
                OR keeping the image as a side element?
                Original design was "Overlay". User said "Recruit text is too thin... arrange hemp pattern in background."
                This sounds like a redesign to match Policy style (light bg, dark text).
            */}

            <div className="column">
                {/* We need to override the #recruit h2 color from globals.css which is white */}
                <style jsx global>{`
                    #recruit h2 { color: #ff6b8a !important; }
                    #recruit h2 span { color: #3d3d6b !important; }
                    #recruit h2::after { background: linear-gradient(to left, transparent, #ff6b8a 25%, #ff6b8a 75%, transparent) no-repeat !important; }
                    #recruit h3 { color: #3d3d6b !important; }
                    #recruit p { color: rgba(0,0,0,0.8) !important; }
                    #recruit .column p { color: rgba(0,0,0,0.8) !important; }
                `}</style>

                <h2><span>{cfg.recruit.title}</span>RECRUIT</h2>

                <h3>{cfg.recruit.headline}</h3>
                <p>{cfg.recruit.body}</p>

                {/* Requirements Box */}
                <div className="recruit-requirements" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ddd' }}>
                    <h4 style={{
                        fontSize: '20px', fontWeight: '600', color: '#3d3d6b', marginBottom: '4vw',
                        textAlign: 'center'
                    }}>{cfg.recruit.requirements.title}</h4>

                    <div style={{
                        padding: '4vw', backgroundColor: '#ffffff', borderRadius: '8px',
                        border: '2px solid #ff6b8a'
                    }}>
                        <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#ff6b8a', marginBottom: '3vw' }}>
                            {cfg.recruit.requirements.conditionTitle}
                        </h5>
                        <div style={{ fontSize: '14px', lineHeight: '2', color: 'rgba(0,0,0,0.8)' }}>
                            {cfg.recruit.requirements.conditions.map((cond, i) => (
                                <p key={i} style={{ marginBottom: i < cfg.recruit.requirements.conditions.length - 1 ? '2vw' : '0' }}>
                                    {cond}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="more-btn" style={{ marginTop: '3rem' }}>
                    <a href="#recruit">詳しくみる</a>
                </div>
            </div>
        </section>
    );
};

export default Recruit;
