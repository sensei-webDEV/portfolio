import React, { useEffect, useState } from 'react';

const SimpleCard = ({
  title = '',
  content,
  subContent,
  icons = [],
  stripeText,
  right = null,
  left = null,
}) => {
  return (
    <div className='relative card-container flex flex-col items-center justify-start px-6 py-8 m-1.5 rounded-md bg-white-100 drop-shadow-md 4xl:h-126 4xl:w-[92%]'>
      {/* Stripe */}
      <div className='stripe absolute transform h-[33%] px-[1px] flex justify-start items-center text-sm font-poppins font-normal text-white-100 bg-black-100/70 -left-[0px] top-0'>
        {stripeText}
      </div>

      {/* Arrows */}
      {right && (
        <div
          onClick={right}
          className={`arrow hidden absolute hover:cursor-pointer bg-pink-100 transform w-8 h-12 right-0 translate-x-1/2 top-1/2 -translate-y-3/4 text-white-100 lg:flex justify-center items-center hover:scale-103 hover:shadow-md hover:bg-purple-100 sm:w-9 sm:h-14 lg:w-8 lg:h-12 4xl:w-12 4xl:h-16`}
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
      {left && (
        <div
          onClick={left}
          className='arrow hidden absolute hover:cursor-pointer bg-pink-100 w-8 h-12 transform left-0 -translate-x-1/2 top-1/2 -translate-y-3/4 rotate-180 text-white-100 lg:flex justify-center items-center hover:scale-103 hover:shadow-md hover:bg-purple-100 sm:w-9 sm:h-14 lg:w-8 lg:h-12 4xl:w-12 4xl:h-16 '
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
      {title && (
        <div className='title text-black-100/85 self-start text-3xl xl:text-2xl font-tiempos font-black tracking-widest px-3 leading-tight'>
          {title}
        </div>
      )}

      {/* Description */}
      {content && (
        <>
          <div className='block lg:hidden simple-card-content text-black-100 font-poppins text-base leading-normal text-pretty tracking-normal px-0 lg:py-2'>
            <h2 className='font-semibold'>{content}</h2>
            <p className='font-normal mt-2 hyphens-manual text-left whitespace-pre-wrap'>
              {subContent}
            </p>
          </div>
          <div className='hidden lg:block simple-card-content text-black-100 font-poppins text-tiny 2xl:text-base leading-normal text-pretty tracking-normal px-0 lg:py-2'>
            <h2 className='font-semibold'>{content}</h2>
            <p className='font-normal mt-2 hyphens-manual text-left whitespace-pre-wrap'>
              {subContent}
            </p>
          </div>
        </>
      )}

      {/* Footer */}
      {icons.length > 0 && (
        <div className='footer mt-10 max-h-8 4xl:max-h-16 w-full flex filter grayscale justify-evenly items-end overflow-y-hidden'>
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
      )}
    </div>
  );
};

export default SimpleCard;
