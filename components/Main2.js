import React from "react";

const Main2 = () => {
  return (
    <>
      <div className="w-full bg-[#0c0c0c] pt-2 px-15">
        <div className=" max-w-[1240px]  grid md:grid-cols-3">
          <div className="flex flex-col  text-right align-text-bottom text-8xl pt-20">
            <h1>For</h1>
          </div>
          <img
            src="/logo2.png "
            className="w-full  mx-5 my-20 pt-8 px-20"
            alt=""
          ></img>
          <div className="flex flex-col mr-7  text-left align-text-bottom text-8xl pt-20">
            <h1>Extraordinary</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
