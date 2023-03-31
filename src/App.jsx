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
      const sum = time + previousTime;
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
    </div>
  );
}

export default App;
