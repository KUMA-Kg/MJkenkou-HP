import React from 'react';

const About = ({ cfg }) => {
    // Logic for existing fade design:
    // #about { background: linear-gradient(to left, transparent 0 5%, #ffffff 60% 100%), url(...) }
    // We apply this via inline style to use the config image
    const backgroundStyle = {
        background: `linear-gradient(to left, transparent 0 5%, #ffffff 60% 100%), url("${cfg.about.image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Added center position
    };

    return (
        <section id="about" style={backgroundStyle}>
            {/* Use the new SectionTitle component or keep strict structure? 
          Title in About is <h2><span>text</span></h2>, not with EN subtitle usually in About 
          Wait, About only has JP text in current: <h2><span>地域と未来を支える安心の施工を</span></h2>
      */}
            <h2><span>{cfg.about.title}</span></h2>
            <div className="column">
                {/* Map image or Embed? Logic says mapEmbedUrl if present, but current design uses static image in About?
            Actually in `home.html` lines 897-901 it has a `.footer-map` div with an image INSIDE About section??
            "div className='footer-map' ... img src...".
            But the text says "株式会社エムジェイ建工は..."
            Let's keep the structure but maybe clean up the "footer-map" class name confusion if possible.
            However, user said "Structure the same".
            The map embed is in the footer mostly.
            The config has `image` for About.
            Wait, `siteConfig` I wrote has `image` and `mapEmbedUrl`.
            The current `home.html` at line 898 has an IMG.
            I'll prioritize the design request: "image on the right, fade..."
            The CSS handles the background image. The content is just text.
            Wait, checking `home.html`:
            <section id="about"> ... <div className="footer-map"><img ...></div> <p>...
            It seems there WAS an image inside the content too?
            Ah, looking at line 391 in `home.html`:
            #about { background: linear-gradient... url(...) }
            So there is a background image.
            AND at line 898 there is an <img> inside .footer-map div?
            That looks like a mistake in `home.html` or a specific design choice (a map image?).
            The user prompt says: "About（導入）：見出し＋紹介文＋（地図or画像枠）"
            I will include the mapEmbedUrl if it's confusing, but the "Fade" request specifically mentions "Image on the right".
            That usually refers to the Background image found in CSS.
            I will proceed with the background image logic for the aesthetic request.
            I will also render the body lines.
        */}
                <div className="about-content">
                    {/* If there was an image tag in content, I might skip it if the background serves the purpose, 
               or put a placeholder if structurally required. 
               The prompt "（地図or画像枠）" suggests a slot.
           */}
                </div>
                <p>
                    {cfg.about.bodyLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </section>
    );
};

export default About;
