import { Suspense, lazy, useMemo } from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { ICON_NAMES, Icons } from "./svg";
import { useWindowSize, useIntersection } from "react-use";
import { Parallax } from "react-scroll-parallax";
import { autoPlay } from "react-swipeable-views-utils";

import Card from "./components/Card";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@mui/material/MobileStepper";
import Theme from "./Theme";
import TEXTS from "./content/texts";
import LINKS from "./content/links";
import CONTACT from "./content/contact";
import ProjectsSection from "./components/ProjectsSection";
import SideMenu from "./components/SideMenu";
import useScrollbarSize from "react-scrollbar-size";

// Images
const SingularityMockupSVG = lazy(() =>
  import("./components/SingularityMockupSVG")
);
const TictacgoMockupSVG = lazy(() => import("./components/TictacgoMockupSVG"));
const NoorScraperMockupSVG = lazy(() =>
  import("./components/NoorScraperMockupSVG")
);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  const { width: windowWidth } = useWindowSize();
  const { height: _scrollHeight, width: _scrollWidth } = useScrollbarSize();
  const [activeStep, setActiveStep] = useState(0);
  const [scrollable, setScrollable] = useState(true);
  const [scroll, setScroll] = useState(window.scrollY);

  const scrollWidth = useMemo(() => _scrollWidth, []);

  const [intersected, setIntersected] = useState(false);
  const maxSteps = 3;

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNavigation = useCallback((e) => {
    setScroll(window.scrollY);
  }, []);

  const determineSingularityTransform = () => {
    if (windowWidth >= 1200) return "translateY(-58%)";
    if (windowWidth >= 1024) return "translateY(-34%)";
    return "translate(0.5%,-36%)";
  };
  const determineNoorTransform = () => {
    if (windowWidth >= 2000) return "translate(-0%, -63%)";
    if (windowWidth >= 1280) return "translate(-0%, -57%)";
    if (windowWidth >= 1024) return "translate(-0%, -34%)";
    return "translate(-0%, -35%)";
  };
  const determineTicTransform = () => {
    if (windowWidth >= 2000) return "translate(-0%, -31%)";
    if (windowWidth >= 1280) return "translate(-0%, -33%)";
    if (windowWidth >= 1024) return "translate(-0%, -34%)";
    return "translate(-0%, -59%)";
  };

  const isMobile = () => {
    if (windowWidth >= 440) return false;
    return true;
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  });

  useEffect(() => {
    setIntersected(!(intersection && intersection.intersectionRatio < 1));
  }, [intersection]);

  return (
    <Theme>
      <div className="App relative bg-white-200 flex flex-col overflow-hidden">
        {/* Arrow to up */}
        {/* eslint-disable */}
        <a
          href="#"
          className={`w-11 h-11 z-999 sm:w-12 sm:h-12 4xl:w-20 4xl:h-20 ${
            !intersected ? "opacity-100" : "opacity-0"
          } fixed right-5 bottom-5 sm:right-8 sm:bottom-8 rounded-full bg-teal-100 flex justify-center items-center shadow-md text-white-100`}
          style={{ filter: `hue-rotate(${scroll}deg)` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 sm:h-9 sm:w-9 4xl:w-12 4xl:h-12"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Navbar */}
        <header className="flex justify-center">
          <a className="pt-5 sm:hidden" href="#">
            {Icons(ICON_NAMES.LOGO, 60)}
          </a>
          <div
            className={`sidemenu sm:hidden animate-side-to-up z-999 fixed ${
              !intersected
                ? "animate-side-to-up"
                : "animate-up-to-side -left-10 top-10"
            }`}
          >
            <SideMenu intersected={!intersected} />
          </div>
          <nav
            className={`hidden sm:block py-2 w-full z-999 bg-white-200 3xl:py-6 ${
              intersected ? "" : "animate-fade-in shadow-sm fixed 3xl:py-4"
            }`}
          >
            <ul className="flex space-x-6 justify-center items-center text-sm 3xl:text-tiny 4xl:text-xl text-black-100 3xl:space-x-14">
              <li className="px-2.5 py-1 uppercase hover:underline">
                <a href="#work">work</a>
              </li>

              <li className="px-2.5 py-1 uppercase hover:underline">
                <a href="#technologies">technologies</a>
              </li>
              <li className="px-2.5 py-1">
                <a href="#">{Icons(ICON_NAMES.LOGO, 30)}</a>
              </li>
              <li className="px-2.5 py-1 uppercase hover:underline">
                <a href="#contact">contact</a>
              </li>
              <li className="px-2.5 py-1 uppercase hover:underline">
                <a href="/Resume.pdf" download>
                  <div className="flex justify-center items-center space-x-2">
                    <span>resume</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main
          className="bg-white-200 flex flex-col space-y-80"
          style={{ paddingTop: !intersected && !isMobile() ? "62.5px" : "0px" }}
        >
          {/* Hero */}
          <section className="hero relative selection:bg-teal-100 px-4 flex flex-col justify-between items-center leading-none text-black-100 sm:pt-4 md:pt-8 lg:justify-between lg:px-16 lg:flex-row lg:h-screen lg:pt-10 xl:px-28 2xl:px-36 2xl:pt-0 3xl:px-44 3.5xl:px-64 4xl:px-80">
            {/* Left-side container */}
            <div className="hero-text pb-28 flex flex-col h-screen items-center justify-center space-y-14 sm:pb-22 md:items-start lg:pl-4 xl:h-auto">
              {/* Text  */}
              <div className="Text flex flex-col space-y-3 max-w-min">
                <h1 className="text-10xl font-tiempos font-black leading-none -mb-10 flex-grow-0 max-w-min sm:text-11xl md:text-12xl lg:text-10xl xl:text-11xl 2xl:text-12xl 3xl:text-12xl 4xl:text-17xl">
                  Build
                </h1>
                <div className="flex flex-col space-y-1.5 text-base font-tiempos self-end py-3">
                  <h4 className="text-base tracking-wide font-tiempos font-bold sm:text-lg lg:text-base lg:text-right 2xl:text-xl 4xl:text-4xl 3xl:text-2xl">
                    exceptional experiences
                  </h4>
                  <div className="text-3xs flex flex-col space-y-1 sm:text-xs lg:text-xs 2xl:text-sm 4xl:text-lg 3xl:text-sm">
                    <div>Expressively & precisely communicate your values</div>
                    <div>Efficiently achieve your goals.</div>
                  </div>
                </div>
              </div>
              {/* Diagram + call to action */}
              <div
                className="diagram flex z-40 space-x-9 items-start self-end mr-6"
                ref={intersectionRef}
              >
                {/* Design - Hire me - Work */}
                <div className="design relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-18 sm:w-18 lg:w-20 xl:w-20 3xl:w-28 4xl:w-32"
                    viewBox="0 0 150 330"
                  >
                    <g id="Design" transform="translate(-1688 1819)">
                      <rect
                        id="Rectangle_1122"
                        data-name="Rectangle 1122"
                        width="150"
                        height="42"
                        transform="translate(1688 -1819)"
                        fill="#4be6c9"
                      />
                      <rect
                        id="Rectangle_1123"
                        data-name="Rectangle 1123"
                        width="42"
                        height="28"
                        transform="translate(1838 -1777) rotate(90)"
                        fill="#4be6c9"
                      />
                      <rect
                        id="Rectangle_1124"
                        data-name="Rectangle 1124"
                        width="272"
                        height="28"
                        transform="translate(1811 -1761) rotate(90)"
                        fill="#4be6c9"
                      />
                      <text
                        id="Design-2"
                        data-name="Design"
                        transform="translate(1719 -1790)"
                        fill="#fff"
                        font-size="25"
                        font-family="Poppins-Medium, Poppins"
                        font-weight="500"
                        letter-spacing="0.024em"
                      >
                        <tspan x="0" y="0">
                          Design
                        </tspan>
                      </text>
                    </g>
                  </svg>

                  {/* Hire me & work */}
                  <div className="absolute flex space-x-8 justify-center items-center whitespace-nowrap transform top-2/3 -translate-y-3/4 translate-x-5 font-medium sm:space-x-14">
                    <a
                      href="#contact"
                      className="font-medium bg-black-100 text-white-100 text-xs pt-1 pb-1.5 px-2.5 -ml-1.5 sm:pt-1.5 sm:pb-2 sm:px-5 sm:text-sm lg:text-sm lg:pt-1.5 lg:pb-2 lg:px-5 xl:-ml-2 xl:pt-1.5 xl:pb-2 xl:px-5 xl:text-tiny 3xl:py-2 3xl:px-6 3xl:text-lg 4xl:text-2xl 4xl:pt-2 4xl:pb-3 4xl:px-7"
                    >
                      Hire me
                    </a>
                    <a
                      href="#work"
                      className="font-medium uppercase underline text-xs sm:text-tiny lg:text-sm 4xl:text-lg"
                    >
                      Work
                    </a>
                  </div>
                </div>

                {/* Develop */}
                <div className="develop -mt-1.5 sm:-mt-1.5 lg:-mt-1.5 xl:-mt-1.5 3xl:-mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-22 sm:w-24 lg:w-22 xl:w-24 3xl:w-28 4xl:w-36"
                    viewBox="0 0 177 53"
                  >
                    <g
                      id="Group_2051"
                      data-name="Group 2051"
                      transform="translate(-348 -635)"
                    >
                      <g
                        id="Group_2047"
                        data-name="Group 2047"
                        transform="translate(19 -1091)"
                      >
                        <path
                          id="Union_2"
                          data-name="Union 2"
                          d="M44,1444v-11H17v-42H45v11H193v42Z"
                          transform="translate(312 335)"
                          fill="#fd7382"
                        />
                      </g>
                      <text
                        id="Develop"
                        transform="translate(397 676)"
                        fill="#fff"
                        font-size="25"
                        font-family="Poppins-Medium, Poppins"
                        font-weight="500"
                        letter-spacing="0.024em"
                      >
                        <tspan x="0" y="0">
                          Develop
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </div>
                {/* Deploy */}
                <div className="deploy -mt-3.5 sm:-mt-4 lg:-mt-4 xl:-mt-4 3xl:-mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-18 sm:w-20 lg:w-18 xl:w-20 3xl:w-24 4xl:w-28"
                    viewBox="0 0 150 113.999"
                  >
                    <g
                      id="Group_2052"
                      data-name="Group 2052"
                      transform="translate(-577 -615)"
                    >
                      <g
                        id="Group_2049"
                        data-name="Group 2049"
                        transform="translate(19 -1091)"
                      >
                        <path
                          id="Union_1"
                          data-name="Union 1"
                          d="M119,1505v-41H30v-43H152v-30h28v73H147v41Z"
                          transform="translate(528 315)"
                          fill="#7c49e9"
                        />
                      </g>
                      <text
                        id="Deploy"
                        transform="translate(607 675)"
                        fill="#fff"
                        font-size="25"
                        font-family="Poppins-Medium, Poppins"
                        font-weight="500"
                        letter-spacing="0.024em"
                      >
                        <tspan x="0" y="0">
                          Deploy
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right-side container */}
            <div className="hero-cards flex flex-col justify-center items-center lg:self-center xl:self-auto lg:pt-6 2xl:pt-0 2xl:pb-10 relative">
              {/* Background Dots */}
              <span
                className="absolute z-0 text-black-200 font-black scale-85 -left-8 -top-12 sm:left-0 sm:top-0 sm:scale-100 lg:-left-8 lg:scale-103"
                style={{ fontSize: "750px", opacity: "3%" }}
              >
                <div
                  className="flex flex-wrap justify-evenly items-center"
                  style={{ width: "283px", height: "158px" }}
                >
                  {Array(88)
                    .fill(null)
                    .map((_, i) => (
                      <div key={i} className="w-2 h-2 mx-2 bg-black-200" />
                    ))}
                </div>
                {/* {Icons(ICON_NAMES.DOTS)} */}
              </span>

              <div className="px-19 py-2 max-w-lg sm:max-w-xl lg:px-2 lg:max-w-sm xl:max-w-md 4xl:px-14 4xl:max-w-2xl">
                <AutoPlaySwipeableViews
                  interval={12000}
                  axis={"x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                >
                  <Card
                    title={Icons(ICON_NAMES.BACKEND_TITLE, 250)}
                    content={TEXTS.BACKEND_CONTENT.en}
                    stripeText="Development"
                    right={handleNext}
                    icons={[
                      Icons(ICON_NAMES.NODEJS, 52),
                      Icons(ICON_NAMES.EXPRESS, 52),
                      Icons(ICON_NAMES.MONGODB, 64),
                    ]}
                  />
                  <Card
                    title={Icons(ICON_NAMES.FRONTEND_TITLE, 250)}
                    content={TEXTS.FRONTEND_CONTENT.en}
                    stripeText="Development"
                    right={handleNext}
                    left={handleBack}
                    icons={[
                      Icons(ICON_NAMES.REACTJS, 36),
                      Icons(ICON_NAMES.JAVASCRIPT, 39),
                      Icons(ICON_NAMES.TAILWIND, 60),
                    ]}
                  />
                  <Card
                    title={Icons(ICON_NAMES.UIUX_TITLE, 150)}
                    condensed
                    content={TEXTS.UIUX_CONTENT.en}
                    stripeText="Design"
                    left={handleBack}
                    icons={[
                      Icons(ICON_NAMES.XD, 30),
                      Icons(ICON_NAMES.ILLUSTRATOR, 30),
                      Icons(ICON_NAMES.PHOTOSHOP, 30),
                    ]}
                  />
                </AutoPlaySwipeableViews>
              </div>

              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
              />
            </div>

            {/* Background letter M */}
            <span
              className="M absolute select-none z-0 text-black-200 font-black font-tiempos right-full text-34xl translate-y-44 translate-x-80 xl:translate-y-10 3xl:translate-y-16 transform xl:translate-x-122 xl:text-45xl 3xl:text-50xl 3.5xl:text-55xl 3.5xl:translate-x-144"
              style={{ opacity: "3%" }}
            >
              M
            </span>
          </section>

          {/* Work */}
          <section className="work w-full bg-white-200 ">
            {/* Background Work */}
            <Parallax speed={7}>
              <span
                className="projects-bg-text absolute transform select-none z-0 text-11xl text-black-200 font-black font-tiempos left-20 -top-10 -translate-y-3/4 -translate-x-1/4 2xl:text-14xl"
                style={{ opacity: "4%" }}
              >
                Work
              </span>
            </Parallax>
            <div
              className="flex flex-col space-y-80 scroll-mt-72 2xl:scroll-mt-80"
              id="work"
            >
              <ProjectsSection
                setScrollable={setScrollable}
                title={Icons(ICON_NAMES.SINGULARITY_TITLE, 300)}
                stripeText="design / develop / deploy"
                description={TEXTS.SINGULARITY_CONTENT.en}
                direction="ltr"
                color="pink"
                links={{
                  primary: {
                    label: "singularity.events",
                    url: "https://singularity.events",
                    disabled: false,
                  },
                  secondary: {
                    label: "GitHub repo ",
                    url: LINKS.REPOS.SINGULARITY,
                  },
                }}
                technologies={[
                  Icons(ICON_NAMES.NODEJS_WHITE, 50),
                  Icons(ICON_NAMES.EXPRESS_WHITE, 65),
                  Icons(ICON_NAMES.MONGODB_WHITE, 75),
                  Icons(ICON_NAMES.SEND_GRID, 60),
                  Icons(ICON_NAMES.REDIS, 70),
                  Icons(ICON_NAMES.POSTMAN, 85),
                  Icons(ICON_NAMES.REACTJS, 35),
                  Icons(ICON_NAMES.TAILWIND_WHITE, 70),
                  Icons(ICON_NAMES.XD, 35),
                  Icons(ICON_NAMES.ILLUSTRATOR, 35),
                  Icons(ICON_NAMES.GITHUB, 28),
                  Icons(ICON_NAMES.DIGITAL_OCEAN, 55),
                  Icons(ICON_NAMES.HEROKU, 95),
                ]}
                mockup={
                  <Suspense fallback={<span>Loading...</span>}>
                    <SingularityMockupSVG />
                  </Suspense>
                }
              />
              <ProjectsSection
                setScrollable={setScrollable}
                direction="rtl"
                stripeText="design / develop / deploy"
                title={Icons(ICON_NAMES.TICTACGO_TITLE, 300)}
                description={TEXTS.TICTACGO_CONTENT.en}
                color="teal"
                technologies={[
                  Icons(ICON_NAMES.NODEJS_WHITE, 50),
                  Icons(ICON_NAMES.EXPRESS_WHITE, 65),
                  Icons(ICON_NAMES.SOCKET_IO, 40),
                  Icons(ICON_NAMES.POSTMAN, 85),
                  Icons(ICON_NAMES.HTML5_WHITE, 28),
                  Icons(ICON_NAMES.CSS3_WHITE, 28),
                  Icons(ICON_NAMES.ILLUSTRATOR, 35),
                  Icons(ICON_NAMES.PHOTOSHOP, 35),
                  Icons(ICON_NAMES.GITHUB, 28),
                  Icons(ICON_NAMES.AWS, 55),
                  Icons(ICON_NAMES.HEROKU, 95),
                ]}
                links={{
                  primary: {
                    label: "tic-tac-go.com",
                    url: LINKS.WEBSITES.TIC_TAC_GO,
                  },
                  secondary: {
                    label: "GitHub repo ",
                    url: LINKS.REPOS.TIC_TAC_GO,
                  },
                }}
                mockup={
                  <Suspense fallback={<span>Loading...</span>}>
                    <TictacgoMockupSVG />
                  </Suspense>
                }
                mockupTransform={determineTicTransform()}
              />
              <ProjectsSection
                setScrollable={setScrollable}
                direction="ltr"
                stripeText="design / develop / deploy"
                title={Icons(ICON_NAMES.NOOR_TITLE, 300)}
                description={TEXTS.NOOR_SCRAPER_CONTENT.en}
                color="purple"
                technologies={[
                  Icons(ICON_NAMES.NODEJS_WHITE, 50),
                  Icons(ICON_NAMES.EXPRESS_WHITE, 65),
                  Icons(ICON_NAMES.SOCKET_IO, 40),
                  Icons(ICON_NAMES.PUPPETEER_WHITE, 33),
                  Icons(ICON_NAMES.POSTMAN, 85),
                  Icons(ICON_NAMES.HTML5_WHITE, 28),
                  Icons(ICON_NAMES.CSS3_WHITE, 28),
                  Icons(ICON_NAMES.ILLUSTRATOR, 35),
                  Icons(ICON_NAMES.PHOTOSHOP, 35),
                  Icons(ICON_NAMES.GITHUB, 28),
                  Icons(ICON_NAMES.AWS, 55),
                  Icons(ICON_NAMES.HEROKU, 95),
                ]}
                links={{
                  primary: {
                    label: "noor-scraper.com",
                    url: LINKS.WEBSITES.NOOR_SCRAPER,
                  },
                  secondary: {
                    label: "GitHub repo ",
                    url: LINKS.REPOS.NOOR_SCRAPER,
                  },
                }}
                mockup={
                  <Suspense fallback={<span>Loading...</span>}>
                    <NoorScraperMockupSVG />
                  </Suspense>
                }
                mockupTransform={determineNoorTransform()}
              />

              {/* More projects.. */}
              <section className="w-full flex flex-col space-y-5 justify-center items-center z-999">
                <a
                  href={LINKS.REPOS.MAIN}
                  target="_blank"
                  className="-mt-72 text-1xl font-poppins font-semibold underline text-black-100 2xl:text-2xl 4xl:text-4xl"
                >
                  More projects @GitHub..
                </a>
                <div
                  style={{ height: "2px" }}
                  className="w-1/2 2xl:w-114 4xl:w-122 bg-black-200 bg-opacity-10 opacity-20 shadow-line"
                />
              </section>
              {/* Technologies and tools */}
              <section className="techs-tools to-transparent-bg">
                <div className="-mt-40">
                  {Icons(ICON_NAMES.DIVIDER_TECHS_TOP, 1920)}
                </div>

                <div
                  style={{
                    minHeight: "700px",
                  }}
                  className="bg-black-200 flex flex-col relative justify-center items-center pt-30 xl:pt-5 -scroll-mt-16"
                  id="technologies"
                >
                  {/* Background techs & tools */}
                  <span
                    className="absolute select-none pl-2 z-0 flex flex-col leading-none -space-y-4 font-black font-tiempos transform left-0 -top-9 text-7xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-14xl 4xl:text-19xl"
                    style={{
                      opacity: "8%",
                      color: "#4E5776",
                    }}
                  >
                    <span>Technologies</span>
                    <span>& Tools</span>
                  </span>
                  {/* Icons */}
                  <div className="flex w-2/3 h-96 flex-wrap items-center space-y-4 justify-evenly transform scale-125  md:justify-evenly xl:px-10 xl:items-end xl:space-x-10">
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.NODEJS_WHITE, 75)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.EXPRESS_WHITE, 80)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.MONGODB_WHITE, 90)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.SOCKET_IO, 55)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.PUPPETEER_WHITE, 30)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.SEND_GRID, 80)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.PASSPORT_WHITE, 30)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.STRAPI, 60)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.REDIS, 90)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.POSTMAN, 100)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.REACTJS, 45)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.HTML5_WHITE, 29)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.CSS3_WHITE, 29)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.TAILWIND_WHITE, 85)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.JAVASCRIPT, 38)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.BOOTSTRAP, 45)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.XD, 40)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.ILLUSTRATOR, 40)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.PHOTOSHOP, 40)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.GITHUB, 30)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.DIGITAL_OCEAN, 65)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.AWS, 60)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.HEROKU, 100)}
                    </span>
                    <span className="px-2 md:px-2.5 xl:px-3 2xl:px-4">
                      {Icons(ICON_NAMES.NETLIFY_WHITE, 100)}
                    </span>
                  </div>
                </div>
                <div className="-scroll-mt-96 xl:-scroll-mt-124" id="contact">
                  {Icons(ICON_NAMES.DIVIDER_TECHS_BOTTOM, 1920)}
                </div>
              </section>
              {/* Contact */}
              <section className="contact flex flex-col space-y-16 justify-center items-center pb-52 selection:bg-pink-100">
                <div className="text-7xl font-tiempos text-black-100 font-black -mt-28 sm:text-9xl md:text-11xl xl:text-13xl 2xl:text-14xl 4xl:text-19xl">
                  Contact
                </div>
                <div className="flex flex-col text-xl text-black-100 justify-center items-center 4xl:text-4xl">
                  <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>
                  <a
                    target="_blank"
                    className="flex justify-center items-center space-x-2"
                    href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}`}
                  >
                    <span>Whatsapp</span>
                    <span>{Icons(ICON_NAMES.WHATSAPP, 18)}</span>
                  </a>
                  <a href={`tel:${CONTACT.PHONE_NUMBER}`}>
                    +{CONTACT.PHONE_NUMBER.match(/.{1,3}/g).join(" ")}
                  </a>
                  <span className="font-medium">Meshari Sulaiman</span>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </Theme>
  );
}

export default App;
