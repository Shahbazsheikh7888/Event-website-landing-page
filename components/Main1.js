import React from "react";

const Main1 = () => {
  return (
    <>
      <div className="w-full bg-[#0c0c0c] py-4 px-10">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3">
          <div className="flex flex-col  text-right align-text-bottom text-8xl pt-40">
            <h1>Unsual</h1>
          </div>
          <img
            src="/logo1.png "
            className="w-full pt-5 mx-auto my-4 px-20"
            alt=""
          ></img>
          <div className="flex flex-col  text-left align-text-bottom text-8xl pt-40">
            <h1>Places</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main1;
