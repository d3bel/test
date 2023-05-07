import React from "react";
import { Link } from "react-router-dom";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "testimonials", "work", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
