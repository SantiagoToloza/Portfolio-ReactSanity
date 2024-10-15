import React from "react";
import { BsLinkedin, BsGithub, BsMessenger } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/santiagotoloza/" target="_blank">
          <BsLinkedin></BsLinkedin>
        </a>
      </div>

      <div>
        <a href="https://github.com/SantiagoToloza" target="_blank">
          <BsGithub />
        </a>
      </div>

    </div >

  );
};
export default SocialMedia;
