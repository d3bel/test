import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      <div>
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
    </div>
  );
};

export default NavigationDots;
