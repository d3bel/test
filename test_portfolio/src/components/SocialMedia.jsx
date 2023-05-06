import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
