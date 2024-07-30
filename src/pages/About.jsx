import React, { useContext, useEffect } from "react";
import { navbar_title_Context } from "../utils/Global/Store";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../Store/Slices/slice";
import { setNavbarTitle } from "../Store/Slices/slice";

const About = () => {
  // const [navbar_title, setNavbar_title] = useContext(navbar_title_Context);
  // useEffect(() => {
  //   setNavbar_title("Practice/About");
  // }, []);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbarTitle("Practice/About"));
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default About;
