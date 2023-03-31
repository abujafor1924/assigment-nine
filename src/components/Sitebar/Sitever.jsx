import React from "react";
import { useState } from "react";

const Sitever = (props) => {
  //   console.log(props.count);
  const title = [];
  for (const product of props.count) {
    title.push(product.title);
  }
  return (
    <div className="sticky top-1">
      <div>
        <div>
          <h1 className="p-2 border-lime-500 bg-red-200 mt-4 font-bold text-2xl text-left">
            Spent time on read :
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-lime-600">
            Book Mark : {props.count.length}
          </h1>
          <div>
            <h1 className="p-2 bg-red-200 m-2">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitever;
