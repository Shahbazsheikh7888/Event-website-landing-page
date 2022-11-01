import React from "react";

const Main5 = () => {
  return (
    <>
    {/* <div>
      <hr className="bg-gradient-to-r from-cyan-500 to-gray-200 mt-4 " />
    </div> */}
    <div>
    <div className=" bg-black flex flex-col justify-center">
  <div className="relative p-5 w-full sm:max-w-7xl sm:mx-auto">
    <div className="overflow-hidden z-0 rounded-full relative p-3">
      <form role="form" className="relative flex z-50 bg-white rounded-full">
        <input type="event" placeholder="Enter the event here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
        <input type= "date"  placeholder="Select date" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
        <input type="location" placeholder="Enter the location here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
        <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
      </form>
      <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
      <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
      <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
      <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
    </div>
  </div>
</div>
    </div>
    
    
    </>
  );
};

export default Main5;
