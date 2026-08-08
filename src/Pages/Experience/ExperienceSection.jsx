import React from "react";
import experience from "../../data/experience";
import Timeline from "../../Components/Timeline";
import {NavLink} from "react-router-dom";
import { Download } from "lucide-react";
import resumePdf from "../../data/Flinchum, Alex - Resume.pdf";

export default function ExperienceSection() {

    const parseDate = (str) => {
        const [month, year] = str.split(" ");
        return new Date(`${month} 1, ${year}`);
    };

    const sortedExperience = experience?.experience
        ? [...experience.experience].sort((a, b) => parseDate(b.start) - parseDate(a.start))
        : [];

    return (
        <section id="experienceSection" className="experience-section">
            <div className="experience-section-content">
                <div className="experience-container">
                    <div className="section-heading-row">
                        <h2 className="experience-section-heading">EXPERIENCE<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <div className="experience-section-row">
                        <h3 className="experience-section-title">
                            Knowledge Built <span className="sub-color">Out</span>
                        </h3>

                        <span className="experience-section-buttons">
                            <a href={resumePdf} download="Flinchum, Alex - Resume.pdf" className="btn btn-alt"><Download /> <span>Download CV</span></a>
                        </span>
                    </div>

                </div>

                <div className="timeline-container">
                    <div className="custom-timeline">
                        {sortedExperience.map((item) => (
                            <Timeline key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
