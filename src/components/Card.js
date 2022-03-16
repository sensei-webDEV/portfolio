import React from "react";

const Card = ({
  title = "",
  content,
  icons = [],
  stripeText,
  right = null,
  left = null,
  condensed = false,
}) => {
  return (
    <div className="relative card-container flex flex-col space-y-4 items-center justify-between h-124 px-8 py-8 m-5 rounded-md bg-white-100 drop-shadow-md lg:h-119 4xl:h-126 4xl:w-[92%]">
      {/* Stripe */}
      <div className="stripe absolute transform h-7 w-40 px-3 flex justify-start items-center text-sm font-poppins font-normal text-white-100 bg-teal-200 rotate-90 top-12 -left-20 ">
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

      {/* title */}
      <div className="title px-3">{title}</div>

      {/* Description */}
      <div className="content font-poppins font-normal text-sm leading-tight text-justify pt-2 px-3.5 lg:text-xs 3.5xl:text-sm 4xl:text-tiny">
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
