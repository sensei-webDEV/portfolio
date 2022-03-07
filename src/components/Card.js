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
    <div className="relative card-container px-8 pt-5 pb-8 m-5 4xl:m-8 4xl:px-8 4xl:pt-8 4xl:pb-12 rounded-md bg-white-100 drop-shadow-md flex flex-col space-y-8 4xl:space-y-14 items-center">
      {/* Stripe */}
      <div className="stripe absolute h-7 w-40 4xl:h-10 4xl:w-48 4xl:px-4 flex justify-start 4xl:text-lg 4xl:font-normal items-center px-3 text-white-100 text-xs font-poppins font-light transform rotate-90 left-0 -translate-x-1/2 bg-teal-200 translate-y-3/4">
        {stripeText}
      </div>
      {/* Arrows */}
      {right && (
        <div
          onClick={right}
          className="arrow absolute hover:cursor-pointer bg-pink-100 w-9 h-14 4xl:w-12 4xl:h-16 transform right-0 translate-x-1/2 top-1/2 -translate-y-3/4 text-white-100 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 4xl:w-14 4xl:h-14"
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
          className="arrow absolute hover:cursor-pointer bg-pink-100 w-9 h-14 4xl:w-12 4xl:h-16 transform left-0 -translate-x-1/2 top-1/2 -translate-y-3/4 rotate-180 text-white-100 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 4xl:w-14 4xl:h-14"
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
        <div className="relative h-16 4xl:h-24 title xl:text-5xl 3xl:text-6xl 4xl:text-8xl w-16 4xl:w-24 font-tiempos font-bold self-start ml-44">
          <span className="absolute text-gray-200 opacity-30">{titleBack}</span>
          <span className="absolute top-1/2 transform -translate-y-1/3 4xl:-translate-y-4 -right-1/2 translate-x-1/2 4xl:translate-x-16 text-gray-200">
            {titleFront}
          </span>
        </div>
      ) : (
        <div className="relative h-16 4xl:h-24 w-32 title xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-tiempos font-bold self-start ml-9 4xl:ml-36">
          <span className="absolute text-gray-200 opacity-30">{titleBack}</span>
          <span className="absolute top-1/2 transform -translate-y-1/3 -right-1/2 translate-x-1/2 text-gray-200">
            {titleFront}
          </span>
        </div>
      )}

      {/* Description */}
      <div
        className="content font-poppins font-medium text-tiny 4xl:text-lg leading-tight px-3.5 4xl:px-0 max-w-xs 4xl:max-w-md"
        style={{ minHeight: "122px" }}
      >
        {content}
      </div>

      {/* Footer */}
      <div className="footer max-h-8 4xl:max-h-16 w-full flex filter grayscale justify-evenly items-end overflow-y-hidden">
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
        <span className="font-tiempos font-bold tracking-widest">...</span>
      </div>
    </div>
  );
};

export default Card;
