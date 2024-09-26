import { Suspense, lazy, useMemo } from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ICON_NAMES, Icons } from './svg';
import { useWindowSize, useIntersection } from 'react-use';
import { Parallax } from 'react-scroll-parallax';
import { autoPlay } from 'react-swipeable-views-utils';

import Card from './components/Card';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Theme from './Theme';
import TEXTS from './content/texts';
import LINKS from './content/links';
import CONTACT from './content/contact';
import ProjectsSection from './components/ProjectsSection';
import SideMenu from './components/SideMenu';
import useScrollbarSize from 'react-scrollbar-size';

import resumeFile from './assets/Resume-Meshari-Sulaiman.pdf';
import { PUBLIC_URL } from './env.js'; // import the PUBLIC_URL variable
import SimpleCard from './components/SimpleCard.js';

// Images
const SingularityMockupSVG = lazy(() => import('./components/SingularityMockupSVG'));
const TictacgoMockupSVG = lazy(() => import('./components/TictacgoMockupSVG'));
const NoorScraperMockupSVG = lazy(() => import('./components/NoorScraperMockupSVG'));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  const { width: windowWidth } = useWindowSize();
  const { height: _scrollHeight, width: _scrollWidth } = useScrollbarSize();
  const [activeStep, setActiveStep] = useState(0);
  const [scrollable, setScrollable] = useState(true);
  const [scroll, setScroll] = useState(window.scrollY);

  const scrollWidth = useMemo(() => _scrollWidth, []);

  const [intersected, setIntersected] = useState(false);
  const maxSteps = 4;

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '100px',
    threshold: 0.75,
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

  const isMobile = () => {
    if (windowWidth >= 440) return false;
    return true;
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e));

    return () => {
      window.removeEventListener('scroll', (e) => handleNavigation(e));
    };
  });

  useEffect(() => {
    console.log(intersection);
    setIntersected(!(intersection && intersection.intersectionRatio < 1));
  }, [intersection]);

  return (
    <Theme>
      <div className='App relative bg-white-200 flex flex-col overflow-hidden'>
        {/* Arrow to up */}
        {/* eslint-disable */}
        <a
          href='#'
          className={`w-11 h-11 z-999 sm:w-12 sm:h-12 4xl:w-20 4xl:h-20 ${
            !intersected ? 'opacity-100' : 'opacity-0'
          } fixed right-5 bottom-5 sm:right-8 sm:bottom-8 rounded-full bg-teal-100 flex justify-center items-center shadow-md text-white-100`}
          style={{ filter: `hue-rotate(${scroll}deg)` }}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 sm:h-9 sm:w-9 4xl:w-12 4xl:h-12' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' clipRule='evenodd' />
          </svg>
        </a>

        {/* Navbar */}
        <header className='flex justify-center'>
          <a className='pt-5 sm:hidden' href='#'>
            {Icons(ICON_NAMES.LOGO, 60)}
          </a>
          <div className={`sidemenu sm:hidden z-999 fixed left-0 top-[3vh]`}>
            <div className={`absolute top-1 animate-fade-in-out translate-y-1/2 translate-x-[70%] left-0`}>{Icons(ICON_NAMES.SCRIBBLE_ARROW, 60)}</div>
            <div className='animate-fade-in-nodelay'>
              <SideMenu intersected={true} />
            </div>
          </div>
          <nav className={`hidden sm:block py-2 w-full z-999 bg-white-200 3xl:py-6`}>
            <ul className='flex space-x-6 justify-center items-center text-sm 3xl:text-tiny 4xl:text-xl text-black-100 3xl:space-x-14'>
              <li className='px-2.5 py-1 uppercase hover:underline'>
                <a href='#summary'>Summary</a>
              </li>

              <li className='px-2.5 py-1 uppercase hover:underline'>
                <a href='#technologies'>technologies</a>
              </li>
              <li className='px-2.5 py-1'>
                <a href='#'>{Icons(ICON_NAMES.LOGO, 30)}</a>
              </li>
              <li className='px-2.5 py-1 uppercase hover:underline'>
                <a href='#contact'>contact</a>
              </li>
              <li className='px-2.5 py-1 uppercase hover:underline'>
                <a href='/Resume-Meshari-Sulaiman.pdf' download>
                  <div className='flex justify-center items-center space-x-2'>
                    <span>resume</span>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className='bg-white-200 flex flex-col'>
          {/* Hero */}
          <section className='hero relative selection:bg-teal-100 px-4 flex flex-col justify-between items-center leading-none text-black-100 sm:pt-4 md:pt-8 lg:justify-between lg:px-22 lg:flex-row lg-justify-center lg:items-center lg:h-screen lg:pt-10 xl:px-[10vw] 2xl:px-[12vw] 2xl:pt-0 3.5xl:px-64 4xl:px-80'>
            {/* hero-copy */}
            <div className='hero-text grow w-full flex flex-col h-[68vh] lg:h-full mt-16 items-center justify-center space-y-12 sm:pb-22 md:items-start lg:pl-4 xl:h-auto'>
              {/* Text  */}
              <div className='Text flex flex-col w-full'>
                <h4 className='text-base font-medium tracking-wider leading-tight mb-6 font-tiempos self-start sm:text-lg lg:text-base 2xl:text-xl 4xl:text-4xl 3xl:text-2xl'>
                  Technical Lead <strong>/</strong>
                  <br /> Creative Technologist
                </h4>
                <h1 className='text-[90px] sm:pb-0 whitespace-nowrap font-tiempos font-black leading-[0.85] tracking-tight flex-grow-0 max-w-min sm:text-11xl md:text-9xl 3xl:text-10xl 4xl:text-17xl'>
                  Meshari
                </h1>
                <div className='flex ml-1 sm:ml-0 flex-col space-y-1.5 text-base font-tiempos self-start py-1'>
                  {/* <h4 className='text-base self-start font-semibold tracking-wide leading-tight sm:text-lg lg:text-base lg:text-right 2xl:text-xl 4xl:text-4xl 3xl:text-2xl'>
                    Bridging the gap between creativity and technology to deliver innovative digital experiences.
                  </h4>
                    */}
                  <div className='text-[14px] font-light leading-tight flex flex-col space-y-1 2xl:text-base 4xl:text-lg'>Fullstack TypeScript & JavaScript</div>
                </div>
              </div>
              {/* Artwork + call to action */}
              <div className='diagram flex z-40' ref={intersectionRef}>
                {/* Design */}
                <div className='design relative'>
                  <svg className='w-119' viewBox='0 0 443 261' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M338.644 14H319V45.5H338.644V53H443V23H338.644V14Z' fill='#FD7382' />
                    <text fill='white' xmlSpace='preserve' style={{ whiteSpace: 'pre' }} fontFamily='Poppins' fontSize='13' fontWeight='600' letterSpacing='0em'>
                      <tspan x='367.708' y='42.55'>
                        DEPLOY
                      </tspan>
                    </text>
                    <path d='M265 0H245.861V22.6364H159V52.8182H222.306V83H242.181V52.8182H265V0Z' fill='#7C49E9' />
                    <text fill='white' xmlSpace='preserve' style={{ whiteSpace: 'pre' }} fontFamily='Poppins' fontSize='13' fontWeight='600' letterSpacing='0em'>
                      <tspan x='176.11' y='42.55'>
                        IMPLEMENT
                      </tspan>
                    </text>
                    <path d='M105 23H0V53.1266H85.2353V64.4241H68V261H88.9412V84.0063H105V53.1266V23Z' fill='#45D6BA' />
                    <text fill='white' xmlSpace='preserve' style={{ whiteSpace: 'pre' }} fontFamily='Poppins' fontSize='13' fontWeight='600' letterSpacing='0em'>
                      <tspan x='24' y='42.55'>
                        MANAGE
                      </tspan>
                    </text>
                    <rect x='21' y='154' width='108' height='26' fill='#060B43' />
                    <text fill='white' xmlSpace='preserve' style={{ whiteSpace: 'pre' }} fontFamily='Poppins' fontSize='13' letterSpacing='0em' fontWeight={600}>
                      <tspan x='35' y='171'>
                        Contact me
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            {/* summary for desktop */}
            <div className='hidden lg:flex justify-center items-center grow h-full summary w-full bg-white-200'>
              {/* Background Summary floating text */}
              <div className='flex flex-col space-y-80 scroll-mt-72 2xl:scroll-mt-80' id='summary'>
                {/* Summary */}
                <div className='hero-cards flex flex-col justify-center items-center lg:self-center xl:self-auto lg:pt-6 2xl:pt-0 2xl:pb-10 relative'>
                  {/* Background Dots */}
                  <span className='absolute z-0 text-black-200 font-black scale-85 -left-8 -top-6 sm:left-0 sm:top-0 sm:scale-100 lg:-left-8 lg:scale-103' style={{ fontSize: '750px', opacity: '3%' }}>
                    <div className='flex flex-wrap justify-evenly items-center' style={{ width: '283px', height: '158px' }}>
                      {Array(88)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className='w-2 h-2 mx-2 bg-black-200' />
                        ))}
                    </div>
                    {/* {Icons(ICON_NAMES.DOTS)} */}
                  </span>

                  <div className='py-2 px-3 w-[100vw] sm:max-w-xl lg:px-2 lg:max-w-sm xl:max-w-md 4xl:px-14 4xl:max-w-2xl'>
                    <AutoPlaySwipeableViews interval={12000} axis={'x'} index={activeStep} onChangeIndex={handleStepChange}>
                      <div className='py-2 px-3 w-[100vw] sm:max-w-xl lg:px-2 lg:max-w-[430px] 4xl:px-14 4xl:max-w-2xl'>
                        <SimpleCard title='SUMMARY' content={TEXTS.SUMMARY_CONTENT.en} stripeText='' right={handleNext} />
                      </div>
                      <Card
                        title={Icons(ICON_NAMES.TECH_LEAD_TITLE, 285)}
                        content={TEXTS.LEADERSHIP_CONTENT.en}
                        stripeText='Leadership'
                        right={handleNext}
                        left={handleBack}
                        icons={[Icons(ICON_NAMES.JIRA, 52), Icons(ICON_NAMES.CONFLUENCE, 52), Icons(ICON_NAMES.BITBUCKET, 64)]}
                      />
                      <Card
                        title={Icons(ICON_NAMES.BACKEND_TITLE, 250)}
                        content={TEXTS.BACKEND_CONTENT.en}
                        stripeText='Development'
                        right={handleNext}
                        left={handleBack}
                        icons={[Icons(ICON_NAMES.NODEJS, 52), Icons(ICON_NAMES.EXPRESS, 52), Icons(ICON_NAMES.MONGODB, 64)]}
                      />
                      <Card
                        title={Icons(ICON_NAMES.FRONTEND_TITLE, 250)}
                        content={TEXTS.FRONTEND_CONTENT.en}
                        stripeText='Development'
                        right={handleNext}
                        left={handleBack}
                        icons={[Icons(ICON_NAMES.REACTJS, 36), Icons(ICON_NAMES.JAVASCRIPT, 39), Icons(ICON_NAMES.TAILWIND, 60)]}
                      />
                      <Card
                        title={Icons(ICON_NAMES.UIUX_TITLE, 150)}
                        condensed
                        content={TEXTS.UIUX_CONTENT.en}
                        stripeText='Design'
                        left={handleBack}
                        icons={[Icons(ICON_NAMES.XD, 30), Icons(ICON_NAMES.ILLUSTRATOR, 30), Icons(ICON_NAMES.PHOTOSHOP, 30)]}
                      />
                    </AutoPlaySwipeableViews>
                  </div>

                  <MobileStepper steps={maxSteps} position='static' activeStep={activeStep} />
                </div>
              </div>
            </div>
            {/* Background letter M */}
            <span
              className='M absolute select-none z-0 text-black-200 font-black font-tiempos right-full text-34xl translate-y-44 translate-x-80 xl:translate-y-10 3xl:translate-y-16 transform xl:translate-x-122 xl:text-45xl 3xl:text-50xl 3.5xl:text-55xl 3.5xl:translate-x-144'
              style={{ opacity: '3%' }}>
              M
            </span>
          </section>
          <section className='lg:hidden summary w-full bg-white-200 mt-[255px]'>
            {/* Background Summary floating text */}
            <Parallax speed={7}>
              <span
                className='projects-bg-text absolute transform leading-[110px] select-none z-0 text-12xl text-black-200 font-black font-tiempos left-0 -top-16 -translate-x-2 sm:translate-x-0 -translate-y-3/4 2xl:text-14xl'
                style={{ opacity: '4%' }}>
                {'Summ\nary'}
              </span>
            </Parallax>
            <div className='flex flex-col space-y-80 scroll-mt-72 2xl:scroll-mt-80' id='summary'>
              {/* Summary */}
              <div className='hero-cards flex flex-col justify-center items-center lg:self-center xl:self-auto lg:pt-6 2xl:pt-0 2xl:pb-10 relative'>
                {/* Background Dots */}
                <span className='absolute z-0 text-black-200 font-black scale-85 -left-8 -top-6 sm:left-0 sm:top-0 sm:scale-100 lg:-left-8 lg:scale-103' style={{ fontSize: '750px', opacity: '3%' }}>
                  <div className='flex flex-wrap justify-evenly items-center' style={{ width: '283px', height: '158px' }}>
                    {Array(88)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className='w-2 h-2 mx-2 bg-black-200' />
                      ))}
                  </div>
                  {/* {Icons(ICON_NAMES.DOTS)} */}
                </span>

                <div className='py-2 px-3 w-[100vw] sm:max-w-xl lg:px-2 lg:max-w-sm xl:max-w-md 4xl:px-14 4xl:max-w-2xl'>
                  <SimpleCard title='' content={TEXTS.SUMMARY_CONTENT.en} stripeText='' />
                </div>
              </div>
            </div>
          </section>
          {/* Skills */}
          <section className='work w-full bg-white-200 mt-[255px]'>
            {/* Background Work floating text */}
            <Parallax speed={7} className='lg:hidden'>
              <span
                className='projects-bg-text absolute transform select-none z-0 text-11xl text-black-200 font-black font-tiempos left-20 -top-10 -translate-y-3/4 -translate-x-1/4 2xl:text-14xl'
                style={{ opacity: '4%' }}>
                Skills
              </span>
            </Parallax>
            <div className='flex flex-col space-y-80 scroll-mt-72 2xl:scroll-mt-80' id='work'>
              {/* Skills */}
              <div className='lg:hidden hero-cards flex flex-col justify-center items-center lg:self-center xl:self-auto lg:pt-6 2xl:pt-0 2xl:pb-10 relative'>
                {/* Background Dots */}
                <span className='absolute z-0 text-black-200 font-black scale-85 -left-8 -top-12 sm:left-0 sm:top-0 sm:scale-100 lg:-left-8 lg:scale-103' style={{ fontSize: '750px', opacity: '3%' }}>
                  <div className='flex flex-wrap justify-evenly items-center' style={{ width: '283px', height: '158px' }}>
                    {Array(88)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className='w-2 h-2 mx-2 bg-black-200' />
                      ))}
                  </div>
                  {/* {Icons(ICON_NAMES.DOTS)} */}
                </span>

                <div className='py-2 px-3 w-[100vw] sm:max-w-xl lg:px-2 lg:max-w-sm xl:max-w-md 4xl:px-14 4xl:max-w-2xl'>
                  <AutoPlaySwipeableViews interval={1200000} axis={'x'} index={activeStep} onChangeIndex={handleStepChange}>
                    <Card
                      title={Icons(ICON_NAMES.TECH_LEAD_TITLE, 285)}
                      content={TEXTS.LEADERSHIP_CONTENT.en}
                      stripeText='Leadership'
                      right={handleNext}
                      icons={[Icons(ICON_NAMES.JIRA, 52), Icons(ICON_NAMES.CONFLUENCE, 52), Icons(ICON_NAMES.BITBUCKET, 64)]}
                    />
                    <Card
                      title={Icons(ICON_NAMES.BACKEND_TITLE, 250)}
                      content={TEXTS.BACKEND_CONTENT.en}
                      stripeText='Development'
                      right={handleNext}
                      icons={[Icons(ICON_NAMES.NODEJS, 52), Icons(ICON_NAMES.EXPRESS, 52), Icons(ICON_NAMES.MONGODB, 64)]}
                    />
                    <Card
                      title={Icons(ICON_NAMES.FRONTEND_TITLE, 250)}
                      content={TEXTS.FRONTEND_CONTENT.en}
                      stripeText='Development'
                      right={handleNext}
                      left={handleBack}
                      icons={[Icons(ICON_NAMES.REACTJS, 36), Icons(ICON_NAMES.JAVASCRIPT, 39), Icons(ICON_NAMES.TAILWIND, 60)]}
                    />
                    <Card
                      title={Icons(ICON_NAMES.UIUX_TITLE, 150)}
                      condensed
                      content={TEXTS.UIUX_CONTENT.en}
                      stripeText='Design'
                      left={handleBack}
                      icons={[Icons(ICON_NAMES.XD, 30), Icons(ICON_NAMES.ILLUSTRATOR, 30), Icons(ICON_NAMES.PHOTOSHOP, 30)]}
                    />
                  </AutoPlaySwipeableViews>
                </div>

                <MobileStepper steps={maxSteps} position='static' activeStep={activeStep} />
              </div>

              {/* Technologies and tools */}
              <section className='techs-tools to-transparent-bg'>
                <div className='-mt-40'>{Icons(ICON_NAMES.DIVIDER_TECHS_TOP, 1920)}</div>

                <div
                  style={{
                    minHeight: '700px',
                  }}
                  className='bg-black-200 flex flex-col relative justify-center items-center pt-30 xl:pt-5 -scroll-mt-16'
                  id='technologies'>
                  {/* Background techs & tools */}
                  <span
                    className='absolute select-none pl-2 z-0 flex flex-col leading-none -space-y-4 font-black font-tiempos transform left-0 -top-9 text-7xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-14xl 4xl:text-19xl'
                    style={{
                      opacity: '10%',
                      color: '#a8abb2',
                    }}>
                    <span>Technologies</span>
                    <span>& Tools</span>
                  </span>
                  {/* Icons */}
                  <div className='flex w-2/3 h-96 flex-wrap items-center space-y-4 justify-evenly transform scale-125  md:justify-evenly xl:px-10 xl:items-end xl:space-x-10'>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.NODEJS_WHITE, 75)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.EXPRESS_WHITE, 80)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.MONGODB_WHITE, 90)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.SOCKET_IO, 55)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.PUPPETEER_WHITE, 30)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.SEND_GRID, 80)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.PASSPORT_WHITE, 30)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.STRAPI, 60)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.REDIS, 90)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.POSTMAN, 100)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.REACTJS, 45)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.HTML5_WHITE, 29)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.CSS3_WHITE, 29)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.TAILWIND_WHITE, 85)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.JAVASCRIPT, 38)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.BOOTSTRAP, 45)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.XD, 40)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.ILLUSTRATOR, 40)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.PHOTOSHOP, 40)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.GITHUB, 30)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.BITBUCKET, 55)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.JIRA, 45)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.CONFLUENCE, 43)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.DIGITAL_OCEAN, 65)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.AWS, 60)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.HEROKU, 100)}</span>
                    <span className='px-2 md:px-2.5 xl:px-3 2xl:px-4'>{Icons(ICON_NAMES.NETLIFY_WHITE, 100)}</span>
                  </div>
                </div>
                <div className='-scroll-mt-96 xl:-scroll-mt-124' id='contact'>
                  {Icons(ICON_NAMES.DIVIDER_TECHS_BOTTOM, 1920)}
                </div>
              </section>

              {/* Contact */}
              <section className='contact flex flex-col space-y-16 justify-center items-center pb-52 selection:bg-pink-100'>
                <div className='text-7xl font-tiempos text-black-100 font-black -mt-28 sm:text-9xl md:text-11xl xl:text-13xl 2xl:text-14xl 4xl:text-19xl'>Contact</div>
                <div className='flex flex-col text-xl text-black-100 justify-center items-center 4xl:text-4xl'>
                  <a className='hover:underline' href={`mailto:${CONTACT.EMAIL}`}>
                    {CONTACT.EMAIL}
                  </a>
                  <a target='_blank' className='flex justify-center items-center space-x-2 hover:underline' href={CONTACT.LINKEDIN_URL}>
                    <span>LinkedIn</span>
                    <span>{Icons(ICON_NAMES.LINKEDIN, 17)}</span>
                  </a>
                  <a target='_blank' className='flex justify-center items-center space-x-2 hover:underline' href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}`}>
                    <span>Whatsapp</span>
                    <span>{Icons(ICON_NAMES.WHATSAPP, 18)}</span>
                  </a>
                  <a className='hover:underline' href={`tel:+${CONTACT.PHONE_NUMBER}`}>
                    {CONTACT.PHONE_NUMBER.match(/.{1,3}/g).join(' ')}
                  </a>
                  <span className='font-medium'>Meshari Al-Shalan</span>
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
