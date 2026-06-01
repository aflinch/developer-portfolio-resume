import personal from '../../data/personal.json';
import { Github } from 'lucide-react';
import React from "react";

export default function RecentProjects() {

    return (
        <section className="projects-section" id="recentProjects">
            <div className="projects-section-content">
                <div className="projects-contianer">
                    <div className="section-heading-row">
                        <h2 className="projects-section-heading">PROJECTS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="projects-section-title">
                        Featured full-stack and software engineering <span className="sub-color">work.</span>
                    </h3>
                </div>
                <div className="projects-section-container">
                    {personal?.projects
                        ?.toSorted((a, b) => b.id - a.id) // Sorts by ID, highest to lowest
                        ?.slice(0, 3)
                        .map((item, index) => (
                        <div className="projects-section-card" key={index} >
                            <div className="projects-section-img">
                                <img src={item.src} alt="Project Img" />
                            </div>
                            <div className="projects-section-card-content">
                                <h4 className="projects-section-card-title">{item.title}</h4>
                                <div className="projects-section-card-tags-container">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span className="projects-section-card-tag" key={tagIndex}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="projects-section-card-description">{item.description}</p>
                                {item.url && item.url !== "none" && (
                                    <a href={item.url} target="_blank" rel="noreferrer" className="project-card-link">
                                        <Github />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
