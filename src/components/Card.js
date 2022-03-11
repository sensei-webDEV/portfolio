import React from "react";

const Card = ({
  titleBack,
  titleFront,
  content,
  icons = [],
  stripeText,
  right = null,
  left = null,
  condensed = false,
}) => {
  return (
    <div className="relative card-container px-8 pt-5 pb-8 m-5 rounded-md bg-white-100 drop-shadow-md flex flex-col space-y-8 items-center lg:space-y-6 xl:space-y-7 4xl:m-8 4xl:px-8 4xl:pt-8 4xl:pb-12 4xl:space-y-14">
      {/* Stripe */}
      <div className="stripe absolute h-7 w-40 flex justify-start items-center px-3 text-white-100 text-xs font-poppins font-light transform rotate-90 left-0 -translate-x-1/2 bg-teal-200 translate-y-3/4 4xl:h-10 4xl:w-48 4xl:px-4 4xl:text-lg 4xl:font-normal">
        {stripeText}
      </div>

      {/* Arrows */}
      {right && (
        <div
          onClick={right}
          className="arrow absolute hover:cursor-pointer bg-pink-100 transform w-8 h-12 right-0 translate-x-1/2 top-1/2 -translate-y-3/4 text-white-100 flex justify-center items-center sm:w-9 sm:h-14 lg:w-8 lg:h-12 4xl:w-12 4xl:h-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-7 lg:w-7 4xl:w-14 4xl:h-14"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {left && (
        <div
          onClick={left}
          className="arrow absolute hover:cursor-pointer bg-pink-100 w-8 h-12 transform left-0 -translate-x-1/2 top-1/2 -translate-y-3/4 rotate-180 text-white-100 flex justify-center items-center sm:w-9 sm:h-14 lg:w-8 lg:h-12 4xl:w-12 4xl:h-16 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-7 lg:w-7 4xl:w-14 4xl:h-14"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Title */}
      {condensed ? (
        <div className="relative h-16 title w-16 font-tiempos font-bold self-start text-5xl ml-20 sm:text-6xl lg:text-6xl lg:ml-16 xl:text-6xl xl:ml-24 3xl:ml-20 3xl:text-6xl 4xl:w-24 4xl:text-8xl 4xl:h-24">
          <span className="absolute text-gray-200 opacity-30">{titleBack}</span>
          <span className="absolute transform text-gray-200 translate-x-9 top-5 lg:-right-1/2 lg:translate-x-10 lg:top-4 xl:top-4 xl:-right-1/2 xl:translate-x-10 3xl:top-1/2 3xl:-translate-y-5 3xl:-right-1/2 3xl:translate-x-1/2 4xl:-translate-y-4 4xl:translate-x-16">
            {titleFront}
          </span>
        </div>
      ) : (
        <div className="relative h-16 w-32 title font-tiempos font-bold self-start ml-12 text-5xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-6xl 4xl:h-24 4xl:text-7xl 4xl:ml-36">
          <span className="absolute text-gray-200 opacity-30">{titleBack}</span>
          <span className="absolute text-gray-200 top-1/2 transform -translate-y-5 translate-x-20 sm:top-1/2 sm:transform sm:-translate-y-1/3 sm:-right-1/2 sm:translate-x-1/2 lg:-translate-x-4 lg:-translate-y-4">
            {titleFront}
          </span>
        </div>
      )}

      {/* Description */}
      <div
        className="content font-poppins font-medium text-justify text-sm pt-2 leading-tight px-3.5 sm:text-tiny lg:px-4 lg:text-xs xl:px-5 xl:text-sm 4xl:text-lg 4xl:px-0 max-w-xs 4xl:max-w-md"
        style={{ minHeight: "122px" }}
      >
        {content}
      </div>

      {/* Footer */}
      <div className="footer max-h-8 4xl:max-h-16 w-full flex filter grayscale justify-evenly items-end overflow-y-hidden">
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
        <span className="font-tiempos font-black underline tracking-widest">
          ...
        </span>
      </div>
    </div>
  );
};

export default Card;
