import Card from "./components/Card";
import { useState, useRef, useEffect, useCallback } from "react";
import { ICON_NAMES, Icons } from "./svg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import Theme from "./Theme";
import TEXTS from "./content/texts";
import LINKS from "./content/links";
import ProjectsSection from "./components/ProjectsSection";
import SingularityMockupSVG from "./components/SingularityMockupSVG";
import TictacgoMockupSVG from "./components/TictacgoMockupSVG";
import NoorScraperMockupSVG from "./components/NoorScraperMockupSVG";
import { useWindowSize, useIntersection, useScrolling } from "react-use";
import { Parallax } from "react-scroll-parallax";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [activeStep, setActiveStep] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);
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

  const handleNavigation = useCallback(
    (e) => {
      setScroll(window.scrollY);
    },
    [scroll]
  );

  const determineNoorTransform = () => {
    if (windowWidth > 2000) return "translate(-0%, -63%)";
    return "translate(-0%, -60%)";
  };
  const determineTicTransform = () => {
    if (windowWidth > 2000) return "translate(-0%, -31%)";
    return "";
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [scroll]);

  useEffect(() => {
    console.log(intersection);
    setIntersected(!(intersection && intersection.intersectionRatio < 1));
  }, [intersection]);

  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  return (
    <Theme>
      <div className="App relative bg-white-200 flex flex-col overflow-hidden">
        {/* Arrow to up */}
        <a
          href="#"
          className={`w-12 h-12 4xl:w-20 4xl:h-20 ${
            !intersected ? "opacity-100" : "opacity-0"
          } fixed z-50 right-8 bottom-8 rounded-full bg-teal-100 flex justify-center items-center shadow-md text-white-100`}
          style={{ filter: `hue-rotate(${scroll}deg)` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 4xl:w-12 4xl:h-12"
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

        <header className="">
          <nav
            className={`py-2 w-full z-50 bg-white-200 ${
              intersected ? "" : "shadow-md fixed"
            }`}
          >
            <ul className="flex space-x-6 justify-center items-end text-sm 3xl:text-base 4xl:text-xl text-black-100">
              <li className="px-2.5 py-2 uppercase hover:underline">
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
              <li className="px-2.5 py-2 uppercase hover:underline">
                <a href="#work">work</a>
              </li>

              <li className="px-2.5 py-2">
                <a href="#">{Icons(ICON_NAMES.LOGO, 140)}</a>
              </li>
              <li className="px-2.5 py-2 uppercase hover:underline">
                <a href="#technologies">technologies</a>
              </li>
              <li className="px-2.5 py-2 uppercase hover:underline">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main
          className="bg-white-200 flex flex-col space-y-80"
          style={{ paddingTop: !intersected ? "62.5px" : "0px" }}
        >
          <section className="hero relative px-32 4xl:px-80 h-screen flex justify-between items-center leading-none text-black-100">
            {/* Background letter M */}
            <span
              className="absolute select-none z-0 text-black-200 font-black font-tiempos right-full xl:translate-y-10 3xl:translate-y-16 transform xl:translate-x-122 2 xl:text-45xl 3xl:text-50xl"
              style={{ opacity: "3%" }}
            >
              M
            </span>

            {/* Left-side container */}
            <div className="flex flex-col space-y-14">
              {/* Text  */}
              <div className="flex flex-col space-y-3">
                <h1 className="text-11xl font-tiempos font-black leading-none -mb-10 4xl:text-16xl 3xl:text-12xl">
                  Build
                </h1>
                <div className="flex flex-col space-y-1.5 text-base font-tiempos self-end py-3">
                  <h4 className="text-lg tracking-wide font-tiempos font-bold 4xl:text-4xl 3xl:text-2xl">
                    exceptional experiences
                  </h4>
                  <div className="text-xs flex flex-col space-y-1 4xl:text-lg 3xl:text-sm">
                    <div>Expressively & precisely communicate your values</div>
                    <div>Efficiently achieve your goals.</div>
                  </div>
                </div>
              </div>
              {/* Diagram + call to action */}
              <div
                className="flex space-x-9 items-start self-end mr-6"
                ref={intersectionRef}
              >
                {/* Design - Hire me - Work */}
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:w-20 3xl:w-28 4xl:w-32"
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
                  <div className="absolute flex space-x-14 justify-center items-center whitespace-nowrap transform top-2/3 -translate-y-3/4 translate-x-5 font-medium">
                    <button className="font-medium bg-black-100 text-white-100 xl:-ml-2 xl:pt-1.5 xl:pb-2 xl:px-5 xl:text-tiny 3xl:py-2 3xl:px-6 3xl:text-lg 4xl:text-2xl 4xl:pt-2 4xl:pb-3 4xl:px-7">
                      Hire me
                    </button>
                    <a
                      href="#work"
                      className="font-medium text-tiny uppercase underline 4xl:text-lg"
                    >
                      Work
                    </a>
                  </div>
                </div>
                {/* Develop */}
                <div className="xl:-mt-1.5 3xl:-mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:w-24 3xl:w-28 4xl:w-36"
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
                <div className="xl:-mt-4 3xl:-mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:w-20 3xl:w-24 4xl:w-28"
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
            <div className="flex flex-col justify-center items-center relative">
              {/* Background Dots */}
              <span
                className="absolute z-0 text-black-200 font-black left-0 top-0"
                style={{ fontSize: "750px", opacity: "3%" }}
              >
                {Icons(ICON_NAMES.DOTS)}
              </span>
              <div className="px-10 py-2 4xl:px-14 max-w-lg 4xl:max-w-3xl">
                <AutoPlaySwipeableViews
                  interval={5000000}
                  axis={"x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  autoPlay={false}
                >
                  <Card
                    titleBack="Back"
                    titleFront="end"
                    content={TEXTS.BACKEND_CONTENT.en}
                    stripeText="Development"
                    right={handleNext}
                    icons={[
                      Icons(ICON_NAMES.NODEJS_, 52),
                      Icons(ICON_NAMES.EXPRESS, 52),
                      Icons(ICON_NAMES.MONGODB, 64),
                      Icons(ICON_NAMES.PASSPORT, 24),
                    ]}
                  />
                  <Card
                    titleBack="Front"
                    titleFront="end"
                    content={TEXTS.FRONTEND_CONTENT.en}
                    stripeText="Development"
                    right={handleNext}
                    left={handleBack}
                    icons={[
                      Icons(ICON_NAMES.REACTJS, 36),
                      Icons(ICON_NAMES.JAVASCRIPT, 40),
                      Icons(ICON_NAMES.TAILWIND, 60),
                    ]}
                  />
                  <Card
                    titleBack="UI"
                    titleFront="UX"
                    condensed
                    content={TEXTS.UIUX_CONTENT.en}
                    stripeText="Development"
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
          </section>
          <section className="work w-full bg-white-200 ">
            {/* Background projects */}
            <Parallax speed={7}>
              <span
                className="absolute select-none z-0 text-black-200 font-black font-tiempos transform left-0 -translate-y-2/3 "
                style={{ fontSize: "350px", opacity: "3%" }}
              >
                Projects
              </span>
            </Parallax>
            <div className="flex flex-col space-y-144 scroll-mt-60" id="work">
              <div className="scroll-mt-60" id="work">
                <ProjectsSection
                  title={{ light: "Singu", dark: "larity" }}
                  stripeText="design / develop / deploy"
                  description={TEXTS.SINGULARITY_CONTENT.en}
                  color="pink"
                  links={{
                    primary: {
                      label: "Finishing touches.. 🛠",
                      url: "",
                      disabled: true,
                    },
                    secondary: {
                      label: "GitHub repo ",
                      url: LINKS.REPOS.SINGULARITY,
                    },
                  }}
                  mockup={<SingularityMockupSVG />}
                />
              </div>
              <ProjectsSection
                direction="rtl"
                title={{ light: "Tic-tac", dark: "-go" }}
                stripeText="design / develop / deploy"
                description={TEXTS.TICTACGO_CONTENT.en}
                color="teal"
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
                mockup={<TictacgoMockupSVG />}
                mockupTransform={determineTicTransform()}
              />
              <ProjectsSection
                direction="ltr"
                title={{ light: "NOOR", dark: "scraper" }}
                stripeText="design / develop / deploy"
                description={TEXTS.NOOR_SCRAPER_CONTENT.en}
                color="purple"
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
                mockup={<NoorScraperMockupSVG />}
                mockupTransform={determineNoorTransform()}
              />

              {/* More projects.. */}
              <section className="w-full flex flex-col space-y-5 justify-center items-center z-40 ">
                <a
                  href={LINKS.REPOS.MAIN}
                  target="_blank"
                  className="-mt-72 text-2xl font-poppins font-semibold underline text-black-100 4xl:text-4xl"
                >
                  More projects @GitHub..
                </a>
                <div
                  style={{ height: "2px" }}
                  className="w-64 4xl:w-122 bg-black-200 bg-opacity-10 opacity-90 shadow-line"
                />
              </section>
              {/* Technologies and tools */}
              <section>
                <div className="">
                  {Icons(ICON_NAMES.DIVIDER_TECHS_TOP, 1920)}
                </div>

                <div
                  style={{
                    minHeight: "900px",
                  }}
                  className="bg-black-200 flex flex-col relative justify-center items-center pt-30 -scroll-mt-16"
                  id="technologies"
                >
                  {/* Background techs & tools */}
                  <span
                    className="absolute select-none pl-2 z-0 flex flex-col leading-none -space-y-4 font-black font-tiempos transform left-0 -top-9 text-15xl 4xl:text-19xl"
                    style={{
                      opacity: "8%",
                      color: "#4E5776",
                    }}
                  >
                    <span>Technologies</span>
                    <span>& Tools</span>
                  </span>
                  {/* Icons */}
                  <div className="flex w-2/3 h-96 flex-wrap items-end space-x-10 justify-center transform scale-125">
                    {Icons(ICON_NAMES.NODEJS_WHITE, 80)}
                    {Icons(ICON_NAMES.EXPRESS_WHITE, 80)}
                    {Icons(ICON_NAMES.MONGODB_WHITE, 90)}
                    {Icons(ICON_NAMES.SOCKET_IO, 60)}
                    {Icons(ICON_NAMES.SEND_GRID, 70)}
                    {Icons(ICON_NAMES.PASSPORT_WHITE, 25)}
                    {Icons(ICON_NAMES.STRAPI, 60)}
                    {Icons(ICON_NAMES.REDIS, 90)}
                    {Icons(ICON_NAMES.POSTMAN, 110)}
                    {Icons(ICON_NAMES.REACTJS, 45)}
                    {Icons(ICON_NAMES.TAILWIND_WHITE, 95)}
                    {Icons(ICON_NAMES.JAVASCRIPT, 40)}
                    {Icons(ICON_NAMES.BOOTSTRAP, 50)}
                    {Icons(ICON_NAMES.XD, 45)}
                    {Icons(ICON_NAMES.ILLUSTRATOR, 45)}
                    {Icons(ICON_NAMES.PHOTOSHOP, 45)}
                    {Icons(ICON_NAMES.GITHUB, 40)}
                    {Icons(ICON_NAMES.DIGITAL_OCEAN, 75)}
                    {Icons(ICON_NAMES.AWS, 70)}
                    {Icons(ICON_NAMES.HEROKU, 130)}
                  </div>
                </div>
                <div className="-scroll-mt-96" id="contact">
                  {Icons(ICON_NAMES.DIVIDER_TECHS_BOTTOM, 1920)}
                </div>
              </section>
              {/* Contact */}
              <section className="contact flex flex-col space-y-16 justify-center items-center pb-64">
                <div className="text-17xl 4xl:text-19xl font-tiempos text-black-100 font-black -mt-96">
                  Contact
                </div>
                <div className="flex flex-col text-2xl text-black-100 justify-center items-center 4xl:text-4xl">
                  <span>contact@meshu-web.dev</span>
                  <span>+971 589 978 970</span>
                  <span>Meshari Sulaiman</span>
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
