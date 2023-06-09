import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import useService from "../../hooks/useService";
import { urlFor } from "../../client";

import "./About.scss";

const About = () => {
  const [data] = useService("abouts");
  const abouts = data.sort(
    (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
  );

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design </span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about._id}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
