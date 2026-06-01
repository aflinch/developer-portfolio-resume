import React from "react";
import aboutSectionImg from "../../data/img/about-section-img.png";

export default function AboutMe() {

    return (
        <section id="aboutMe" className="about-section">
            <div className="about-section-content">
                <div className="about-container">
                    <h2 className="about-section-heading">About<span className="sub-color">.</span></h2>
                    <hr className="title-divider" />
                    <h3 className="about-section-title">A Passionate <span className="about-section-sub-color">Developer</span></h3>
                </div>

                <div className="about-section-img">
                    <img src={aboutSectionImg} alt="About Me Img"/>
                </div>

                <div className="about-section-content-column">


                    <div className="info-block">
                        <h3 className="block-title">ABOUT ME</h3>
                        <p className="about-section-description">
                            Over the last six years at General Motors, I've progressed from a Frontend Software Developer to a Software Engineer II, managing core data platform services. I specialize in Java, .NET, React, and GraphQL.
                        </p>
                    </div>


                    <div className="info-block">
                        <h3 className="block-title">BACKGROUND</h3>
                        <p className="about-section-description">
                            I hold an M.S. in Software Development from Boston University and a B.S. in Informatics from Indiana University.
                        </p>
                    </div>


                    <div className="about-experience-section">
                        <div className="stat-box">
                            <h2 className="about-experience">5+</h2>
                            <p>Years of Education</p>
                        </div>
                        <div className="stat-box">
                            <h2 className="about-experience">6+</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
