import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Sitever from "./components/Sitebar/Sitever";

function App() {
  const [count, setCount] = useState([]);
  const [addTitle, setAddtitle] = useState("");
  const [time, setTimes] = useState([]);

  const handaloftime = (time) => {
    // console.log(time);

    const previousTime = JSON.parse(localStorage.getItem("time"));
    if (previousTime) {
      const sum = previousTime + time;
      localStorage.setItem("time", sum);
      setTimes(sum);
    } else {
      localStorage.setItem("time", time);
      setTimes(time);
    }
  };
  const handleBlog = (product) => {
    const newAded = [...count, product];
    setCount(newAded);
  };

  return (
    <div className="App ">
      <Header></Header>
      <div className="md:flex md:justify-between">
        <div className="grid md:w-9/12">
          <Blog handleBlog={handleBlog} handaloftime={handaloftime}></Blog>
        </div>
        <div className="md:w-3/12 ">
          <Sitever count={count} addTitle={addTitle} time={time}></Sitever>
        </div>
      </div>
      <div className="m-4">
        <div className="bg-red-200 m-4">
          <h1>What is difference Props and State? </h1>
          <p>
            props is a pass peramiter and State set peramiter this is pass
            component peramiter.
          </p>
        </div>
        <div className="bg-red-200 m-4">
          <h1>how usestate works react? </h1>
          <p>
            main purpose to change an element status and React to know for need
            to be rerendered.
          </p>
        </div>
        <div className="bg-red-200 m-4">
          <h1>how useeffect works in react? </h1>
          <p>
            this is use component rerender and rune one time. useEffect is
            conditionly changed.
          </p>
        </div>
        <div className="bg-red-200 m-4">
          <h1>how does react work?</h1>
          <p>React divided separate component and work commonly in a ui.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
