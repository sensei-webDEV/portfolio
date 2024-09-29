import React, { useEffect, useState } from 'react';

const Card = ({
  title = '',
  content,
  icons = [],
  stripeText,
  right = null,
  left = null,
  condensed = false,
  wiggleArrow = false,
  intersection = null,
  className = '',
}) => {
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    console.log('Card');
    console.log('isIntersecting', intersection);
    if (wiggleArrow && intersection?.isIntersecting) setWiggle(true);
  }, [wiggleArrow, intersection]);

  return (
    <div
      className={`relative h-[480px] lg:w-[410px] 3xl:w-[550px] card-container flex flex-col items-center justify-between px-8 py-8 m-5 rounded-md bg-white-100 drop-shadow-md ${className}`}
    >
      {/* Stripe */}
      <div className='stripe absolute transform h-7 w-40 px-3 flex justify-start items-center text-sm font-poppins font-normal text-white-100 bg-teal-200 rotate-90 top-12 -left-20 '>
        {stripeText}
      </div>

      {/* Arrows */}
      {left && (
        <div
          onClick={left}
          className='arrow flex justify-center items-center text-white-100 absolute hover:cursor-pointer bg-pink-100 w-8 h-12 transform left-0 top-1/2 rotate-180 -translate-x-1/2 -translate-y-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 sm:h-10 sm:w-10 lg:h-7 lg:w-7 4xl:w-14 4xl:h-14'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      )}
      {right && (
        <div
          onClick={right}
          className={`arrow flex justify-center items-center text-white-100 absolute hover:cursor-pointer bg-pink-100 w-8 h-12 transform right-0 top-1/2 -translate-y-1/2 translate-x-1/2 ${
            wiggle ? 'animate-wiggle' : ''
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 sm:h-10 sm:w-10 lg:h-7 lg:w-7 4xl:w-14 4xl:h-14'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      )}

      {/* title */}
      <div className='title px-3 mt-4'>{title}</div>

      {/* Description */}
      <div
        className='content mt-4 max-w-[30ch] 3xl:text-[16.75px] font-poppins font-normal text-base leading-snug tracking-wide text-justify hyphens-auto pt-2 px-1 lg:text-xs xl:text-tiny'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      {/* Footer */}
      <div className='footer mt-4 w-full flex filter grayscale justify-evenly items-end overflow-y-hidden'>
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
        <a
          href='#technologies'
          className='font-tiempos font-black underline tracking-widest'
        >
          ...
        </a>
      </div>
    </div>
  );
};

export default Card;
