import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/d3bel/">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100084861396438">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/ivaylo-stefanov-97a10038/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
