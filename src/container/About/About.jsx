import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import "../About/About.scss";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = `*[_type=="abouts"]`;
    client.fetch(query)
    .then((data) => setAbout(data));
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        <span>what  </span>
        <br />
        am I 
        <span> learning?</span>
      </h2>

      <div className="app__profiles">
        {about.map((abouts, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={abouts.title + index}
          >
           <img src={urlFor(abouts.imgUrl)}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {abouts.title}{" "}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AppWrap(About, 'about');
