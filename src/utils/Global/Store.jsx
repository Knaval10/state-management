import React, { useState, createContext } from "react";

export const navbar_title_Context = createContext({});
export const count_Context = createContext({});
const Store = ({ children }) => {
  const [navbar_title, setNavbar_title] = useState("");
  const [count, setCount] = useState(0);

  return (
    <count_Context.Provider value={[count, setCount]}>
      <navbar_title_Context.Provider value={[navbar_title, setNavbar_title]}>
        {children}
      </navbar_title_Context.Provider>
    </count_Context.Provider>
  );
};

export default Store;
