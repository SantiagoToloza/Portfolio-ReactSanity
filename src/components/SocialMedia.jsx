import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/santiagotoloza/" target="_blank">
          <BsLinkedin></BsLinkedin>
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/santiagotooloza/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/santiagotoloza_/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
