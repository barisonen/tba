import React from "react";

const About = (): JSX.Element => {

  return (
    <div className="flex flex-col items-center">
      <img className="mt-8 rounded-lg w-1/4 h-15" src="/images/brs.png" alt="pp" />
      <h3 className="leading-tight text-sm sm:text-lg mt-2 text-white">Baris Onen</h3>
      <h5 className="leading-tight text-xs sm:text-sm text-gray-300 italic">Genius, Billionaire, Playboy, Philanthropist, The Da Vinci of Our Time</h5>
    </div>
  );
}

export default About;