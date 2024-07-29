import React, { useContext, useEffect } from "react";
import { navbar_title_Context } from "../utils/Global/Store";

const About = () => {
  const [navbar_title, setNavbar_title] = useContext(navbar_title_Context);
  useEffect(() => {
    setNavbar_title("Practice/About");
  }, []);
  return <div>About</div>;
};

export default About;
