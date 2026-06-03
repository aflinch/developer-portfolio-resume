import React from 'react';
import { createPortal } from 'react-dom';
import {X} from 'lucide-react';
import personal from "../data/personal";
import {NavLink} from "react-router-dom";

function SkillsModel({ skill, iconComponent, onClose }) {
    const IconComponent = iconComponent;

    return createPortal(
       <div className="modal-overlay" onClick={onClose}>
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <button className="modal-close" onClick={onClose}><X /></button>
               <div className="modal-body">
                   <div className="model-header-section">
                       <h3>{iconComponent ? <IconComponent /> : null} {skill.title}</h3>
                       <p className="skills-section-card-progress-num">{skill.level}%</p>
                   </div>
                   <div className="skills-section-card-progress-bar">
                       <div className="skills-section-card-progress" style={{ width: `${skill.level}%` }}></div>
                   </div>
                   <p className="model-description">{skill.description}</p>
                   <div className="model-projects-container">
                       {personal?.projects
                           ?.filter((item) => item.tags?.includes(skill.title))
                           ?.sort((a, b) => b.id - a.id)
                           ?.slice(0, 4)
                           .map((item) => (
                               <div key={item.id} >
                                   <NavLink className="model-projects-img" to="/MyProjects">
                                       <img src={item.src} alt="Project Img" />
                                   </NavLink>
                                   <div className="model-projects-content">
                                       <h4 className="model-projects-title">{item.title}</h4>
                                   </div>
                               </div>
                           ))}
                   </div>
               </div>
           </div>
       </div>,
       document.body
    )
}

export default SkillsModel;
