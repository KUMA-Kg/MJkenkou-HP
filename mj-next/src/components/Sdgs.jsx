import React from 'react';

const Sdgs = ({ cfg }) => {
    // New section requested: logo + one sentence
    return (
        <section id="sdgs" style={{ padding: '8vw 0', textAlign: 'center', backgroundColor: '#fff' }}>
            <div className="column">
                <figure style={{ maxWidth: '200px', margin: '0 auto 2rem' }}>
                    <img src={cfg.sdgs.image} alt="SDGs" />
                </figure>
                <p>{cfg.sdgs.body}</p>
            </div>
        </section>
    );
};

export default Sdgs;
