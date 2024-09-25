import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ICON_NAMES, Icons } from '../svg';

const SideMenu = ({ intersected }) => {
  const [open, setOpen] = React.useState(false);

  const theme = React.useMemo(() => {
    return createTheme({
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              background: 'rgb(75,230,201)',
              background: 'linear-gradient(324deg, rgba(75,230,201,1) 0%, rgba(124,73,233,1) 50%, rgba(253,115,130,1) 100%)',
              height: 'max-content !important',
              justifyContent: 'space-evenly',
              top: '20px !important',
              boxShadow: '0px 8px 10px -5px rgb(0 0 0 / 3%), 0px 16px 24px 2px rgb(0 0 0 / 3%), 0px 6px 30px 5px rgb(0 0 0 / 3%)',
              flexDirection: 'row !important',
              borderRadius: '0px 3px 3px 0px',
            },
          },
        },
        MuiBackdrop: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
          },
        },
      },
    });
  }, []);

  const toggleDrawer = React.useCallback((shouldOpen, event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpen(shouldOpen);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='menu'>
        <button
          className={open ? 'hidden' : 'visible text-white-100 pl-1 pr-1.5 py-1 bg-pink-100 shadow-md'}
          onClick={(e) => {
            console.log('onclick');
            toggleDrawer(true, e);
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <Drawer
          anchor='left'
          open={open}
          onClose={(e) => {
            console.log('onclick');
            toggleDrawer(false, e);
          }}>
          <a
            onClick={(e) => {
              toggleDrawer(false, e, 'summary');
            }}
            href='#summary'
            className='flex flex-col justify-start self-center items-center space-y-2 py-4 pl-7 text-2xs font-normal font-poppins text-white-100'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                <path
                  fillRule='evenodd'
                  d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>SUMMARY</span>
          </a>
          <a
            onClick={(e) => {
              toggleDrawer(false, e, 'technologies');
            }}
            href='#technologies'
            className='flex flex-col justify-start self-center items-center space-y-2 py-4 pl-7 text-2xs font-normal font-poppins text-white-100'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>Technologies</span>
          </a>
          <a
            onClick={(e) => {
              toggleDrawer(false, e, 'contact');
            }}
            href='#contact'
            className='flex flex-col justify-start self-center items-center space-y-2 py-4 pl-7 text-2xs font-normal font-poppins text-white-100'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
            </span>
            <span>Contact</span>
          </a>
          <a href='/Resume.pdf' download className='flex flex-col justify-start self-center items-center space-y-2 py-4 px-7 text-2xs font-normal font-poppins text-white-100'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>Resume</span>
          </a>
          <div
            onClick={(e) => {
              toggleDrawer(false, e, 'contact');
            }}
            className='p-2 absolute text-white-100 right-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default SideMenu;
