import data from '../../data/index.json';
import SkillsModel from '../../Components/SkillsModel';
import React, {useState} from "react";
import { FaJava, FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function MySkills() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const iconMap = {
        Java: FaJava,
        Python: FaPython,
        Javascript: SiJavascript,
        SQL: FaDatabase,
        React: FaReact,
        Postgres: SiPostgresql,
        CSharp: TbBrandCSharp,
        "C#": TbBrandCSharp
    };

    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-section-content">
                <div className="skills-contianer">
                    <div className="section-heading-row">
                        <h2 className="skills-section-heading">SKILLS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="skills-section-title">Expertise</h3>
                </div>
                <div className="skills-section-container">
                    {data?.skills?.map((item, index) => {
                        const IconComponent = iconMap[item.title];

                        return (
                            <div className="skills-section-card" key={index} onClick={() => {
                                setSelectedSkill(item);
                                setShowModel(true);
                            }}>
                                <div className="skills-section-card-content">
                                    <h3 className="skills-section-card-title">{IconComponent ? <IconComponent /> : null} {item.title}</h3>
                                    <p className="skills-section-card-description">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {showModel && <SkillsModel
                    skill={selectedSkill}
                    onClose={() => {
                        setShowModel(false);
                        setSelectedSkill(null);
                    }}
                />}
            </div>
        </section>
    );
}
