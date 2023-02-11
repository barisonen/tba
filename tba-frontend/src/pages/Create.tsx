import React from "react";

const Create = (): JSX.Element => {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-8 w-1/2">
        <label htmlFor="message" className="block mb-2 text-3xl font-medium text-white text-center">Your message</label>
        <textarea id="message" rows={5} className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-900 outline-none" placeholder="Write your thoughts here..."></textarea>
        <button className="mt-4 bg-gray-800 text-white font-bold w-1/4 py-3 rounded-md hover:bg-gray-700 hover:text-white">
          Post
        </button>
      </div>
    </div>
  );
}

export default Create;