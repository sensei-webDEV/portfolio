import React from "react";
import { Icons, ICON_NAMES } from "../svg";
import Popover from "./Popover";

const ProjectsSection = ({
  direction = "ltr",
  title = "",
  color = "pink",
  links = {
    primary: { label: "", url: "", disabled: false },
    secondary: { label: "", url: "", disabled: false },
  },
  technologies = [],
  stripeText,
  description,
  mockup,
  mockupTransform,
  setScrollable,
}) => {
  // helpers
  const determineColor = () => {
    if (color === "pink") return "bg-pink-100";
    if (color === "purple") return "bg-purple-100";
    if (color === "teal") return "bg-teal-100";
  };

  /**
   *
   * @param {String} stripe "tech" or "tags"
   * @returns css position
   */
  const determineStripesPosition = (stripe) => {
    switch (stripe) {
      case "tags":
        if (direction === "ltr")
          return "-left-14 -translate-y-24 xl:-left-5 2xl:left-5 2xl:-translate-y-29 3xl:left-18 4xl:-translate-y-40 4xl:left-72";
        if (direction === "rtl")
          return "-right-14 -translate-y-24 xl:-right-5 2xl:right-5 2xl:-translate-y-29 3xl:right-18 4xl:-translate-y-40 4xl:right-72";
      case "tech":
        if (direction === "ltr")
          return "-right-7 translate-y-28 xl:right-2 2xl:right-5 2xl:translate-y-32 3xl:right-24 4xl:translate-y-48 4xl:right-72";
        if (direction === "rtl")
          return "-left-7 translate-y-28 xl:left-2 2xl:left-5 2xl:translate-y-32 3xl:left-24 4xl:translate-y-48 4xl:left-72";
    }
  };

  const determineTechStripeChevron = () => {
    if (direction === "ltr")
      return "top-full left-full -translate-y-1.5 -translate-x-5 -rotate-90";
    if (direction === "rtl")
      return "bottom-full right-full translate-y-1.5 translate-x-30 rotate-90";
  };

  const determineFlexFlow = () => {
    if (direction === "rtl") return "lg:flex-row-reverse";
    if (direction === "ltr") return "lg:flex-row";
  };

  return (
    <div
      className={`Section bg-${color}-100 selection:bg-black-100 z-50 px-7 flex-col-reverse items-center h-148 w-full flex lg:px-16 lg:h-80 lg:flex ${determineFlexFlow()} xl:px-28 2xl:px-40 2xl:h-[22rem] 3.5xl:h-96 4xl:px-80 4xl:h-124`}
    >
      {/* Content */}
      <div className="content flex flex-col flex-shrink-0 justify-center items-center space-y-10 py-12 max-w-max sm:py-6 sm:space-y-5 lg:px-2 lg:py-9 lg:space-y-6 xl:pl-4 2xl:flex-grow 2xl:min-w-[45%] 2xl:w-126 2xl:space-y-8 4xl:space-y-16 4xl:min-w-[40%]">
        {/* title */}
        <div className="title pt-4 pb-2 sm:pb-0 md:pt-14 lg:mt-0 lg:pt-4">
          {title}
        </div>

        {/* description */}
        <p className="description text-white-100 z-10 max-w-sm font-poppins font-normal text-sm text-justify leading-tight px-3.5 lg:text-xs lg:px-8 2xl:text-sm 2xl:px-0 3.5xl:text-sm 4xl:text-tiny">
          {description}
        </p>
        {/* buttons */}
        <div className="flex space-x-2 z-10 justify-around items-center w-full px-3.5 sm:space-x-4 sm:pb-8 lg:px-4 2xl:px-10 2xl:space-x-0 4xl:justify-center 4xl:space-x-14">
          <a
            aria-disabled
            className={`rounded-md flex justify-center text-white-200 items-center space-x-2.5 shadow-sm hover:bg-gradient-to-br hover:from-white-100 hover:to-white-200 hover:text-black-100 hover:scale-104 hover:font-medium hover:shadow-lg sm:space-x-4 ${
              links.primary.disabled
                ? "cursor-not-allowed pointer-events-none bg-gray-200 text-white-100 opacity-50"
                : "bg-black-100 text-white-200"
            }  px-4 pt-1 pb-1.5 sm:px-4 lg:px-4 xl:px-6 4xl:pb-2.5`}
            href={links.primary.url}
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-sm sm:text-tiny 4xl:text-lg">
              {links.primary.label}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 4xl:w-5 4xl:h-5 4xl:-mb-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <a
            className="underline text-black-100 text-sm xl:text-tiny 4xl:text-lg 2xl:font-medium bg-opacity-10 rounded-sm shadow-sm px-2 py-1"
            href={links.secondary.url}
            rel="noreferrer"
            target="_blank"
          >
            {links.secondary.label}
          </a>
          {/* <button>{links.secondary}</button> */}
        </div>
      </div>
      {/* Mockup */}
      <div className="mockup z-40 relative w-full h-full">
        <div className="absolute transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          {mockup}
        </div>
      </div>
      {/* Background Dots */}
      <span
        className="absolute z-10 flex flex-col space-y-4 text-black-200 font-black transform translate-y-72 translate-x-156 lg:translate-y-52 lg:translate-x-128 4xl:translate-y-96  4xl:left-156"
        style={{ fontSize: "750px", opacity: "3%" }}
      >
        {Icons(ICON_NAMES.DOTS, 220)}
        {Icons(ICON_NAMES.DOTS, 220)}
      </span>
      {/* tags stripe */}
      <div
        className={`stripe hidden absolute transform h-10 w-48 lg:flex items-center justify-start px-3 text-white-100 bg-black-100 text-2xs font-poppins font-normal rotate-90 4xl:h-12 4xl:w-52 4xl:text-xs ${determineStripesPosition(
          "tags"
        )}`}
      >
        <span className="transform rotate-0 sm:rotate-180">{stripeText}</span>
      </div>
      {/* techs stripe */}
      <div
        className={`stripe absolute transform hidden lg:flex text-white-100 bg-black-100 font-normal font-poppins text-4xs pr-2.5 pl-0 h-8 rotate-90 z-999 4xl:pr-4 4xl:pl-1 4xl:h-11 4xl:text-2xs ${determineStripesPosition(
          "tech"
        )}`}
      >
        <div className="sub-techs relative flex justify-center items-center space-x-3.5 lg:space-x-3">
          {/* button */}
          <Popover
            direction={direction}
            setScrollable={setScrollable}
            technologies={technologies}
          />
          {/* <div
            className={`absolute bg-black-100 z-20 p-1 transform ${determineTechStripeChevron()}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 lg:w-3.5 lg:h-3.5 4xl:w-6 4xl:h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
          <div className="transform font-medium uppercase">technologies</div>
          <div className="transform -rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 4xl:h-6 4xl:w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
