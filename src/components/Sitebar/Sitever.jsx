import React, { useState } from "react";

const Sitever = (props) => {
  return (
    <div className="sticky top-1">
      <div>
        <div>
          <h1 className="p-2 border-lime-500 bg-red-200 mt-4 font-bold text-1xl text-left">
            Spent time on read : {props.time} min
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-lime-600">
            Book Mark : {props.count.length}
          </h1>
          <div className="p-2 bg-red-200 m-2">
            <div>
              {props.count.map((pd) => (
                <div key={pd.id} className="m-4 bg-slate-50 p-2">
                  <h2>{pd.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitever;
