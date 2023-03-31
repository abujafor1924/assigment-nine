import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Sitever from "./components/Sitebar/Sitever";

function App() {
  const [count, setCount] = useState([]);
  const [addTitle, setAddtitle] = useState("");

  const handleBlog = (product) => {
    // console.log(product.title);

    const previousTitle = localStorage.getItem("title");
    if (previousTitle) {
      const previous = previousTitle + product.title;
      localStorage.setItem("title", previous);
      setAddtitle(previous);
    } else {
      localStorage.setItem("title", product.title);
      setAddtitle(product.title);
    }
    const newAded = [...count, product];
    setCount(newAded);
  };

  const handaloftime = () => {
    console.log("time added");
  };

  return (
    <div className="App ">
      <Header></Header>
      <div className="flex justify-between">
        <div className="grid w-9/12">
          <Blog handleBlog={handleBlog} handaloftime={handaloftime}></Blog>
        </div>
        <div className="w-3/12 ">
          <Sitever count={count} addTitle={addTitle}></Sitever>
        </div>
      </div>
    </div>
  );
}

export default App;
