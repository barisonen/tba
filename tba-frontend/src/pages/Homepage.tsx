import React from "react"

const Homepage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium leading-tight text-5xl mt-8 mb-2 text-white">Welcome</h1>
      <h3 className="leading-tight text-sm sm:text-lg mt-8 text-white">Here are somethings you can do on this website:</h3>
      <h5 className="mt-5 leading-tight text-xs sm:text-sm text-gray-300 italic">- nothing</h5>
    </div>
  );
}

export default Homepage;