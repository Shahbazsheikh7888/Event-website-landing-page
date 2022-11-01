import React from "react";

const Cards = () => {
  return (
    <div>
        
      <div className="w-full py-[10rem] px-4 bg-[#0c0c0c]">
        
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            
          <div className="w-full shadow-xl shadow-cyan-400/50 text-black bg-gradient-to-r from-green-100 to-blue-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            
            {/* <img
              className="w-40 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            /> */}
            <h2 className="text-4xl text-indigo-500 font-bold text-center py-8">
              Train Booking
            </h2>
            <p className="text-center text-2xl italic  font-bold">Starting from Rs.1,000  </p>
            <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">100% Return</p>
              <p className="py-2 border-b mx-8">Top Service</p>
              
            </div>
            <button className="bg-indigo-500 w-[200px]  text-white  rounded-full font-medium my-6 mx-auto px-6 py-3">
              Enroll Now
            </button>
          </div>
          <div className="w-full shadow-xl text-black shadow-cyan-400/50 bg-gradient-to-r from-green-100 to-blue-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            {/* <img
              className="w-40 mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt="/"
            /> */}
            <h2 className="text-4xl text-indigo-500 font-bold text-center py-8">
              Hotel Booking
            </h2>
            <p className="text-center text-2xl italic font-bold">Starting from Rs.5,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">100% Return</p>
              <p className="py-2 border-b mx-8">Top Service</p>
             
            </div>
            <button className="bg-indigo-500 text-white  w-[200px] rounded-full font-medium my-6 mx-auto px-6 py-3">
              Enroll Now
            </button>
          </div>
          <div className="w-full shadow-xl text-black shadow-cyan-400/50 bg-gradient-to-r from-green-100 to-blue-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img
              className="w-40 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            /> */}
            <h2 className="text-4xl text-indigo-500 font-bold text-center py-8">
              Flight Booking
            </h2>
            <p className="text-center text-2xl italic font-bold">Starting from Rs.10,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">100% Return</p>
              <p className="py-2 border-b mx-8">Top Service</p>
              
            </div>
            <button className="bg-indigo-500 text-white w-[200px] rounded-full font-medium my-6 mx-auto px-6 py-3">
              Enroll Now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
