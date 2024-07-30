import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Store/Slices/slice";
// import { count_Context, navbar_title_Context } from "../utils/Global/Store";

const Home = () => {
  // const [navbar_title, setNavbar_title] = useContext(navbar_title_Context);
  // const [count, setCount] = useContext(count_Context);

  // useEffect(() => {
  //   setNavbar_title("Practice/Home");
  // }, []);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const increment = () => {
  //   if (count + 1 <= 10) {
  //     dispatch(count + 1);
  //   }
  // };
  return (
    <div>
      <div className="">{count}</div>
      <button disabled={count === 10} onClick={() => dispatch(increment())}>
        Increase
      </button>
    </div>
  );
};

export default Home;
