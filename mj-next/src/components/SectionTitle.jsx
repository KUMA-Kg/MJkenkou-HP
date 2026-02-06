import React from 'react';

const SectionTitle = ({ en, jp }) => {
    return (
        <h2><span>{jp}</span>{en}</h2>
    );
};

export default SectionTitle;
