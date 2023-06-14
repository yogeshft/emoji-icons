import React, { useEffect, useState } from "react";
import { ReactComponent as SunIcon } from "../../assets/moon.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { setTheme } from "../../utils/theme";
import "./Toggle.css";

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  const theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      setTogClass("light");
    } else {
      setTheme("dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, [theme]);

  return (
    <div className="container-toggle">
      <label>
        <input
          type="checkbox"
          id="toggle-checkbox"
          className="toggle-checkbox"
          onChange={handleOnClick}
          checked={togClass === "dark"}
          aria-label="toggle-checkbox"
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <SunIcon color="#ffbb52" className="sun-icon" />
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <MoonIcon color="white" className="moon-icon" />
          </div>
        </div>
      </label>
    </div>
  );
}

export default Toggle;
