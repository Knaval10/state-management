import React, { useContext } from "react";
import { navbar_title_Context } from "../../utils/Global/Store";
const navMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "User",
    link: "/user",
  },
];
const Navbar = () => {
  const [navbar_title, setNavbar_title] = useContext(navbar_title_Context);
  return (
    <div className="flex justify-between w-full px-5 py-2 bg-amber-200">
      <h1>{navbar_title}</h1>
      <div className="flex gap-3">
        {navMenu.map((item, idx) => (
          <a key={idx} href={item?.link}>
            {item?.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
