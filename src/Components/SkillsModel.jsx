import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

function SkillsModel({ skill, onClose }) {

    return createPortal(
       <div className="modal-overlay" onClick={onClose}>
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <button className="modal-close" onClick={onClose}><X /></button>
               <div className="modal-body">
                   <h3>{skill.title}</h3>
                   <p>{skill.description}</p>
               </div>
           </div>
       </div>,
       document.body
    )
}

export default SkillsModel;
