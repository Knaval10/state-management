import React, { useContext, useEffect } from "react";
import { count_Context, navbar_title_Context } from "../utils/Global/Store";

const Home = () => {
  const [navbar_title, setNavbar_title] = useContext(navbar_title_Context);
  const [count, setCount] = useContext(count_Context);
  useEffect(() => {
    setNavbar_title("Practice/Home");
  }, []);
  const increment = () => {
    if (count + 1 <= 10) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <div className="">{count}</div>
      <button disabled={count === 10} onClick={increment}>
        Increase
      </button>
    </div>
  );
};

export default Home;
