import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Sitever from "./components/Sitebar/Sitever";

function App() {
  const [count, setCount] = useState([]);

  const handleBlog = (product) => {
    const newAded = [...count, product];
    setCount(newAded);
  };

  return (
    <div className="App ">
      <Header></Header>
      <div className="flex justify-between">
        <div className="grid w-9/12">
          <Blog handleBlog={handleBlog}></Blog>
        </div>
        <div className="w-3/12 ">
          <Sitever count={count}></Sitever>
        </div>
      </div>
    </div>
  );
}

export default App;
