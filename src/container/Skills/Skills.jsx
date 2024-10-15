import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from '../../wrapper/AppWrap'
import '../Skills/skill.scss'
import { urlFor, client } from "../../client";
const Skills = () => {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setskills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My skills</h2>
      <div className="app__skill">
        {skills.map((skill, index) => (
          <div className="app__skills-container"
            key={skill.name + index}
          >
            <motion.div className="app__skills-list">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"

              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}

                >
                  <img
                    className="img"
                    src={urlFor(skill.icon)}
                    alt={skill.name}
                  />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(Skills, 'skills');
