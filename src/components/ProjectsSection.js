import React from "react";
import { Icons, ICON_NAMES } from "../svg";
import { Parallax } from "react-scroll-parallax";

const ProjectsSection = ({
  direction = "ltr",
  title = { light: "", dark: "" },
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
}) => {
  // helpers
  const determineColor = () => {
    if (color === "pink") return "bg-pink-100";
    if (color === "purple") return "bg-purple-100";
    if (color === "teal") return "bg-teal-100";
  };

  if (direction === "ltr")
    return (
      <div className={`Section px-40 4xl:px-96 h-96 4xl:h-128 w-full `}>
        {/* Background Dots */}
        <span
          className="absolute z-0 flex flex-col space-y-4 text-black-200 font-black transform translate-y-72 translate-x-156 4xl:translate-y-96  4xl:left-156"
          style={{ fontSize: "750px", opacity: "3%" }}
        >
          {Icons(ICON_NAMES.DOTS, 220)}
          {Icons(ICON_NAMES.DOTS, 220)}
        </span>
        {/* bg */}
        <div
          className={`${determineColor()}  z-0 w-full h-96 4xl:h-128 absolute left-0`}
        ></div>
        {/* Stripe */}
        <div className="stripe absolute h-11 w-52 4xl:w-64 4xl:h-14 4xl:text-tiny 4xl:px-4 flex justify-start items-center px-3 text-white-100 bg-black-100 text-xs font-poppins font-normal transform rotate-90 -left-4 translate-y-8 4xl:left-36">
          <span className="transform rotate-180">{stripeText}</span>
        </div>
        {/* techs */}
        <div className="stripe absolute h-10 pr-4 pl-0 flex text-white-100 bg-black-100 text-xs font-normal font-poppins transform rotate-90 translate-y-80 right-12 4xl:right-56 4xl:h-14 4xl:translate-y-124 4xl:text-sm">
          <div className="sub-techs relative flex justify-center items-center space-x-3.5">
            {/* button */}
            <div className="absolute bg-black-100 z-20 p-1 transform -rotate-90 top-full left-full -translate-x-7 4xl:p-1.5 4xl:-translate-x-9 4xl:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 4xl:w-6 4xl:h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
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
        {/* Content */}
        <div className="content flex flex-col space-y-10 py-5 flex-shrink max-w-max justify-center items-center 4xl:space-y-16">
          {/* title */}
          <div className="relative h-16 w-32 title text-6xl font-tiempos font-bold self-start ml-8 4xl:ml-10 4xl:text-8xl">
            <span className="absolute whitespace-nowrap text-white-100 opacity-95">
              {title.light}
            </span>
            <span className="absolute whitespace-nowrap top-1/2 transform 4xl:translate-y-1 4xl:-right-32 -right-1/2 translate-x-3/4 text-black-100">
              {title.dark}
            </span>
          </div>
          {/* description */}
          <p className="text-white-100 z-10 max-w-sm 4xl:max-w-lg 4xl:text-lg 4xl:pt-20 pt-10 content font-poppins font-medium text-tiny leading-tight px-3.5">
            {description}
          </p>
          {/* buttons */}
          <div className="flex space-x-4 z-10 justify-around items-center w-full px-2">
            <a
              aria-disabled
              className={`rounded-md flex justify-center items-center space-x-4 ${
                links.primary.disabled
                  ? "cursor-not-allowed pointer-events-none bg-gray-200 text-white-100 opacity-80"
                  : "bg-black-100 text-white-200"
              }  px-6 pt-1 pb-1.5 4xl:pb-2.5`}
              href={links.primary.url}
              target="_blank"
            >
              <span className="text-white-200 text-tiny 4xl:text-lg">
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
              className="underline text-white-200 text-tiny 4xl:text-lg"
              href={links.secondary.url}
              target="_blank"
            >
              {links.secondary.label}
            </a>
            {/* <button>{links.secondary}</button> */}
          </div>
        </div>
        {/* Mockup */}
        <div className="overflow-hidden">
          <div
            className="absolute right-0 4xl:right-80 transform"
            style={{
              transform: mockupTransform ? mockupTransform : "translateY(-60%)",
            }}
          >
            {mockup}
          </div>
        </div>
      </div>
    );

  if (direction === "rtl")
    return (
      <div className={`Section px-40 4xl:px-96 h-96 4xl:h-128 w-full flex`}>
        {/* Background Dots */}
        <span
          className="absolute z-0 flex flex-col space-y-4 text-black-200 font-black transform translate-y-72 translate-x-40 4xl:translate-y-96  4xl:left-144"
          style={{ fontSize: "750px", opacity: "3%" }}
        >
          {Icons(ICON_NAMES.DOTS)}
          {Icons(ICON_NAMES.DOTS)}
        </span>
        {/* bg */}
        <div
          className={`${determineColor()} z-0 w-full h-96 4xl:h-128 absolute left-0`}
        ></div>
        {/* Stripe */}
        <div className="stripe absolute h-11 w-52 flex justify-start items-center px-3 text-white-100  bg-black-100 text-xs font-poppins font-normal transform rotate-90 -right-4 translate-y-8 4xl:w-64 4xl:h-14 4xl:text-tiny 4xl:px-4 4xl:right-44">
          <span className="transform rotate-180">{stripeText}</span>
        </div>
        {/* techs */}
        <div className="stripe absolute h-10 pr-4 pl-0 flex text-white-100 bg-black-100 text-xs font-normal font-poppins transform rotate-90 translate-y-80 left-12 4xl:left-44 4xl:h-14 4xl:translate-y-124 4xl:text-sm">
          <div className="sub-techs relative flex justify-center items-center space-x-3.5">
            {/* button */}
            <div className="absolute bg-black-100 z-20 p-1 transform rotate-90 bottom-full left-full -translate-x-7 4xl:p-1.5 4xl:-translate-x-9 4xl:translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 4xl:h-6 4xl:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="transform font-medium uppercase">technologies</div>
            <div className="transform -rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
        {/* Mockup */}
        <div className="overflow-hidden w-full">
          <div
            className="absolute left-44 transform 4xl:left-128"
            style={{
              transform: mockupTransform ? mockupTransform : "translateY(-36%)",
            }}
          >
            {mockup}
          </div>
        </div>
        {/* Content */}
        <div className="content flex-shrink-0 flex flex-col space-y-10 py-5 max-w-max justify-center items-center 4xl:space-y-16">
          {/* title */}
          <div className="relative h-16 w-32 title text-6xl font-tiempos font-bold self-start ml-8 4xl:ml-10 4xl:text-8xl">
            <span className="absolute whitespace-nowrap text-white-100 opacity-95">
              {title.light}
            </span>
            <span className="absolute whitespace-nowrap top-1/2 transform -right-1/2 translate-x-3/4 text-black-100 4xl:translate-y-0 4xl:-right-32">
              {title.dark}
            </span>
          </div>
          {/* description */}
          <p
            className={`${
              color === "teal" ? "text-black-100" : "text-white-100"
            } z-10 max-w-sm pt-10 content font-poppins font-medium text-tiny leading-tight px-3.5 4xl:max-w-lg 4xl:text-lg 4xl:pt-20`}
          >
            {description}
          </p>
          {/* buttons */}
          <div className="flex space-x-4 z-10 justify-around items-center w-full px-2">
            <a
              className={`rounded-md flex justify-center items-center space-x-4 ${
                links.primary.disabled
                  ? "cursor-none bg-gray-200 text-black-200"
                  : "bg-black-100 text-white-200"
              }  px-6 pt-1 pb-1.5 4xl:pb-2.5`}
              href={links.primary.url}
              target="_blank"
            >
              <span className="text-white-200 text-tiny 4xl:text-lg">
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
              className={`underline ${
                color === "teal" ? "text-black-100" : "text-white-100"
              } text-tiny 4xl:text-lg`}
              href={links.secondary.url}
              target="_blank"
            >
              {links.secondary.label}
            </a>
            {/* <button>{links.secondary}</button> */}
          </div>
        </div>
      </div>
    );
};

export default ProjectsSection;
