import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <Header></Header>
      <div className="flex justify-between">
        <div className="grid w-9/12">
          <Blog></Blog>
        </div>
        <div className="w-3/12">
          <h1>This is sitber</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
