import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Sitever from "./components/Sitebar/Sitever";
import QOne from "./components/QAns/QOne";
import QTow from "./components/QAns/QTow";
import QThree from "./components/QAns/QThree";
import QFour from "./components/QAns/QFour";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState([]);
  const [addTitle, setAddtitle] = useState("");
  const [time, setTimes] = useState(0);

  const handaloftime = (time) => {
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
    // console.log(product);
    if (product !== product.id) {
      toast.success(`"${product.title}" added to bookmarks!`);
    } else if (product === product.id) {
      // add the product to the bookmarks
      toast(`"${product.title}" is already bookmarked!`);
    }

    // setup Book mark
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
          <ToastContainer />
          <Sitever count={count} addTitle={addTitle} time={time}></Sitever>
        </div>
      </div>
      <div className="m-4">
        <QOne></QOne>
        <QTow></QTow>
        <QThree></QThree>
        <QFour></QFour>
      </div>
    </div>
  );
}

export default App;
