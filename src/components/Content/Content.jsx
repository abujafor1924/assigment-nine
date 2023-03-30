import React from "react";

const Content = (props) => {
  const { picture, title, name, time } = props.product;
  // console.log(props.product);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div>
          <img className="w-full h-96" src={picture} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex mt-3">
            <div>
              <img
                className="w-8 h-8 rounded-full mt-4"
                src="../../../src/img/craig-mckay-jmURdhtm7Ng-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="ms-0 justify-start ">
              <h2 className="me-5 font-bold text-2xl">{name}</h2>
              <p className="ms-2">Mar 14 (4 Days ago)</p>
            </div>
          </div>
          <div className="flex mt-3">
            <p className="m-2 font-medium">{time}</p>
            <div>btn</div>
          </div>
        </div>
        <div>
          <h1 className="m-4 font-bold text-2xl text-left ms-0">{title}</h1>
        </div>
        <div className="flex text-2xl font-normal">
          <p className="me-2">#beginners</p>
          <p>#programming</p>
        </div>

        <a
          href="#"
          className=" text-2xl font-normal underline text-cyan-600 text-start"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};

export default Content;
